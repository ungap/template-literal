var templateLiteral = (function () {'use strict';
  var RAW = 'raw';
  var isNoOp = false;
  var templateLiteral = function (tl) {
    if (
      // for badly transpiled literals
      !(RAW in tl) ||
      // for some version of TypeScript
      tl.propertyIsEnumerable(RAW) ||
      // and some other version of TypeScript
      !Object.isFrozen(tl.raw) ||
      (
        // or for Firefox < 55
        /Firefox\/(\d+)/.test(
          (document.defaultView.navigator || {}).userAgent
        ) &&
        parseFloat(RegExp.$1) < 55
      )
    ) {
      var forever = {};
      templateLiteral = function (tl) {
        var key = RAW + tl.join(RAW);
        return forever[key] || (forever[key] = tl);
      };
      return templateLiteral(tl);
    } else {
      isNoOp = true;
      return tl;
    }
  };
  return function (tl) {
    return isNoOp ? tl : templateLiteral(tl);
  };
}());
export default templateLiteral;
