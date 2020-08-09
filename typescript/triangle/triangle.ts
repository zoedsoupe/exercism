export default class Triangle {
  sides: number[];

  constructor(...sides: number[]) {
    this.sides = sides;
  }

  private checkInequality(): void {
    const sumOfSides = this.sides.reduce((acc, side) => {
      return acc + side;
    }, 0);

    const inequality = this.sides.filter((side) => {
      return side > sumOfSides - side;
    });

    if (inequality.length > 0) throw new Error("Violate triangle inequality");
  }

  private validateSides(): void {
    if (this.sides.some((side) => side <= 0) || this.sides.length !== 3)
      throw new Error("Not a triangle");
  }

  private matchingSides(): number {
    let matchingSides = 1;
    let prev;

    for (const side of this.sides) {
      if (side === prev) matchingSides++;
      prev = side;
    }

    return matchingSides;
  }

  kind(): string {
    this.sides.sort();
    this.validateSides();
    this.checkInequality();

    switch (this.matchingSides()) {
      case 3:
        return "equilateral";
      case 2:
        return "isosceles";
    }

    return "scalene";
  }
}
