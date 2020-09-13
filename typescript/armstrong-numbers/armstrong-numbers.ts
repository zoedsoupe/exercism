const splitNumber = (x: number): readonly number[] =>
  `${x}`.split('').map(Number);

const sum = (nums: readonly number[]): number =>
  nums.reduce((acc, num) => acc + Math.pow(num, nums.length), 0);

export const isArmstrongNumber = (digit: number): boolean =>
  sum(splitNumber(digit)) === digit ? true : false;
