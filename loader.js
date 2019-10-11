const getOptions = require('loader-utils').getOptions;
const validateOptions = require('schema-utils');
// const Tw = require('./src/tw.js').Tw;
const { execSync } = require('child_process');

const schema = {
  type: 'object',
  properties: {
    config: {
      type: 'string',
    },
  },
};

const re = /Tw\(\)[\n \w.\(\)]*\$\(\)/g;

// globalThis.Tw = Tw;

module.exports = function(source) {
  const options = getOptions(this);
  console.log(validateOptions(schema, options, 'Typed Tailwind Loader'));
  console.log(options);

  try {
    execSync(`tsc ${options.config}`);
  } catch(e) {}

  globalThis.Tw = require(options.config.replace('.ts', '.js')).Tw;

  let newSource = source;
  [...source.matchAll(re)].forEach(match => {
    const str = Function('"use strict";return (' + match[0] + ')')();
    newSource = newSource.replace(match[0], `"${str}"`);
  });
  return newSource;
}
