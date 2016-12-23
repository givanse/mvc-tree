import Ember from 'ember';

const CHECKBOXES_LIST = [
  {
    name: 'Historical', 
    overlayClassName: 'tech_hist',
    checked: true
  },
  {
    name: 'Significant', 
    overlayClassName: 'tech_sig',
    checked: true
  },
  {
    name: 'Java', 
    overlayClassName: 'tech_java',
    checked: false
  },
  {
    name: 'JavaScript', 
    overlayClassName: 'tech_js',
    checked: true
  },
  {
    name: 'Microsoft', 
    overlayClassName: 'tech_ms',
    checked: true
  },
  {
    name: 'PHP', 
    overlayClassName: 'tech_php',
    checked: false
  },
  {
    name: 'Python', 
    overlayClassName: 'tech_python',
    checked: false
  },
  {
    name: 'Ruby', 
    overlayClassName: 'tech_ruby',
    checked: false
  },
  {
    name: 'Smalltalk', 
    overlayClassName: 'tech_smalltalk',
    checked: true
  }
];

export default Ember.Component.extend({

  classNames: ['container_view', 'master_overlay_checkbox'],

  checkboxesList: CHECKBOXES_LIST

});
