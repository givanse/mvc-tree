import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';
import { articleHtmlFor } from 'mvc-tree/utils/articles';
import DefinitionsShowcase from './definitions-showcase';

export default class ArticlePanel extends Component {
  get articleHtml() {
    return htmlSafe(articleHtmlFor(this.args.node));
  }

  get panelClass() {
    return this.args.node.author ? 'panel-primary' : 'panel-info';
  }

  get hasDefinitions() {
    return this.args.node.definitions && this.args.node.definitions.length;
  }

  <template>
    <div
      id={{@node.id}}
      class="row text_box_info"
      itemscope
      itemtype="http://schema.org/WebPageElement"
    >
      <div class="panel {{this.panelClass}}">
        <div class="panel-heading">
          <h3 class="panel-title" itemprop="headline">
            {{@node.year}}
            {{@node.name}}
          </h3>
          <div class="pull-right button_top">
            <a href="#top">
              <span
                class="glyphicon glyphicon-triangle-top"
                aria-hidden="true"
              ></span>
            </a>
          </div>
        </div>
        <div class="panel-body">
          <div itemprop="text">{{this.articleHtml}}</div>
          {{#if this.hasDefinitions}}
            <DefinitionsShowcase @node={{@node}} @dpatterns={{@dpatterns}} />
          {{/if}}
        </div>
      </div>
    </div>
  </template>
}
