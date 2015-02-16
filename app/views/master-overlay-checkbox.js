import Ember from 'ember';
import OverlayCheckbox from './overlay-checkbox';

export default Ember.ContainerView.extend({

  //overlayClassNames: ['checkbox_group'],

  itemViewClass: OverlayCheckbox,

  childViews: ['masterCheckbox'],

  masterCheckbox: OverlayCheckbox.create({
    name: 'All', 
    checked: false,
    isMaster: true
  }),

  _populateChildViews: function() {
    var chksList = this.get('checkboxes'),
        _this = this;
    chksList.forEach(function(chkHash) {
      _this.pushObject( OverlayCheckbox.create( chkHash ) );
    });
  }.on('init'),

  checkboxes: [{name: 'Significant', 
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
                checked: false}],

  actions: {
    toggleAll: function(isChecked) {
      var childViews = this.get('childViews');
      for(var i = 0; i < childViews.length; i++) {
        childViews[i].set('checked', isChecked);
      }
    },

    removeOvrEnabClass: function() {
      $( '#' + this.get('masterCheckbox.elementId') )
       .removeClass('overlay_enabled');
    }
  }

});
