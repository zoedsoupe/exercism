type OpeningBracket = '{' | '[' | '(';
type ClosingBracket = '}' | ']' | ')';

const openingBrackets: ReadonlyArray<OpeningBracket> = ['{', '[', '('];
const closingBrackets: ReadonlyArray<ClosingBracket> = ['}', ']', ')'];

const isOpening = (bracket: string): boolean =>
  openingBrackets.includes(bracket);

const isClosing = (bracket: string): boolean =>
  closingBrackets.includes(bracket);

const getOpeningPair = (closingBracket: ClosingBracket): OpeningBracket =>
  openingBrackets[closingBracket.indexOf(closingBracket)];

export const isPaired = (
  input: string,
): boolean => {
  input.split('').reduce((stack, ch: string | OpeningBracket | ClosingBracket) =>
    isOpening(ch) ? [ch, ...stack] :
  , [] as ReadonlyArray<OpeningBracket | ClosingBracket>)
};
