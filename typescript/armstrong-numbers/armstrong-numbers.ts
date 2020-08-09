const ArmstrongNumbers = {
  isArmstrongNumber: function (digit: number): boolean {
    const numbers = `${digit}`.split("").map((num) => Number(num));
    const power = numbers.length;

    const sum = numbers.reduce((acc, num) => {
      return (acc += Math.pow(num, power));
    }, 0);

    if (sum === digit) return true;

    return false;
  },
};
export default ArmstrongNumbers;
