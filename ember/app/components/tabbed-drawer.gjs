import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { on } from '@ember/modifier';

export default class TabbedDrawer extends Component {
  @tracked isDrawerShown = true;

  toggleDrawer = () => {
    this.isDrawerShown = !this.isDrawerShown;
  };

  <template>
    <section
      class="tabbed_drawer {{if this.isDrawerShown 'is-drawer-shown'}}"
      itemscope
      itemtype="http://schema.org/SiteNavigationElement"
    >
      <div class="td_tab" {{on "click" this.toggleDrawer}}>
        <span class="glyphicon glyphicon-option-vertical" aria-hidden="true"></span>
      </div>
      <div class="td_drawer">
        {{yield}}
      </div>
    </section>
  </template>
}
