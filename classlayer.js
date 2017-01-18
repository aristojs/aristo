var cl = (function() {
  'use strict';
  var classes = null;
  var spacer = null;
  var classLayer = function() {
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
      var argType = typeof(arguments[idx]);
      if (argType === 'string' || arguments[idx] instanceof String) {
        var pos = thisClasses.indexOf(arguments[idx]);
        if (arguments[idx + 1]) {
          if (pos === -1) {
            thisClasses.push(arguments[idx]);
          }
        } else if (pos > -1) {
          thisClasses.splice(pos, 1);
        }
        idx++;
      } else if (Object.prototype.toString.call( arguments[idx] ) === '[object Array]') {
        classLayer.apply(null, arguments[idx]);
      } else if (argType === 'object' || argType === 'function') {
        for (var className in arguments[idx]) {
          if (arguments[idx].hasOwnProperty(className)) {
            var pos = thisClasses.indexOf(className);
            if (arguments[idx][className]) {
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
