export default {
  data: [ 
    {
      type: 'node-technology',
      id: 'interface-builder',
      attributes: {
        name: 'Interface Builder',
        year: '1986',
        'column': 'miscellaneous',
        row: 3,
        classNames: ['tech_hist']
      }
    },
    {
      type: 'node-technology',
      id: 'hypercard',
      attributes: {
        name: 'HyperCard',
        year: '1987',
        'column': 'miscellaneous',
        row: 4,
        classNames: ['tech_hist']
      }
    },
    {
      type: 'node-technology',
      id: 'action',
      attributes: {
        name: 'Action!',
        year: '1988',
        'column': 'miscellaneous',
        row: 6,
        classNames: ['tech_hist']
      }
    },
    {
      type: 'node-technology',
      id: 'nextstep',
      attributes: {
        name: 'NeXTstep',
        year: '1988',
        'column': 'classic-mvc',
        row: 7,
        classNames: ['tech_sig'],
        related: [{'id': 'www', 'type': 'node-technology'},
                  {'id': 'interface-builder', 'type': 'node-technology'}] 
      }
    },
    {
      type: 'node-technology',
      id: 'www',
      attributes: {
        name: 'WorldWideWeb',
        year: '1990',
        'column': 'miscellaneous',
        row: 8,
        classNames: ['tech_hist']
      }
    },
    {
      type: 'node-technology',
      id: 'dolphin',
      attributes: {
        name: 'Dolphin',
        year: '1996',
        'column': 'mvp',
        row: 13,
        classNames: ['tech_smalltalk']
      }
    },
    {
      type: 'node-technology',
      id: 'msaccess',
      attributes: {
        name: 'MS-Access',
        year: '1995',
        'column': 'miscellaneous',
        row: 12,
        classNames: ['tech_ms']
      }
    },
    {
      type: 'node-technology',
      id: 'swing',
      attributes: {
        name: 'SWING',
        year: '1998',
        'column': 'classic-mvc',
        row: 14,
        classNames: ['tech_sig', 'tech_java']
      }
    },
    {
      type: 'node-technology',
      id: 'struts',
      attributes: {
        name: 'Struts',
        year: '2000',
        'column': 'server-mvc',
        row: 15,
        classNames: ['tech_sig', 'tech_java']
      }
    },
    {
      type: 'node-technology',
      id: 'drupal',
      attributes: {
        name: 'Drupal',
        year: '2001',
        'column': 'miscellaneous',
        row: 16,
        classNames: ['tech_php']
      }
    },
    {
      type: 'node-technology',
      id: 'jsf',
      attributes: {
        name: 'JSF',
        year: '2004',
        'column': 'server-mvc',
        row: 17,
        classNames: ['tech_java']
      }
    },
    {
      type: 'node-technology',
      id: 'rails',
      attributes: {
        name: 'Rails',
        year: '2004',
        'column': 'server-mvc',
        row: 18,
        classNames: ['tech_sig', 'tech_ruby']
      }
    },
    {
      type: 'node-technology',
      id: 'cakephp',
      attributes: {
        name: 'Cake PHP',
        year: '2005',
        'column': 'server-mvc',
        row: 19,
        classNames: ['tech_php']
      }
    },
    {
      type: 'node-technology',
      id: 'django',
      attributes: {
        name: 'DJango',
        year: '2005',
        'column': 'server-mvc',
        row: 20,
        classNames: ['tech_python']
      }
    },
    {
      type: 'node-technology',
      id: 'zend',
      attributes: {
        name: 'Zend',
        year: '2006',
        'column': 'server-mvc',
        row: 21,
        classNames: ['tech_php']
      }
    },
    {
      type: 'node-technology',
      id: 'silverlight',
      attributes: {
        name: 'Silverlight',
        year: '2007',
        'column': 'mvvm',
        row: 22,
        classNames: ['tech_ms']
      }
    },
    {
      type: 'node-technology',
      id: 'sproutcore',
      attributes: {
        name: 'Sproutcore',
        year: '2007',
        'column': 'classic-mvc',
        row: 22,
        classNames: ['tech_sig', 'tech_js'],
        related: [{'id': 'ember', 'type': 'node-technology'}] 
      }
    },
    {
      type: 'node-technology',
      id: 'aspnet',
      attributes: {
        name: 'APS.NET MVC',
        year: '2008',
        'column': 'server-mvc',
        row: 23,
        classNames: ['tech_ms']
      }
    },
    {
      type: 'node-technology',
      id: 'angular',
      attributes: {
        name: 'Angular.js',
        year: '2009',
        'column': 'mvvm',
        row: 24,
        classNames: ['tech_js']
      }
    },
    {
      type: 'node-technology',
      id: 'backbone',
      attributes: {
        name: 'Backbone',
        year: '2010',
        'column': 'mvp',
        row: 25,
        classNames: ['tech_js']
      }
    },
    {
      type: 'node-technology',
      id: 'knockout',
      attributes: {
        name: 'Knockout.js',
        year: '2010',
        'column': 'mvvm',
        row: 25,
        classNames: ['tech_js']
      }
    },
    {
      type: 'node-technology',
      id: 'ember',
      attributes: {
        name: 'Ember.js',
        year: '2011',
        'column': 'mvvm',
        row: 26,
        classNames: ['tech_js']
      }
    }
  ]
};
