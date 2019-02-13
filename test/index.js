global.document || (global.document = {defaultView: global});

var templateLiteral = require('../cjs');
console.assert(sameThing(1) === sameThing(2));

if (typeof process === 'object') {

  delete require.cache[require.resolve('../cjs')];
  templateLiteral = require('../cjs');
  var arr = ['same ', '1'];
  console.assert(templateLiteral(arr, 1) === templateLiteral(arr, 2));

  delete require.cache[require.resolve('../cjs')];
  global.navigator = {userAgent: 'Firefox\/54'};
  templateLiteral = require('../cjs');

  Object.defineProperty(arr, 'raw', {value: arr});
  Object.freeze(arr);
  console.assert(templateLiteral(arr, 1) === templateLiteral(arr, 2));

  delete require.cache[require.resolve('../cjs')];
  global.navigator = {userAgent: 'Safari\/536'};
  templateLiteral = require('../cjs');
  console.assert(templateLiteral(arr, 1) === templateLiteral(arr, 2));

}

function sameThing(value) {
  return templateLiteral`same ${value}!`;
}
