const strictEqualSides = (x: readonly number[]): number => new Set(x).size;

const sum = (x: readonly number[]): boolean => {
  const [a, b, c] = x.slice().sort((a, b) => a - b);

  return a + b > c;
};

const checkSides = (x: readonly number[]): boolean =>
  x.some((side) => side <= 0);

const isTriangle = (x: readonly number[]): boolean => !checkSides(x) && sum(x);

export const whichTriangle = (x: readonly number[]): string => {
  if (!isTriangle(x)) return "That's not a triangle!";

  const equalSides = strictEqualSides(x);

  if (equalSides === 1) return 'equilateral';
  else if (equalSides === 2) return 'isosceles';
  else if (equalSides === 3) return 'scalene';
  else return "That's not a triangle!";
};
