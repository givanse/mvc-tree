import { expect, test } from '@playwright/test';

var PATTERN_GROUP_IDS = [
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
  'mvw'
];

var TMVE_CHILD_PATH = 'M91 156 v8 h-4 l4 8 l4 -8 h-4';

test('svg tree, pattern groups, and year lines', async function({ page }) {
  await page.goto('/');

  var tree = page.locator('#mvc_tree');
  await expect(tree).toHaveCount(1);
  expect(await tree.evaluate(function(el) {
    return el.tagName.toLowerCase();
  })).toBe('svg');

  expect(PATTERN_GROUP_IDS.length).toBe(13);

  for (var i = 0; i < PATTERN_GROUP_IDS.length; i++) {
    var id = PATTERN_GROUP_IDS[i];
    await expect(page.locator('.g_' + id), 'pattern group .g_' + id).toHaveCount(1);
  }

  await expect(page.locator('.g_react'), 'tech node .g_react').toHaveCount(1);
  await expect(page.locator('.g_ember-2'), 'tech node .g_ember-2').toHaveCount(1);
  await expect(page.locator('#react .panel-title')).toContainText('2013 React');
  await expect(page.locator('#ember-2 .panel-title')).toContainText('2015 Ember 2.0');

  await expect(page.locator('.year_line_txt').filter({ hasText: '1980' })).toHaveCount(1);
  await expect(page.locator('.year_line_txt').filter({ hasText: '1990' })).toHaveCount(1);
  await expect(page.locator('.year_line_txt').filter({ hasText: '2000' })).toHaveCount(1);
  await expect(page.locator('.year_line_txt').filter({ hasText: '2010' })).toHaveCount(1);
});

test('click React and Ember 2.0 opens their encyclopedia panels', async function({ page }) {
  await page.goto('/');

  await page.locator('svg .g_react').click();
  await expect(page).toHaveURL(/#react/);
  await expect(page.locator('#react')).toBeVisible();
  await expect(page.locator('#react [itemprop="text"]')).toContainText('Facebook');

  await page.locator('svg .g_ember-2').click();
  await expect(page).toHaveURL(/#ember-2/);
  await expect(page.locator('#ember-2')).toBeVisible();
  await expect(page.locator('#ember-2 [itemprop="text"]')).toContainText('Road to Ember 2.0 RFC');
});

test('click .g_tmve sets #tmve and the panel exists', async function({ page }) {
  await page.goto('/');
  await expect(page.locator('#tmve')).toHaveCount(1);

  await page.locator('svg .g_tmve').click();
  await expect(page).toHaveURL(/#tmve/);
  await expect(page.locator('#tmve')).toBeVisible();
});

test('definitions compare-to populates the list', async function({ page }) {
  await page.goto('/');
  var compare = page.locator('#tmve .compare_to');
  await expect(compare.locator('li')).toHaveCount(0);

  await page.locator('#tmve .c-select').first().selectOption('mvc79');
  await expect(compare.locator('li')).not.toHaveCount(0);
});

test('Java overlay hides .tech_java', async function({ page }) {
  await page.goto('/');

  var javaNodes = page.locator('#mvc_tree .tech_java');
  await expect(javaNodes).not.toHaveCount(0);

  var hiddenOnLoad = await javaNodes.evaluateAll(function(nodes) {
    return nodes.every(function(node) {
      return node.classList.contains('hidden');
    });
  });
  expect(hiddenOnLoad).toBe(true);

  await page.locator('.overlay_checkbox[data-overlay="tech_java"]').click();

  var visibleAfterCheck = await javaNodes.evaluateAll(function(nodes) {
    return nodes.every(function(node) {
      return !node.classList.contains('hidden');
    });
  });
  expect(visibleAfterCheck).toBe(true);

  await page.locator('.overlay_checkbox[data-overlay="tech_java"]').click();

  var hiddenAgain = await javaNodes.evaluateAll(function(nodes) {
    return nodes.every(function(node) {
      return node.classList.contains('hidden');
    });
  });
  expect(hiddenAgain).toBe(true);
});

test('path d attrs include Stage 0/1 TMVE snapshot and a dashed binding path', async function({ page }) {
  await page.goto('/');

  await expect(page.locator('#mvc_tree path.line[d="' + TMVE_CHILD_PATH + '"]')).toHaveCount(1);
  await expect(page.locator('#mvc_tree path.line-dashed')).not.toHaveCount(0);
});

test('pages have no Universal Analytics', async function({ page }) {
  await page.goto('/');
  var indexHtml = await page.content();
  expect(indexHtml).not.toContain('UA-47511141-2');
  expect(indexHtml).not.toContain('google-analytics.com');
  expect(indexHtml).not.toContain('gtag(');

  await page.goto('/about/');
  await expect(page.getByRole('heading', { name: 'About' })).toBeVisible();
  var aboutHtml = await page.content();
  expect(aboutHtml).not.toContain('UA-47511141-2');
});
