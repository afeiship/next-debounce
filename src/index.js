(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var defaults = { delay: 100, context: null };

  /**
   * debounce 有一个等待时长，如果在这个等待时长内，再次调用了函数，就取消上一个定时器，并新建一个定时器。
   * 所以 debounce 适用于 input, keyup, keydown 等事件, 亦或者 click 事件需要防止用户在某个时间范围内多次点击的时候，也可以用。
   * 注：在lodash 的实现中 中并没有取消新建定时器的做法，是用时间来判断的。
   *
   * https://www.cnblogs.com/songyz/p/10310491.html
   * https://www.jianshu.com/p/7f0d3785b54a
   */

  nx.debounce = function (inCallback, inOptions) {
    var options = nx.mix(null, defaults, inOptions);
    var timeid = null;
    return function () {
      var args = arguments;
      var ctx = options.context || this;
      clearTimeout(timeid);
      timeid = setTimeout(function () {
        inCallback.apply(ctx, args);
      }, options.dealy);
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.debounce;
  }
})();
