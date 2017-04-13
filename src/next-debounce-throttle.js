(function () {

  var global = window || this;
  var nx = global.nx || require('next-js-core2');

  function debounce(inCallback, inDelay, inContext, inArgs) {
    var delay = inDelay || 250;
    var timer = null;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        inCallback.apply(inContext, inArgs);
      }, delay);
    };
  }

  function throttle(inCallback, inThreshhold, inContext,inArgs) {
    var threshhold=inThreshhold || 250;
    var last, deferTimer;
    return function () {
      var now = +new Date;
      if (last && now < last + threshhold) {
        // hold on to it
        clearTimeout(deferTimer);
        deferTimer = setTimeout(function () {
          last = now;
          inCallback.apply(inContext, inArgs);
        }, threshhold);
      } else {
        last = now;
        inCallback.apply(inContext, inArgs);
      }
    };
  }

  nx.mix(nx, {
    debounce:debounce,
    throttle:throttle
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      debounce:debounce,
      throttle:throttle
    };
  }


}());
