import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export const CHECKBOXES_LIST = [
  { name: 'Historical', overlayClassName: 'tech_hist', checked: true },
  { name: 'Significant', overlayClassName: 'tech_sig', checked: true },
  { name: 'Java', overlayClassName: 'tech_java', checked: false },
  { name: 'JavaScript', overlayClassName: 'tech_js', checked: true },
  { name: 'Microsoft', overlayClassName: 'tech_ms', checked: true },
  { name: 'PHP', overlayClassName: 'tech_php', checked: false },
  { name: 'Python', overlayClassName: 'tech_python', checked: false },
  { name: 'Ruby', overlayClassName: 'tech_ruby', checked: false },
  { name: 'Smalltalk', overlayClassName: 'tech_smalltalk', checked: true },
];

function defaultStates() {
  let states = {};
  CHECKBOXES_LIST.forEach((item) => {
    states[item.overlayClassName] = item.checked;
  });
  return states;
}

export default class OverlaysService extends Service {
  @tracked masterChecked = false;
  @tracked states = defaultStates();

  isVisible = (className) => {
    if (!className) {
      return true;
    }
    return this.states[className] !== false;
  };

  toggle = (className) => {
    this.states = {
      ...this.states,
      [className]: !this.states[className],
    };
    this.masterChecked = false;
  };

  toggleAll = () => {
    let next = !this.masterChecked;
    this.masterChecked = next;
    let states = {};
    CHECKBOXES_LIST.forEach((item) => {
      states[item.overlayClassName] = next;
    });
    this.states = states;
  };
}
