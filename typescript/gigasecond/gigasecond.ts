class Gigasecond {
  public actual: Date;

  constructor(date: Date) {
    this.actual = date;
  }

  date(): Date {
    const gigDate = Math.pow(10, 12);
    return new Date(this.actual.getTime() + gigDate);
  }
}

export default Gigasecond;
