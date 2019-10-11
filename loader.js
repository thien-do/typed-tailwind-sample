// const getOptions = require('loader-utils').getOptions;
// const validateOptions = require('schema-utils');
const Tw = require('./src/tw.js').Tw;

// const schema = {
//   type: 'object',
//   properties: {
//     test: {
//       type: 'string'
//     }
//   }
// };

const re = /Tw\(\)[\n \w.\(\)]*\$\(\)/g;

globalThis.Tw = Tw;

module.exports = function(source) {
  let newSource = source;
  [...source.matchAll(re)].forEach(match => {
    const str = Function('"use strict";return (' + match[0] + ')')();
    newSource = newSource.replace(match[0], `"${str}"`);
  });
  // const options = getOptions(this);
  // validateOptions(schema, options, 'Example Loader');
  return newSource;
}
