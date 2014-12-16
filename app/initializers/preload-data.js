
var fixtureP = [
  { 
    "id": "pac",
    "name": "PAC",
    "year": "1987",
    "author": "J. Coutaz",
    "template": "patterns/pac",
    "col": "4",
    "row": "2",
    "definitions": [
        {
          "term": "Presentation",
          "text": "Lorem ipsum dolor sir amet"
        },
        {
          "term": "Abstraction",
          "text": "Lorem ipsum dolor sir amet"
        },
        {
          "term": "Control",
          "text": "Lorem ipsum dolor sir amet"
        }
    ]
  },

  { 
    "id": "mvc_kp",
    "name": "MVC",
    "year": "1988",
    "author": "Krasner & Pope",
    "template": "patterns/mvc-kp",
    "col": "0",
    "row": "3",
    "definitions": [
        {
          "term": "Model",
          "text": "Lorem ipsum dolor sir amet"
        },
        {
          "term": "View",
          "text": "Lorem ipsum dolor sir amet"
        },
        {
          "term": "Controller",
          "text": "Lorem ipsum dolor sir amet"
        }
    ]
  }
];

var fixtureT = [
  {
    id: 'swing',
    name: 'SWING',
    year: '1998',
    col: 0,
    row: 7,
    classNames: ['tech_sig']
  },
  {
    id: 'struts',
    name: 'Struts',
    year: '2000',
    col: 0,
    row: 9,
    classNames: ['tech_sig', 'tech_java']
  }
];

export default {
  name: "preload-data",

  after: "store",

  initialize: function initialize(container/*, application*/) {
    var store = container.lookup("store:main");

    fixtureP.forEach(function(item) {
      store.push("pattern", item);
    });

    fixtureT.forEach(function(item) {
      store.push("technology", item);
    });
  }
};
