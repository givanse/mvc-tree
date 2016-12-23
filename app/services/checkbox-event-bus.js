// overkill? nah
// TODO: contextual components
// http://discuss.emberjs.com/t/how-to-communicate-to-child-components/7772/7?u=givanse
import Ember from 'ember';

export default Ember.Service.extend({

  masterCheckbox: null,
 
  checkboxes: [],

  setMasterUnchecked: function() {
    let masterCheckbox = this.get('masterCheckbox');
    masterCheckbox.set('checked', false);
  },

  registerMasterCheckbox: function(checkbox) {
    this.set('masterCheckbox', checkbox);
  },

  registerCheckbox: function(checkbox) {
    this.checkboxes.push(checkbox);
  },

  toggleAll: function(isChecked) {
    for (let checkbox of this.checkboxes) {
      checkbox.set('checked', isChecked);
    }
  }

});
