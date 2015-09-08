export default {
  data: [ 
    {
      type: 'node-technology',
      id: 'interface-builder',
      attributes: {
        name: 'Interface Builder',
        year: '1986',
        row: 3,
        classNames: ['tech_hist']
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'miscellaneous'}
        }
      }
    },
    {
      type: 'node-technology',
      id: 'hypercard',
      attributes: {
        name: 'HyperCard',
        year: '1987',
        row: 4,
        classNames: ['tech_hist']
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'miscellaneous'}
        }
      }
    },
    {
      type: 'node-technology',
      id: 'action',
      attributes: {
        name: 'Action!',
        year: '1988',
        row: 6,
        classNames: ['tech_hist']
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'miscellaneous'}
        }
      }
    },
    {
      type: 'node-technology',
      id: 'nextstep',
      attributes: {
        name: 'NeXTstep',
        year: '1988',
        row: 7,
        classNames: ['tech_sig']
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'classic-mvc'}
        },
        related: {
          data: [{'id': 'www', 'type': 'node-technology'},
                 {'id': 'interface-builder', 'type': 'node-technology'}] 
        }
      }
    },
    {
      type: 'node-technology',
      id: 'www',
      attributes: {
        name: 'WorldWideWeb',
        year: '1990',
        row: 8,
        classNames: ['tech_hist']
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'miscellaneous'}
        }
      }
    },
    {
      type: 'node-technology',
      id: 'dolphin',
      attributes: {
        name: 'Dolphin',
        year: '1996',
        row: 13,
        classNames: ['tech_smalltalk']
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'mvp'}
        }
      }
    },
    {
      type: 'node-technology',
      id: 'msaccess',
      attributes: {
        name: 'MS-Access',
        year: '1995',
        row: 12,
        classNames: ['tech_ms']
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'miscellaneous'}
        }
      }
    },
    {
      type: 'node-technology',
      id: 'swing',
      attributes: {
        name: 'SWING',
        year: '1998',
        row: 14,
        classNames: ['tech_sig', 'tech_java']
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'classic-mvc'}
        }
      }
    },
    {
      type: 'node-technology',
      id: 'struts',
      attributes: {
        name: 'Struts',
        year: '2000',
        row: 15,
        classNames: ['tech_sig', 'tech_java']
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'server-mvc'}
        }
      }
    },
    {
      type: 'node-technology',
      id: 'drupal',
      attributes: {
        name: 'Drupal',
        year: '2001',
        row: 16,
        classNames: ['tech_php']
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'miscellaneous'}
        }
      }
    },
    {
      type: 'node-technology',
      id: 'jsf',
      attributes: {
        name: 'JSF',
        year: '2004',
        row: 17,
        classNames: ['tech_java']
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'server-mvc'}
        }
      }
    },
    {
      type: 'node-technology',
      id: 'rails',
      attributes: {
        name: 'Rails',
        year: '2004',
        row: 18,
        classNames: ['tech_sig', 'tech_ruby']
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'server-mvc'}
        }
      }
    },
    {
      type: 'node-technology',
      id: 'cakephp',
      attributes: {
        name: 'Cake PHP',
        year: '2005',
        row: 19,
        classNames: ['tech_php']
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'server-mvc'}
        }
      }
    },
    {
      type: 'node-technology',
      id: 'django',
      attributes: {
        name: 'DJango',
        year: '2005',
        row: 20,
        classNames: ['tech_python']
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'server-mvc'}
        }
      }
    },
    {
      type: 'node-technology',
      id: 'zend',
      attributes: {
        name: 'Zend',
        year: '2006',
        row: 21,
        classNames: ['tech_php']
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'server-mvc'}
        }
      }
    },
    {
      type: 'node-technology',
      id: 'silverlight',
      attributes: {
        name: 'Silverlight',
        year: '2007',
        row: 22,
        classNames: ['tech_ms']
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'mvvm'}
        }
      }
    },
    {
      type: 'node-technology',
      id: 'sproutcore',
      attributes: {
        name: 'Sproutcore',
        year: '2007',
        row: 22,
        classNames: ['tech_sig', 'tech_js']
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'classic-mvc'}
        },
        related: {
          data: [{'id': 'ember', 'type': 'node-technology'}] 
        }
      }
    },
    {
      type: 'node-technology',
      id: 'aspnet',
      attributes: {
        name: 'APS.NET MVC',
        year: '2008',
        row: 23,
        classNames: ['tech_ms']
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'server-mvc'}
        }
      }
    },
    {
      type: 'node-technology',
      id: 'angular',
      attributes: {
        name: 'Angular.js',
        year: '2009',
        row: 24,
        classNames: ['tech_js']
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'mvvm'}
        }
      }
    },
    {
      type: 'node-technology',
      id: 'backbone',
      attributes: {
        name: 'Backbone',
        year: '2010',
        row: 25,
        classNames: ['tech_js']
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'mvp'}
        }
      }
    },
    {
      type: 'node-technology',
      id: 'knockout',
      attributes: {
        name: 'Knockout.js',
        year: '2010',
        row: 25,
        classNames: ['tech_js']
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'mvvm'}
        }
      }
    },
    {
      type: 'node-technology',
      id: 'ember',
      attributes: {
        name: 'Ember.js',
        year: '2011',
        row: 26,
        classNames: ['tech_js']
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'mvvm'}
        }
      }
    }
  ]
};
