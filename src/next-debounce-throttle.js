(function () {

  var global = window || this;
  var nx = global.nx || require('next-js-core2');

  var timer = null;
  var last, deferTimer;

  function debounce(inCallback, inInterval, inContext) {
    var interval = inInterval || 100;
    var timerFn = function () {
      var context = inContext || this;
      inCallback.apply(context);
    };
    clearTimeout(timer);
    timer = setTimeout(timerFn, interval);
  }

  function throttle(inCallback, inInterval, inContext) {
    var threshhold = inInterval || 250;
    var now = +new Date;
    var context = inContext;
    var timerFn = function () {
      last = now;
      context = inContext || this;
      inCallback.apply(inContext);
    };
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(timerFn, threshhold);
    } else {
      last = now;
      inCallback.apply(inContext);
    }
  }

  nx.mix(nx, {
    debounce: debounce,
    throttle: throttle
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      debounce: debounce,
      throttle: throttle
    };
  }


}());
