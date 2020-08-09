class Squares {
  private value: number;

  constructor(squares: number) {
    this.value = squares;
  }

  get squareOfSum(): number {
    let sum = 0;

    for (let i = 1; i <= this.value; i++) {
      sum += i;
    }

    return Math.pow(sum, 2);
  }

  get sumOfSquares(): number {
    const squares = [];

    for (let i = 1; i <= this.value; i++) {
      squares.push(Math.pow(i, 2));
    }

    return squares.reduce((acc, square) => acc + square);
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}

export default Squares;
