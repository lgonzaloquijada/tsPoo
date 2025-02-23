export class MyDate {
  constructor(
    public year: number = 1993,
    private _month: number = 7,
    private _day: number = 9
  ) {}

  public printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this._month);
    return `${this.year}/${month}/${day}`;
  }

  get day() {
    return this._day;
  }

  get isLeapYear(): boolean {
    return (
      this.year % 4 === 0 && (this.year % 100 !== 0 || this.year % 400 === 0)
    );
  }

  get month() {
    return this._month;
  }

  set month(value: number) {
    if (value < 1 || value > 12) {
      throw new Error('Invalid month');
    }
    this._month = value;
  }

  private addPadding(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  public add(amount: number, type: 'days' | 'months' | 'years') {
    switch (type) {
      case 'days':
        this._day += amount;
        break;
      case 'months':
        this._month += amount;
        break;
      case 'years':
        this.year += amount;
        break;
    }
  }

  getDay() {
    return this.day;
  }
}

const myDate = new MyDate(2021, 1, 1);
console.log(myDate.month);
