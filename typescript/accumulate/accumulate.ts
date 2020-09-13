export const accumulate = <T>(
  arr: T[],
  accumulator: (x: T) => any
): T[] => {
  const result: T[] = [];

  arr.forEach((e) => result.push(accumulator(e)));

  return result;
};
