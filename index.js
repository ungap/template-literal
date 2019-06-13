/*! (c) Andrea Giammarchi - ISC */
var templateLiteral = (function () {'use strict';
  var RAW = 'raw';
  var isNoOp = typeof document !== 'object';
  var isBroken = function (UA) {
    var broken = /(Firefox|Safari)\/(\d+)/.exec(UA);
    return !!broken && !/(Chrom|Android)\/(\d+)/.test(UA);
    /* && (
      (broken[1] === 'Firefox' && (broken[2] < 55) || (broken[2] > 65)) ||
      (broken[1] === 'Safari' && broken[2] > 539)
    ); */
  };
  var templateLiteral = function (tl) {
    if (
      // for badly transpiled literals
      !(RAW in tl) ||
      // for some version of TypeScript
      tl.propertyIsEnumerable(RAW) ||
      // and some other version of TypeScript
      !Object.isFrozen(tl[RAW]) ||
      // check some messed up browser or version
      isBroken((document.defaultView.navigator || {}).userAgent)
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
