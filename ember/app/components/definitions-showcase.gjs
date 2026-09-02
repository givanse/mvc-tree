import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { on } from '@ember/modifier';

export default class DefinitionsShowcase extends Component {
  @tracked selectedPatternId = null;

  get availablePatterns() {
    let currentId = this.args.node.id;
    return (this.args.dpatterns || [])
      .filter((pattern) => {
        return (
          pattern.id !== currentId &&
          pattern.definitions &&
          pattern.definitions.length
        );
      })
      .slice()
      .sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
  }

  get selectedPattern() {
    if (!this.selectedPatternId) {
      return null;
    }
    return this.availablePatterns.find(
      (pattern) => pattern.id === this.selectedPatternId,
    );
  }

  onSelect = (event) => {
    this.selectedPatternId = event.target.value;
  };

  <template>
    <div itemscope itemtype="http://schema.org/Table">
      <h4 class="bg-info text-info">Pattern Elements</h4>

      <div>
        <div class="col-xs-12 col-md-6"></div>
        <div class="hidden-sm col-md-6">
          <select class="form-control c-select" {{on "change" this.onSelect}}>
            <option selected hidden>compare to:</option>
            {{#each this.availablePatterns as |pattern|}}
              <option value={{pattern.id}}>{{pattern.name}}</option>
            {{/each}}
          </select>
        </div>
      </div>

      <div class="col-xs-12 col-md-6">
        <ul class="list-group">
          {{#each @node.definitions as |definition|}}
            <li class="list-group-item">
              <b>{{definition.term}}</b>: {{definition.text}}
            </li>
          {{/each}}
        </ul>
      </div>

      <div class="col-md-6">
        <div class="visible-sm-block">
          <select class="form-control c-select" {{on "change" this.onSelect}}>
            <option selected hidden>compare to:</option>
            {{#each this.availablePatterns as |pattern|}}
              <option value={{pattern.id}}>{{pattern.name}}</option>
            {{/each}}
          </select>
        </div>
        <ul class="list-group compare_to">
          {{#each this.selectedPattern.definitions as |definition|}}
            <li class="list-group-item">
              <b>{{definition.term}}</b>: {{definition.text}}
            </li>
          {{/each}}
        </ul>
      </div>
    </div>
  </template>
}
