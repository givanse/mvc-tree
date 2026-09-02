import Route from '@ember/routing/route';
import { schedule } from '@ember/runloop';
import config from 'mvc-tree/config/environment';
import { loadTreeData } from 'mvc-tree/utils/tree-data';
import { parseDeepLink } from 'mvc-tree/utils/deep-link';

export default class IndexRoute extends Route {
  model() {
    return loadTreeData({ showGrid: config.APP.showGrid });
  }

  afterModel() {
    schedule('afterRender', () => {
      let link = parseDeepLink(window.location);
      if (!link.id) {
        return;
      }
      let panel = document.getElementById(link.id);
      if (panel && typeof panel.scrollIntoView === 'function') {
        panel.scrollIntoView();
      }
    });
  }
}
