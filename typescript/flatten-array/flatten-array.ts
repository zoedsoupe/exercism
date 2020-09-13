/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/prefer-readonly-type */
export const flattenArray = (arr: readonly unknown[]): readonly unknown[] => {
  let flat: unknown[] = [];

  arr.forEach((e) =>
    e instanceof Array ? (flat = flat.concat(flattenArray(e))) : flat.push(e)
  );

  return flat.filter((e) => e || e === 0);
};
