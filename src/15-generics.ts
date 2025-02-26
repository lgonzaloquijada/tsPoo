// function getValue(value: number): number {
//   return value;
// }

function getValue<T>(value: T): T {
  return value;
}

function getValue2<T, T2>(value: T, value2: T2): T {
  return value;
}

getValue(10).toFixed();
getValue('10').toUpperCase();
getValue(true).valueOf();
getValue([1, 2, 3]).length;

getValue<number>(10).toFixed(); // we can also specify the type
getValue<string>('10').toUpperCase(); // we can also specify the type
