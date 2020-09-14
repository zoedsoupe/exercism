/* eslint-disable @typescript-eslint/no-explicit-any */
export const keep = <T>(arr: readonly T[], fn: (e: any) => any): readonly T[] =>
  arr.filter(fn);

export const discard = <T>(
  arr: readonly T[],
  fn: (e: any) => any
): readonly T[] => arr.filter((e) => !fn(e));
