type Predicate<T> = (e: T) => boolean;

export const keep = <T>(arr: readonly T[], pred: Predicate<T>): readonly T[] =>
  arr.reduce(
    (result, el) => (pred(el) ? [...result, el] : result),
    [] as readonly T[]
  );

export const discard = <T>(
  arr: readonly T[],
  pred: Predicate<T>
): readonly T[] => keep(arr, (e) => !pred(e));
