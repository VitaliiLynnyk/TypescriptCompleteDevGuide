class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: string): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// Example of generics withfunctions

function printStrings(arr: string[]): void {
  arr.forEach(e => {
    console.log(e);
  });
}

function printNumbers(arr: number[]): void {
  arr.forEach(e => {
    console.log(e);
  });
}

function printAnything<T>(arr: T[]): void {
  arr.forEach(e => {
    console.log(e);
  });
}
