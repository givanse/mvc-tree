import Component from '@glimmer/component';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import { service } from '@ember/service';
import { CHECKBOXES_LIST } from 'mvc-tree/services/overlays';

export default class OverlayCheckboxes extends Component {
  @service overlays;

  checkboxes = CHECKBOXES_LIST;

  <template>
    <div class="container_view master_overlay_checkbox">
      <div
        class="overlay_checkbox {{if this.overlays.masterChecked 'checked'}}"
        data-overlay-master="true"
        itemscope
        itemtype="http://schema.org/SiteNavigationElement"
        {{on "click" this.overlays.toggleAll}}
      >
        All
      </div>

      {{#each this.checkboxes as |item|}}
        <div
          class="overlay_checkbox {{if (this.overlays.isVisible item.overlayClassName) 'checked'}}"
          data-overlay={{item.overlayClassName}}
          itemscope
          itemtype="http://schema.org/SiteNavigationElement"
          {{on "click" (fn this.overlays.toggle item.overlayClassName)}}
        >
          {{item.name}}
        </div>
      {{/each}}
    </div>
  </template>
}
