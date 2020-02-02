const { getOptions } = require('loader-utils');

module.exports = function(source) {
  console.log(arguments);
  const options = getOptions(this);
  // Apply some transformations to the source...

  console.log(source, typeof source);
  // return `export default ${source.replace('a', 'd')}`;

  this.callback(output, map, { ast: ast });
};
