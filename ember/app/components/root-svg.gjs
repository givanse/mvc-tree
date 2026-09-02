import Component from '@glimmer/component';
import { on } from '@ember/modifier';
import { service } from '@ember/service';
import { buildGridLines, buildYearLine } from '@svg-layout/lines';
import {
  generatePathToChild,
  generateBindingPath,
} from '@svg-layout/path-factory';

export default class RootSvg extends Component {
  @service overlays;

  get svgenv() {
    return this.args.data.svgenv;
  }

  get gridLines() {
    if (!this.svgenv.showGrid) {
      return [];
    }
    return buildGridLines(this.svgenv);
  }

  get yearLines() {
    return this.args.data.rowDividers.map((divider) =>
      buildYearLine(this.svgenv, divider.year, divider.row),
    );
  }

  get pathsToChildren() {
    let { dpatterns, byId } = this.args.data;
    let paths = [];

    dpatterns.forEach((node) => {
      (node.children || []).forEach((childId) => {
        let child = byId[childId];
        if (!child) {
          return;
        }
        let d = generatePathToChild(this.svgenv, node, child);
        if (d) {
          paths.push(d);
        }
      });
    });

    return paths;
  }

  get pathsBoundNodes() {
    let paths = [];

    this.args.data.gridNodes.forEach((node) => {
      (node.related || []).forEach((related) => {
        let overlayClasses =
          related.classNames && related.classNames.length
            ? related.classNames.filter(Boolean)
            : [];
        let d = generateBindingPath(this.svgenv, node, related);
        if (d) {
          let hidden = overlayClasses.some(
            (name) => name.indexOf('tech_') === 0 && !this.overlays.isVisible(name),
          );
          paths.push({
            path: d,
            classNames: (
              'line line-dashed ' +
              overlayClasses.join(' ') +
              (hidden ? ' hidden' : '')
            ).trim(),
          });
        }
      });
    });

    return paths;
  }

  isTechHidden = (classNameTech) => {
    return !this.overlays.isVisible(classNameTech);
  };

  onTreeClick = (event) => {
    let group = event.target.closest && event.target.closest('g[data-node-id]');
    if (!group) {
      return;
    }
    let nodeId = group.getAttribute('data-node-id');
    window.location.hash = nodeId;
    let panel = document.getElementById(nodeId);
    if (panel && typeof panel.scrollIntoView === 'function') {
      panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  <template>
    <svg
      id="mvc_tree"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="100%"
      height="100%"
      viewBox={{this.svgenv.viewBox}}
      preserveAspectRatio="xMinYMin"
      {{on "click" this.onTreeClick}}
    >
      {{#each this.gridLines as |line|}}
        <path d={{line}} fill="none" class="grid_line"></path>
      {{/each}}

      {{#each this.yearLines as |line|}}
        <text x={{line.x}} y={{line.y}} class="year_line_txt">
          <tspan dy="4.233003616333008">{{line.year}}</tspan>
        </text>
        <path d={{line.path}} fill="none" class="year_line_path"></path>
      {{/each}}

      {{#each @data.headers as |node|}}
        <g>
          <rect
            class="node_header"
            x={{node.x_padded}}
            y={{node.y_padded}}
            height={{node.height}}
            width={{node.width}}
          ></rect>
          <text class="node_header_title" x={{node.cx}} y={{node.cy}}>
            <tspan>{{node.title}}</tspan>
          </text>
        </g>
      {{/each}}

      {{#each this.pathsToChildren as |dAttr|}}
        <path d={{dAttr}} class="line"></path>
      {{/each}}

      {{#each this.pathsBoundNodes as |pathObj|}}
        <path d={{pathObj.path}} class={{pathObj.classNames}}></path>
      {{/each}}

      {{#each @data.dpatterns as |node|}}
        <g class="g_{{node.id}}" data-node-id={{node.id}}>
          <rect
            class="node_design"
            x={{node.x_padded}}
            y={{node.y_padded}}
            ry="7"
            rx="7"
            r="7"
            height={{node.height}}
            width={{node.width}}
          ></rect>
          <text class="node_txt" x={{node.cx}} y={{node.y_padded}}>
            <tspan dy="16.8">{{node.name}}</tspan>
            <tspan x={{node.cx}} dy="16.8">{{node.year}}</tspan>
            <tspan class="node_txt_auth" x={{node.cx}} dy="16.8">{{node.author}}</tspan>
          </text>
        </g>
      {{/each}}

      {{#each @data.technologies as |node|}}
        {{#each node.classNames as |classNameTech|}}
          <g
            class="g_{{node.id}} {{classNameTech}}{{if (this.isTechHidden classNameTech) ' hidden'}}"
            data-node-id={{node.id}}
          >
            <ellipse
              class="node_tech"
              cx={{node.cx}}
              cy={{node.cy}}
              rx={{node.rx}}
              ry={{node.ry}}
            ></ellipse>
            <text class="node_txt" x={{node.cx}} y={{node.y_padded}}>
              <tspan dy="32">{{node.name}}</tspan>
              <tspan x={{node.cx}} dy="16.8">{{node.year}}</tspan>
            </text>
          </g>
        {{/each}}
      {{/each}}
    </svg>
  </template>
}
