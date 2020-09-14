/* eslint-disable functional/no-conditional-statement */
const isInt = (n: number): boolean => n % 1 === 0;

const isInGivenBase = (arr: readonly number[], base: number): boolean => {
  if (arr.some((e) => e >= base || e < 0)) return false;

  return true;
};

const isValidInput = (arr: readonly number[], base: number): boolean => {
  if (
    !isInGivenBase(arr, base) ||
    arr.length === 0 ||
    (arr[0] === 0 && arr.length > 1)
  )
    return false;

  return true;
};

const toBase = (
  n: number,
  base: number,
  arr: readonly number[] = []
): readonly number[] => {
  if (n === 0 && arr.length === 0) return [0];
  if (n === 0) return [...arr].reverse();

  const curr = n % base;
  return toBase((n - curr) / base, base, [...arr, curr]);
};

export const convert = (
  arr: readonly number[],
  fromBase: number,
  to: number
): readonly number[] | string => {
  if (fromBase < 2 || !isInt(fromBase)) return 'Wrong input base';
  if (to < 2 || !isInt(to)) return 'Wrong output base';
  if (!isValidInput(arr, fromBase)) return 'Input has wrong format';

  const value = arr.reduceRight(
    (acc, n, i) => acc + n * fromBase ** (arr.length - i - 1)
  );

  return isInGivenBase(arr, fromBase)
    ? toBase(value, to)
    : 'Input has wrong format';
};
