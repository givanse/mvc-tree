export default {
  data: [
    {
      type: 'node-header',
      id: '0',
      attributes: {
        title: 'Classic MVC',
        row: '0'
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'classic-mvc'}
        }
      }
    },
    {
      type: 'node-header',
      id: '1',
      attributes: {
        title: 'Application Model',
        row: '0'
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'am'}
        }
      }
    },
    {
      type: 'node-header',
      id: '2',
      attributes: {
        title: 'MVP',
        row: '0'
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'mvp'}
        }
      }
    },
    {
      type: 'node-header',
      id: '3',
      attributes: {
        title: 'MVVM',
        row: '0'
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'mvvm'}
        }
      }
    },
    {
      type: 'node-header',
      id: '5',
      attributes: {
        title: 'Miscellaneous',
        row: '0'
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'miscellaneous'}
        }
      }
    },
    {
      type: 'node-header',
      id: '6',
      attributes: {
        title: 'Server MVC',
        row: '0'
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'server-mvc'}
        }
      }
    }
  ]
};
