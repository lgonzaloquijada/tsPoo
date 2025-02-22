export class MyDate {
  constructor(
    public year: number = 1993,
    public month: number = 7,
    private day: number = 9
  ) {}

  public printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${this.year}/${month}/${day}`;
  }

  private addPadding(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  public add(amount: number, type: 'days' | 'months' | 'years') {
    switch (type) {
      case 'days':
        this.day += amount;
        break;
      case 'months':
        this.month += amount;
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
//console.log(myDate.day); // 1
//myDate.day = 2;
//console.log(myDate.day); // 2
console.log(myDate.getDay()); // 1
