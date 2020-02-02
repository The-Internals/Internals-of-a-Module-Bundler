
function test(){

}

export function sum(a, b) { -> foo.js
  // test();
  return a + b;
}

export function mul(a, b) { -> bar.js
  return a * b;
}

export function sub(a, b) {
  return a - b;
}

export function divide(a, b) {
  test();
  return a / b;
}

// module.exports = {
//   sum(){},
// }
