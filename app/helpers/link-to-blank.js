import { helper as buildHelper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';
import { assert } from '@ember/debug';

export function linkToBlank(params/*, hash*/) {

  assert("You must provide two parameters to the link-to-blank helper.", params.length === 2);

  var text = params[0];
  var url = params[1];

  var link = '<a target="_blank" href="' + url + '">' +
             text +
             '<sup><span class="glyphicon glyphicon-new-window" aria-hidden="true"></span></sup>' +
             '</a>';

  return new htmlSafe(link);
}

export default buildHelper(linkToBlank);
