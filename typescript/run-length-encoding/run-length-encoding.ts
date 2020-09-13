export const encode = (input: string): string =>
  input.replace(
    /([a-z]|[A-Z]| )\1+/g,
    (matched, char: string) => matched.length + char
  );

export const decode = (input: string): string =>
  input.replace(/(\d+)(\w| )/g, (_, rep: number, char: string) =>
    char.repeat(rep)
  );
