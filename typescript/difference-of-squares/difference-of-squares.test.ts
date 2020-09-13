import { squareOfSum, sumOfSquares, difference } from './difference-of-squares';

describe('Squares', () => {
  describe('up to 5', () => {
    it('gets the square of sum', () => {
      expect(squareOfSum(5)).toBe(225);
    });

    it('gets the sum of squares', () => {
      expect(sumOfSquares(5)).toBe(55);
    });

    it('gets the difference', () => {
      expect(difference(5)).toBe(170);
    });
  });

  describe('up to 10', () => {
    it('gets the square of sum', () => {
      expect(squareOfSum(10)).toBe(3025);
    });

    it('gets the sum of squares', () => {
      expect(sumOfSquares(10)).toBe(385);
    });

    it('gets the difference', () => {
      expect(difference(10)).toBe(2640);
    });
  });

  describe('up to 100', () => {
    it('gets the square of sum', () => {
      expect(squareOfSum(100)).toBe(25502500);
    });

    it('gets the sum of squares', () => {
      expect(sumOfSquares(100)).toBe(338350);
    });

    it('gets the difference', () => {
      expect(difference(100)).toBe(25164150);
    });
  });
});
