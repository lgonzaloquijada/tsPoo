export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.year}/${this.month}/${this.day}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
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
console.log(myDate.printFormat()); // 2021/1/1
myDate.add(3, 'days');
console.log(myDate.printFormat()); // 2021/1/2
