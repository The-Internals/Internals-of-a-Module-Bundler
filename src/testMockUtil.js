export let sum = function(a, b) {
  return a + b;
};

export function updateSum(fn) {
  sum = fn;
}

// module.exports = {
//   sum(a, b) {
//     return a + b;
//   },
// };
