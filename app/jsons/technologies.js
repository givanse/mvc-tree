export default [
  {
    id: 'interface-builder',
    name: 'Interface Builder',
    year: '1986',
    'column': 'miscellaneous',
    row: 3,
    classNames: ['tech_hist']
  },
  {
    id: 'hypercard',
    name: 'HyperCard',
    year: '1987',
    'column': 'miscellaneous',
    row: 4,
    classNames: ['tech_hist']
  },
  {
    id: 'action',
    name: 'Action!',
    year: '1988',
    'column': 'miscellaneous',
    row: 6,
    classNames: ['tech_hist']
  },
  {
    id: 'nextstep',
    name: 'NeXTstep',
    year: '1988',
    'column': 'classic-mvc',
    row: 7,
    classNames: ['tech_sig'],
    related: [{'id': 'www', 'type': 'node-technology'},
              {'id': 'interface-builder', 'type': 'node-technology'}] 
  },
  {
    id: 'www',
    name: 'WorldWideWeb',
    year: '1990',
    'column': 'miscellaneous',
    row: 8,
    classNames: ['tech_hist']
  },
  {
    id: 'dolphin',
    name: 'Dolphin',
    year: '1996',
    'column': 'mvp',
    row: 13,
    classNames: ['tech_smalltalk']
  },
  {
    id: 'msaccess',
    name: 'MS-Access',
    year: '1995',
    'column': 'miscellaneous',
    row: 12,
    classNames: ['tech_ms']
  },
  {
    id: 'swing',
    name: 'SWING',
    year: '1998',
    'column': 'classic-mvc',
    row: 14,
    classNames: ['tech_sig', 'tech_java']
  },
  {
    id: 'struts',
    name: 'Struts',
    year: '2000',
    'column': 'server-mvc',
    row: 15,
    classNames: ['tech_sig', 'tech_java']
  },
  {
    id: 'drupal',
    name: 'Drupal',
    year: '2001',
    'column': 'miscellaneous',
    row: 16,
    classNames: ['tech_php']
  },
  {
    id: 'jsf',
    name: 'JSF',
    year: '2004',
    'column': 'server-mvc',
    row: 17,
    classNames: ['tech_java']
  },
  {
    id: 'rails',
    name: 'Rails',
    year: '2004',
    'column': 'server-mvc',
    row: 18,
    classNames: ['tech_sig', 'tech_ruby']
  },
  {
    id: 'cakephp',
    name: 'Cake PHP',
    year: '2005',
    'column': 'server-mvc',
    row: 19,
    classNames: ['tech_php']
  },
  {
    id: 'django',
    name: 'DJango',
    year: '2005',
    'column': 'server-mvc',
    row: 20,
    classNames: ['tech_python']
  },
  {
    id: 'zend',
    name: 'Zend',
    year: '2006',
    'column': 'server-mvc',
    row: 21,
    classNames: ['tech_php']
  },
  {
    id: 'silverlight',
    name: 'Silverlight',
    year: '2007',
    'column': 'mvvm',
    row: 22,
    classNames: ['tech_ms']
  },
  {
    id: 'sproutcore',
    name: 'Sproutcore',
    year: '2007',
    'column': 'classic-mvc',
    row: 22,
    classNames: ['tech_sig', 'tech_js'],
    related: [{'id': 'ember', 'type': 'node-technology'}] 
  },
  {
    id: 'aspnet',
    name: 'APS.NET MVC',
    year: '2008',
    'column': 'server-mvc',
    row: 23,
    classNames: ['tech_ms']
  },
  {
    id: 'angular',
    name: 'Angular.js',
    year: '2009',
    'column': 'mvvm',
    row: 24,
    classNames: ['tech_js']
  },
  {
    id: 'backbone',
    name: 'Backbone',
    year: '2010',
    'column': 'mvp',
    row: 25,
    classNames: ['tech_js']
  },
  {
    id: 'knockout',
    name: 'Knockout.js',
    year: '2010',
    'column': 'mvvm',
    row: 25,
    classNames: ['tech_js']
  },
  {
    id: 'ember',
    name: 'Ember.js',
    year: '2011',
    'column': 'mvvm',
    row: 26,
    classNames: ['tech_js']
  }
];
