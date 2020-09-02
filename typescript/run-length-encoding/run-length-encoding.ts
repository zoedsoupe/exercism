export default {
  encode: (input: string): string => {
    return input.replace(/([a-z]|[A-Z]| )\1+/g, (matched, char: string) => {
      return matched.length + char;
    });
  },
  decode: (input: string): string => {
    return input.replace(/(\d+)(\w| )/g, (_, rep: number, char: string) => {
      return char.repeat(rep);
    });
  },
};
