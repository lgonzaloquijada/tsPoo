export abstract class Animal {
  constructor(protected name: string) {}

  public move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m.`);
  }

  greeting(): string {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log('Doing something');
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  greeting(): string {
    this.doSomething();
    return `Woof! I'm ${this.name}`;
  }

  woof(times: number = 1) {
    console.log('Woof!'.repeat(times));
  }
}

// const fifi = new Animal('Fifi');
// fifi.move(10);
// console.log(fifi.greeting());

const dog = new Dog('Buddy', 'John');
dog.move(20);
console.log(dog.greeting());
dog.woof(3);

//dog.doSomething(); // Error: Property 'doSomething' is protected and only accessible within class 'Animal' and its subclasses.