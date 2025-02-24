console.log(Math.PI);
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));

class MyMath {
  static PI = 3.14;

  static max(...values: number[]): number {
    return values.reduce((acc, value) => (value > acc ? value : acc), values[0]);
  }
}

const myMath = new MyMath();
console.log(MyMath.PI);
console.log(MyMath.max(1, 2, 3, 4, 5));