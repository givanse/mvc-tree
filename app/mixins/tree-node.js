import Ember from 'ember';

export default Ember.Mixin.create({

  x: function() {
    var tc = this.get('treeConfig'),
        col = this.get('elem.col'),
        x = col * tc.colW;

    this.set('cx', x + (tc.colW / 2) );

    return tc.paddingL + x;
  }.property('elem.col'),

  y: function() {
    var tc = this.get('treeConfig'),
        row = this.get('elem.row'),
        y = (row * tc.rowH);

    this.set('cy', y + (tc.rowH / 2) );

    return y + tc.paddingT;
  }.property('elem.row'),

});
