import { module, test } from 'qunit';
import { visit, click, currentURL, select } from '@ember/test-helpers';
import { setupApplicationTest } from 'mvc-tree/tests/helpers';

const PATTERN_GROUP_IDS = [
  'tmve',
  'mvc79',
  'pac',
  'mvc-kp',
  'am',
  'observer',
  'data_binding',
  'mvp',
  'model2',
  'mva',
  'pm',
  'mvvm',
  'mvw',
];

const TMVE_CHILD_PATH = 'M91 156 v8 h-4 l4 8 l4 -8 h-4';

module('Acceptance | index viz', function (hooks) {
  setupApplicationTest(hooks);

  test('svg tree, pattern groups, and year lines', async function (assert) {
    await visit('/');

    assert.dom('#mvc_tree').exists();
    assert.dom('#mvc_tree').hasTagName('svg');

    PATTERN_GROUP_IDS.forEach((id) => {
      assert.dom(`.g_${id}`).exists(`pattern group .g_${id}`);
    });

    let years = Array.from(document.querySelectorAll('.year_line_txt')).map(
      (el) => el.textContent.trim(),
    );
    assert.deepEqual(years, ['1980', '1990', '2000', '2010']);
  });

  test('click .g_tmve sets #tmve and the panel exists', async function (assert) {
    await visit('/');
    assert.dom('#tmve').exists();

    await click('svg .g_tmve');
    assert.strictEqual(window.location.hash, '#tmve');
    assert.dom('#tmve').exists();
  });

  test('definitions compare-to populates the list', async function (assert) {
    await visit('/');
    assert.dom('#tmve .compare_to li').doesNotExist();

    await select('#tmve .hidden-sm .c-select', 'mvc79');

    assert.dom('#tmve .compare_to li').exists();
  });

  test('hash deep-link opens MVP and compare-to MVVM', async function (assert) {
    window.location.hash = 'mvp?c=mvvm';
    await visit('/');

    assert.dom('#mvp').exists();
    assert.dom('#mvp .panel-title').includesText('MVP');
    assert.dom('#mvp .hidden-sm .c-select').hasValue('mvvm');
    assert.dom('#mvp .compare_to li').exists();
    assert.dom('#mvp .compare_to').includesText('View Model');
  });

  test('Java overlay hides .tech_java', async function (assert) {
    await visit('/');

    let javaNodes = document.querySelectorAll('#mvc_tree .tech_java');
    assert.ok(javaNodes.length > 0, 'java nodes exist');
    assert.ok(
      Array.from(javaNodes).every((node) => node.classList.contains('hidden')),
      'java nodes start hidden',
    );

    await click('.overlay_checkbox[data-overlay="tech_java"]');
    assert.ok(
      Array.from(javaNodes).every(
        (node) => !node.classList.contains('hidden'),
      ),
      'java nodes visible after check',
    );

    await click('.overlay_checkbox[data-overlay="tech_java"]');
    assert.ok(
      Array.from(javaNodes).every((node) => node.classList.contains('hidden')),
      'java nodes hidden again',
    );
  });

  test('path d attrs include Stage 0/1 TMVE snapshot and a dashed binding path', async function (assert) {
    await visit('/');

    assert
      .dom(`#mvc_tree path.line[d="${TMVE_CHILD_PATH}"]`)
      .exists('TMVE→MVC79 child path');
    assert.dom('#mvc_tree path.line-dashed').exists();
  });

  test('pages have no Universal Analytics', async function (assert) {
    await visit('/');
    let indexHtml = document.documentElement.innerHTML;
    assert.false(indexHtml.includes('UA-47511141-2'));
    assert.false(indexHtml.includes('google-analytics.com'));
    assert.false(indexHtml.includes('gtag('));

    await visit('/about');
    assert.dom('h1').hasText('About');
    let aboutHtml = document.documentElement.innerHTML;
    assert.false(aboutHtml.includes('UA-47511141-2'));
    assert.strictEqual(currentURL(), '/about');
  });
});
