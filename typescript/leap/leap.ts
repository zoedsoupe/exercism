const year = {
  value: 0,
  isDivisibleBy: function (divisor: number): boolean {
    return this.value % divisor === 0;
  },
};

function isLeapYear(n: number): boolean {
  year.value = n;

  return (
    year.isDivisibleBy(4) &&
    (!year.isDivisibleBy(100) || year.isDivisibleBy(400))
  );
}

export default isLeapYear;
