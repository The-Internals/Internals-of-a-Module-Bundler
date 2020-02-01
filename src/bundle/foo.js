import { sum } from './math';

export default function doFooStuff() {
  const result = sum(2, 3);
  console.log(result);
  return result;
}
