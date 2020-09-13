const a = 'a'.charCodeAt(0);
const A = 'A'.charCodeAt(0);

export const rotate = (str: string, key: number): string =>
  [...str]
    .map((ch) =>
      /[a-z]/g.test(ch)
        ? String.fromCharCode(a + ((ch.charCodeAt(0) - a + key) % 26))
        : /[A-Z]/g.test(ch)
        ? String.fromCharCode(A + ((ch.charCodeAt(0) - A + key) % 26))
        : ch
    )
    .join('');
