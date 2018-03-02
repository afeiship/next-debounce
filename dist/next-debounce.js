(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.debounce = function(inCallback, inDelay,inContext) {
    var timer = null;
    var delay = (inDelay == null) ? 100 : inDelay;
    return function () {
      var args = arguments;
      var context = inContext || this;
      clearTimeout(timer);
      timer = setTimeout(function () {
        inCallback.apply(context, args);
      }, inDelay);
    };
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.debounce;
  }


}());
