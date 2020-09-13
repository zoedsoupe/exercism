const range = (min: number, max: number, step = 1): readonly number[] =>
  Array.from([...Array(max).keys()], (_, i) => i + min).filter(
    (_, i) => i % step === 0
  );

const square = (x: number): number => x ** 2;

const squares = (x: readonly number[]): readonly number[] => x.map(square);

const sum = (nums: readonly number[]): number =>
  nums.reduce((acc, num) => acc + num, 0);

export const squareOfSum = (x: number): number => square(sum(range(1, x)));

export const sumOfSquares = (x: number): number => sum(squares(range(1, x)));

export const difference = (x: number): number =>
  squareOfSum(x) - sumOfSquares(x);
