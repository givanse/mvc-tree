import Ember from 'ember';

export function linkToBlank(params/*, hash*/) {

  Ember.assert("You must provide two parameters to the link-to-blank helper.", params.length === 2);

  var text = params[0];
  var url = params[1];

  var link = '<a target=\"_blank\" href=\"' + url + '\">' + 
             text +
             '<sup><span class=\"glyphicon glyphicon-new-window\" aria-hidden=\"true\"></span></sup>' +
             '</a>';

  return new Ember.Handlebars.SafeString(link); 
}

export default Ember.HTMLBars.makeBoundHelper(linkToBlank);
