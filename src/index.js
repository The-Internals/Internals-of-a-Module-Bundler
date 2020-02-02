import testMock from './testMock';

import * as testMockUtil from './testMockUtil';

import obj from './custom.cjs';

console.log(obj);

// testMockUtil.sum = function(a, b) {
//   return a * b;
// };

testMockUtil.updateSum(function(a, b) {
  return a * b;
});

testMock(2, 3);
