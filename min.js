var templateLiteral=function(){"use strict";var e,n,r,a,i={};try{i.WeakMap=WeakMap}catch(t){i.WeakMap=(e=Math.random(),n=Object,r=n.defineProperty,a=n.hasOwnProperty,(n=u.prototype).delete=function(t){return this.has(t)&&delete t[this._]},n.get=function(t){return this.has(t)?t[this._]:void 0},n.has=function(t){return a.call(t,this._)},n.set=function(t,e){return r(t,this._,{configurable:!0,value:e}),this},u)}function u(t){r(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(o,this)}function o(t){this.set(t[0],t[1])}var s=i.WeakMap,c="object"!=typeof document,h=function(t){var e,r,n,a,i="raw",u=(e=(document.defaultView.navigator||{}).userAgent,/(Firefox|Safari)\/(\d+)/.test(e)&&!/(Chrom[eium]+|Android)\/(\d+)/.test(e)),i=!(i in t)||t.propertyIsEnumerable(i)||!Object.isFrozen(t[i]);return u||i?(r={},n=function(t){for(var e=".",n=0;n<t.length;n++)e+=t[n].length+"."+t[n];return r[e]||(r[e]=t)},h=i?n:(a=new s,function(t){return a.get(t)||(t=n(e=t),a.set(e,t),t);var e})):c=!0,f(t)};function f(t){return c?t:h(t)}return f}();