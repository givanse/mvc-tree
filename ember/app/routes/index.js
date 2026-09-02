import Route from '@ember/routing/route';
import { schedule } from '@ember/runloop';
import config from 'mvc-tree/config/environment';
import { loadTreeData } from 'mvc-tree/utils/tree-data';

export default class IndexRoute extends Route {
  model() {
    return loadTreeData({ showGrid: config.APP.showGrid });
  }

  afterModel() {
    schedule('afterRender', () => {
      let id = window.location.hash.replace(/^#/, '');
      if (!id) {
        return;
      }
      let panel = document.getElementById(id);
      if (panel && typeof panel.scrollIntoView === 'function') {
        panel.scrollIntoView();
      }
    });
  }
}
