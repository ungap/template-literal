/*! (c) Andrea Giammarchi - ISC */
var templateLiteral = (function () {'use strict';
  var UA, RAW = 'raw';
  var isNoOp = typeof document !== 'object';
  var templateLiteral = function (tl) {
    if (
      // for badly transpiled literals
      !(RAW in tl) ||
      // for some version of TypeScript
      tl.propertyIsEnumerable(RAW) ||
      // and some other version of TypeScript
      !Object.isFrozen(tl[RAW]) ||
      (
        // or for Firefox < 55
        /(Firefox|Safari)\/(\d+)/.test(
          UA = (document.defaultView.navigator || {}).userAgent
        ) && (
          RegExp.$1 == 'Firefox' ?
            (RegExp.$2 < 55) :
            !/(Chrome|Android)\/(\d+)/.test(UA)
        )
      )
    ) {
      var forever = {};
      templateLiteral = function (tl) {
        for (var key = '.', i = 0; i < tl.length; i++)
          key += tl[i].length + '.' + tl[i];
        return forever[key] || (forever[key] = tl);
      };
    } else {
      isNoOp = true;
    }
    return TL(tl);
  };
  return TL;
  function TL(tl) {
    return isNoOp ? tl : templateLiteral(tl);
  }
}());
