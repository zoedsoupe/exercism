import { resistorColor } from './resistor-color-duo';

describe('Resistor Colors', () => {
  it('Brown and black', () => {
    expect(resistorColor(['brown', 'black'])).toEqual(10);
  });

  it('Blue and grey', () => {
    expect(resistorColor(['blue', 'grey'])).toEqual(68);
  });

  it('Yellow and violet', () => {
    expect(resistorColor(['yellow', 'violet'])).toEqual(47);
  });

  it('Orange and orange', () => {
    expect(resistorColor(['orange', 'orange'])).toEqual(33);
  });

  it('Ignore additional colors', () => {
    expect(resistorColor(['green', 'brown', 'orange'])).toEqual(51);
  });

  it('Throws error when not enough colors', () => {
    expect(resistorColor(['green'])).toEqual(
      'At least two colors need to be present'
    );
  });
});
