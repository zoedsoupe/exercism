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

export class ResistorColor {
  private readonly MAX_BAND_NUMBER = 2;
  private readonly colors: Color[];

  constructor(colors: Color[]) {
    if (colors.length < this.MAX_BAND_NUMBER)
      throw new Error("At least two colors need to be present");
    else this.colors = colors.slice(0, this.MAX_BAND_NUMBER);
  }

  value(): number {
    return this.colors
      .map((color) => COLOR_TO_RESISTOR_VALUES[color])
      .reduce((acc, value) => acc * 10 + value);
  }
}
