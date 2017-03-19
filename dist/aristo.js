(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define('aristo', ['exports'], factory) :
	(factory((global.Aristo = global.Aristo || {})));
}(this, (function (exports) { 'use strict';

var cl = (function() {
  'use strict';
  var classes = null;
  var spacer = null;
  var classLayer = function() {
    var arguments$1 = arguments;

    var initial = false;
    var startIdx = 0;
    if (spacer === null) {
      classes = [];
      initial = true;
      if (arguments[0] && (arguments[0] === '.' || arguments[0] === ' ')) {
        spacer = arguments[0];
        startIdx = 1;
      } else {
        spacer = ' ';
      }
    }
    
    // Reduces js tree calls
    var thisClasses = classes;
      
    for(var idx = startIdx; idx < arguments.length; ++idx) {
      var argType = typeof(arguments$1[idx]);
      if (argType === 'string' || arguments$1[idx] instanceof String) {
        var pos = thisClasses.indexOf(arguments$1[idx]);
        if (arguments$1[idx + 1]) {
          if (pos === -1) {
            thisClasses.push(arguments$1[idx]);
          }
        } else if (pos > -1) {
          thisClasses.splice(pos, 1);
        }
        idx++;
      } else if (Object.prototype.toString.call( arguments$1[idx] ) === '[object Array]') {
        classLayer.apply(null, arguments$1[idx]);
      } else if (argType === 'object' || argType === 'function') {
        for (var className in arguments[idx]) {
          if (arguments$1[idx].hasOwnProperty(className)) {
            var pos = thisClasses.indexOf(className);
            if (arguments$1[idx][className]) {
              if (pos === -1) {
                thisClasses.push(className);
              }
            } else if (pos > -1) {
              thisClasses.splice(pos, 1);
            }
          }
        }
      } 
    }
    
    if (initial) {
      var result = spacer + classes.join(spacer);
      classes = null;
      spacer = null;
      return result;
    }
  };
  
  return classLayer;
})();

exports.cl = cl;

Object.defineProperty(exports, '__esModule', { value: true });

})));
