const isEven = (x: number): boolean => x % 2 === 0;

const divideByTwo = (x: number): number => x / 2;

const collatzConjecture = (x: number): number => 3 * x + 1;

const incrementCounter = (x: number): number => x + 1;

export const steps = (x: number, counter = 0): number | string => {
  if (x < 1) return 'Only positive numbers are allowed';

  if (x === 1) return counter;

  if (isEven(x)) return steps(divideByTwo(x), incrementCounter(counter));

  return steps(collatzConjecture(x), incrementCounter(counter));
};
