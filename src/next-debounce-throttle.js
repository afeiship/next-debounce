(function () {

  var global = window || this;
  var nx = global.nx || require('next-js-core2');

  var NxDebounceThrouttle = nx.declare('nx.DebounceThrouttle',{
    statics:{
      debounce:function(inCallback, inDelay,inContext) {
        var timer = null;
        return function () {
          var args = arguments;
          var context = inContext || this;
          clearTimeout(timer);
          timer = setTimeout(function () {
            inCallback.apply(context, args);
          }, inDelay);
        };
      },
      throttle: function (inCallback, inDelay, inContext) {
        var threshhold = inDelay || 200;
        var last,
            deferTimer;
        return function () {
          var context = inContext || this;
          var now = Date.now(),
              args = arguments;
          if (last && now < last + threshhold) {
            // hold on to it
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function () {
              last = now;
              inCallback.apply(context, args);
            }, threshhold);
          } else {
            last = now;
            inCallback.apply(context, args);
          }
        };
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDebounceThrouttle;
  }


}());
