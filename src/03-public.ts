export class MyDate {
  public year: number;
  public month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  public printFormat(): string {
    return `${this.year}/${this.month}/${this.day}`;
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
}

const myDate = new MyDate(2021, 1, 1);
//console.log(myDate.day); // 1
//myDate.day = 2;
//console.log(myDate.day); // 2
