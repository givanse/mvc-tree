# MVC Tree

General design of the application.

## Models

    grid-node
        node-dpattern
            definition
        node-technology

## Views

 * svg
   Has the `treeConfig` property used to configure the SVG root and
   the grid design being used to place each node.
   * svg-g
     Every node in the grid uses this view and the content changes by setting
     its `templateName` property.


## Mixins

 * tree-node
   Currently used only by svg-g, provides 
