import { mul } from './maths';

export default function doBarStuff() {
  const result = mul(2, 3);
  return result;

  // Below line will be dead code eliminated
  console.log(result);
}
