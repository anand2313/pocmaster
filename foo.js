'use strict';
var MyElement = Polymer({

  is: 'my-element',

  factoryImpl: function(foo, bar) {
    this.foo = foo;
    this.configureWithBar(bar);
  },

  configureWithBar: function(bar) {
   console.log(bar);
  }

});

var el = new MyElement(42, 'octopus');

var MyInput = Polymer({

  is: 'my-input',

  extends: 'input',

  created: function() {
    this.style.border = '1px solid red';
  }

});

var MyCustomElement = Polymer({

  is: 'my-custom-element',

  created: function() {
    this.textContent = 'My Custom Element';
  }

});

var MyCallBaElement = Polymer({

  is: 'callback-element',
  hostAttributes: {
      "string-attribute": 'Value',
      "boolean-attribute": true,
      "tabindex": 0
    },
    behaviors: [HighlightBehavior],

  created: function() {
    console.log(this.localName + '#' + this.id + ' was created');
  },
  ready: function() {
    var toLight = document.createElement('div');
    var toLight1 = document.createElement('div');
    toLight.textContent ="New Div created";
    toLight1.textContent ="one More Div created";
    Polymer.dom(this).appendChild(toLight);
    Polymer.dom(this).appendChild(toLight1);
    console.log("Polymer dom" + this.root.nodeName);
    console.log("All divs " + Polymer.dom(this).querySelectorAll('div')[1].innerHTML);
  },

  attached: function() {
    console.log(this.localName + '#' + this.id + ' was attached');
  },

  detached: function() {
    console.log(this.localName + '#' + this.id + ' was detached');
  },

  attributeChanged: function(name, type) {
    console.log(this.localName + '#' + this.id + ' attribute ' + name +
      ' was changed to ' + this.getAttribute(name));
  }

});

HighlightBehavior = {

      properties: {
        isHighlighted: {
          type: Boolean,
          value: false,
          notify: true,
          observer: '_highlightChanged'
        }
      },
      
      listeners: {
        click: '_toggleHighlight'
      },
      
      created: function() {
        console.log('Highlighting for ', this, 'enabled!');
      },

      _toggleHighlight: function() {
        this.isHighlighted = !this.isHighlighted;
      },
      
      _highlightChanged: function(value) {
        this.toggleClass('highlighted', value);
      }

    };