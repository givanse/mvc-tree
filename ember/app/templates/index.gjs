import TabbedDrawer from 'mvc-tree/components/tabbed-drawer';
import OverlayCheckboxes from 'mvc-tree/components/overlay-checkboxes';
import RootSvg from 'mvc-tree/components/root-svg';
import ArticlePanel from 'mvc-tree/components/article-panel';

<template>
  <TabbedDrawer>
    <OverlayCheckboxes />
  </TabbedDrawer>

  <div class="mvc_tree_wrapper_scroll">
    <div class="mvc_tree_wrapper">
      <RootSvg @data={{@model}} />
    </div>
  </div>

  <br />

  <div class="container">
    {{#each @model.gridNodes as |node|}}
      <ArticlePanel @node={{node}} @dpatterns={{@model.dpatterns}} />
    {{/each}}
  </div>
</template>
