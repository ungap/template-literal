var templateLiteral = (function (exports) {
  'use strict';

  /*! (c) Andrea Giammarchi - ISC */
  var self = {};
  try { self.WeakMap = WeakMap; }
  catch (WeakMap) {
    // this could be better but 90% of the time
    // it's everything developers need as fallback
    self.WeakMap = (function (id, Object) {    var dP = Object.defineProperty;
      var hOP = Object.hasOwnProperty;
      var proto = WeakMap.prototype;
      proto.delete = function (key) {
        return this.has(key) && delete key[this._];
      };
      proto.get = function (key) {
        return this.has(key) ? key[this._] : void 0;
      };
      proto.has = function (key) {
        return hOP.call(key, this._);
      };
      proto.set = function (key, value) {
        dP(key, this._, {configurable: true, value: value});
        return this;
      };
      return WeakMap;
      function WeakMap(iterable) {
        dP(this, '_', {value: '_@ungap/weakmap' + id++});
        if (iterable)
          iterable.forEach(add, this);
      }
      function add(pair) {
        this.set(pair[0], pair[1]);
      }
    }(Math.random(), Object));
  }
  var WeakMap$1 = self.WeakMap;

  var isNoOp = typeof document !== 'object';

  var templateLiteral = function (tl) {
    var RAW = 'raw';
    var isBroken = function (UA) {
      return /(Firefox|Safari)\/(\d+)/.test(UA) &&
            !/(Chrom[eium]+|Android)\/(\d+)/.test(UA);
    };
    var broken = isBroken((document.defaultView.navigator || {}).userAgent);
    var FTS = !(RAW in tl) ||
              tl.propertyIsEnumerable(RAW) ||
              !Object.isFrozen(tl[RAW]);
    if (broken || FTS) {
      var forever = {};
      var foreverCache = function (tl) {
        for (var key = '.', i = 0; i < tl.length; i++)
          key += tl[i].length + '.' + tl[i];
        return forever[key] || (forever[key] = tl);
      };
      // Fallback TypeScript shenanigans
      if (FTS)
        templateLiteral = foreverCache;
      // try fast path for other browsers:
      // store the template as WeakMap key
      // and forever cache it only when it's not there.
      // this way performance is still optimal,
      // penalized only when there are GC issues
      else {
        var wm = new WeakMap$1;
        var set = function (tl, unique) {
          wm.set(tl, unique);
          return unique;
        };
        templateLiteral = function (tl) {
          return wm.get(tl) || set(tl, foreverCache(tl));
        };
      }
    } else {
      isNoOp = true;
    }
    return TL(tl);
  };

  function TL(tl) {
    return isNoOp ? tl : templateLiteral(tl);
  }

  

  return TL;

}({}));
