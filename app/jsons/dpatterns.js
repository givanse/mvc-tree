export default [
  { 
    'id': 'tmve',
    'name': 'TMVE',
    'year': '1979',
    'author': 'T. Reenskaug',
    'col': '0',
    'row': '1',
    'children': ['mvc79', 'mvp-taligent'],
    'definitions': [
        {
          'term': 'Thing',
          'text': 'Lorem ipsum dolor sir amet'
        },
        {
          'term': 'Model',
          'text': 'Lorem ipsum dolor sir amet'
        },
        {
          'term': 'View',
          'text': 'Lorem ipsum dolor sir amet'
        },
        {
          'term': 'Editor',
          'text': 'Lorem ipsum dolor sir amet'
        }
    ]
  },
  { 
    'id': 'mvc79',
    'name': 'MVC',
    'year': '1979',
    'author': 'T. Reenskaug',
    'col': '0',
    'row': '2',
    'children': ['mvc-kp'],
    'definitions': [
        {
          'term': 'Model',
          'text': 'Models represent knowledge. A model could be a single object (rather uninteresting), or it could be some structure of objects.'
        },
        {
          'term': 'View',
          'text': 'A view is a (visual) representation of its model. It would ordinarily highlight certain attributes of the model and suppress others. It is thus acting as a presentation filter.'
        },
        {
          'term': 'Controller',
          'text': 'A controller is the link between a user and the system.'
        }
    ]
  },
  { 
    'id': 'pac',
    'name': 'PAC',
    'year': '1987',
    'author': 'J. Coutaz',
    'col': '4',
    'row': '3',
    'definitions': [
        {
          'term': 'Presentation',
          'text': 'Lorem ipsum dolor sir amet'
        },
        {
          'term': 'Abstraction',
          'text': 'Lorem ipsum dolor sir amet'
        },
        {
          'term': 'Control',
          'text': 'Lorem ipsum dolor sir amet'
        }
    ]
  },
  { 
    'id': 'mvc-kp',
    'name': 'MVC K&P',
    'year': '1988',
    'author': 'Krasner & Pope',
    'col': '0',
    'row': '4',
    'children': ['am', 'model2'],
    'definitions': [
        {
          'term': 'Model',
          'text': 'Lorem ipsum dolor sir amet'
        },
        {
          'term': 'View',
          'text': 'Lorem ipsum dolor sir amet'
        },
        {
          'term': 'Controller',
          'text': 'Lorem ipsum dolor sir amet'
        }
    ]
  },
  { 
    'id': 'observer',
    'name': 'Observer Pattern',
    'year': '1994',
    'author': 'GoF',
    'col': '7',
    'row': '6',
    'definitions': null
  },

  { 
    'id': 'model2',
    'name': 'Model 2',
    'year': '1998',
    'author': 'J2EE',
    'col': 0,
    'row': 11,
    'definitions': [
        {
          'term': 'Model',
          'text': 'Lorem ipsum dolor sir amet'
        },
        {
          'term': 'View',
          'text': 'Lorem ipsum dolor sir amet'
        },
        {
          'term': 'Controller',
          'text': 'Lorem ipsum dolor sir amet'
        }
    ]
  },

  { 
    'id': 'mvp-taligent',
    'name': 'MVP',
    'year': '1996',
    'author': 'Taligent',
    'col': 2,
    'row': 9,
    'definitions': [
        {
          'term': 'Model',
          'text': 'Lorem ipsum dolor sir amet'
        },
        {
          'term': 'View',
          'text': 'Lorem ipsum dolor sir amet'
        },
        {
          'term': 'Presenter',
          'text': 'Lorem ipsum dolor sir amet'
        }
    ]
  },

  { 
    'id': 'am',
    'name': 'Application Model',
    'year': '1993',
    'author': 'VisualWorks',
    'col': '1',
    'row': '6',
    'children': ['pm'],
    'definitions': [
        {
          'term': 'Application Model',
          'text': 'Lorem ipsum dolor sir amet'
        },
        {
          'term': 'Property Object',
          'text': 'Lorem ipsum dolor sir amet'
        }
    ]
  },

  { 
    'id': 'data_binding',
    'name': 'Data Binding',
    'year': '1995',
    'author': 'unknown',
    'col': '6',
    'row': '7',
    'definitions': null 
  },

  { 
    'id': 'pm',
    'name': 'Presentation Model',
    'year': '2004',
    'author': 'M. Fowler',
    'col': '1',
    'row': '13',
    'definitions': [
        {
          'term': 'Presentation Model',
          'text': 'Lorem ipsum dolor sir amet'
        },
        {
          'term': 'View',
          'text': 'Lorem ipsum dolor sir amet'
        }
    ]
  },

  { 
    'id': 'mvvm',
    'name': 'MVVM',
    'year': '2005',
    'author': 'Microsoft',
    'col': '3',
    'row': '14',
    'related': [{id: 'pm', type: 'node-dpattern'}, 
                {id: 'data_binding', type: 'node-dpattern'}],
    'definitions': [
        {
          'term': 'Model',
          'text': 'Lorem ipsum dolor sir amet'
        },
        {
          'term': 'View',
          'text': 'Lorem ipsum dolor sir amet'
        },
        {
          'term': 'View Model',
          'text': 'Lorem ipsum dolor sir amet'
        }
    ]
  },

  { 
    'id': 'mvw',
    'name': 'MVW',
    'year': '2012',
    'author': 'unknown',
    'col': '5',
    'row': '20',
    'related': [{'id': 'angular', 'type': 'node-technology'}, 
                {'id': 'backbone', 'type': 'node-technology'}, 
                {'id': 'ember', 'type': 'node-technology'}],
    'definitions': [
        {
          'term': 'Model',
          'text': 'Lorem ipsum dolor sir amet'
        },
        {
          'term': 'View',
          'text': 'Lorem ipsum dolor sir amet'
        },
        {
          'term': 'Whatever',
          'text': 'Lorem ipsum dolor sir amet'
        }
    ]
  }
];
