import Ember from 'ember';
import OverlayCheckbox from './overlay-checkbox';

export default Ember.ContainerView.extend({

  masterCheckbox: null,

  _populateChildViews: function() {
    this.masterCheckbox = this.createChildView(OverlayCheckbox, {
      name: 'All',
      checked: false,
      isMaster: true
    });
    this.pushObject( this.masterCheckbox );

    var chksList = this._checkboxesList;
    var _this = this;

    chksList.forEach(function(chkHash) {
      var view = _this.createChildView(OverlayCheckbox, chkHash);
      _this.pushObject( view );
    });
  }.on('init'),

  _checkboxesList: [
   {name: 'Significant', 
    overlayClassName: 'tech_sig',
    checked: true},
   {name: 'Java', 
    overlayClassName: 'tech_java',
    checked: false},
   {name: 'JavaScript', 
    overlayClassName: 'tech_js',
    checked: false},
   {name: 'Microsoft', 
    overlayClassName: 'tech_ms',
    checked: false},
   {name: 'PHP', 
    overlayClassName: 'tech_php',
    checked: false},
   {name: 'Python', 
    overlayClassName: 'tech_python',
    checked: false},
   {name: 'Ruby', 
    overlayClassName: 'tech_ruby',
    checked: false},
   {name: 'Smalltalk', 
    overlayClassName: 'tech_smalltalk',
    checked: true}],

  actions: {

    toggleAll: function(isChecked) {
      var childViews = this.get('childViews');
      for(var i = 0; i < childViews.length; i++) {
        childViews[i].set('checked', isChecked);
      }
    },

    setMasterUnchecked: function() {
      this.masterCheckbox.set('checked', false);
    }

  }

});
