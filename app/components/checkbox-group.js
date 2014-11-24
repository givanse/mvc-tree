import Ember from 'ember';

export default Ember.Component.extend({ 

  classNames: ['checkbox_group'],

  checkboxesDataList: [{name: 'Significant', 
                        className: 'tech_sig',
                        checked: true},
                       {name: 'Java', 
                        className: 'tech_java',
                        checked: false},
                       {name: 'JavaScript', 
                        className: 'tech_js',
                        checked: false},
                       {name: 'Microsoft', 
                        className: 'tech_ms',
                        checked: false},
                       {name: 'PHP', 
                        className: 'tech_php',
                        checked: false},
                       {name: 'Python', 
                        className: 'tech_python',
                        checked: false},
                       {name: 'Ruby', 
                        className: 'tech_ruby',
                        checked: false},
                       {name: 'Smalltalk', 
                        className: 'tech_smalltalk',
                        checked: false}],

  actions: {
    toggleAll: function(isChecked) {
      var childViews = this.get('childViews');
      for(var i = 0; i < childViews.length; i++) {
        childViews[i].set('checked', isChecked);
      }
    }
  }

});
