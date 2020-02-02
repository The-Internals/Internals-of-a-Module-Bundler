import { sum } from './testMockUtil';
// import { sum as fixSum } from './testMockUtil';

export default function test(a, b) {
  console.log(sum.toString());
  console.log(sum(a, b));
}

// export default function test(a, b) {
//   console.log(fixSum.toString());
//   console.log(fixSum(a, b));
// }
