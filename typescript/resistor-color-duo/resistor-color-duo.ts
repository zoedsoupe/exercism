const COLOR_TO_RESISTOR_VALUES = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

type Color = keyof typeof COLOR_TO_RESISTOR_VALUES;

const getColorValue = (colors: readonly Color[]): number =>
  colors
    .map((color) => COLOR_TO_RESISTOR_VALUES[color])
    .reduce((acc, value) => acc * 10 + value);

export const resistorColor = (colors: readonly Color[]): string | number =>
  colors.length < 2
    ? 'At least two colors need to be present'
    : getColorValue(colors.slice(0, 2));
