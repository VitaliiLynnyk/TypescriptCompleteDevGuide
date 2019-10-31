const today: Date = new Date();
console.log(today.getDate());

let point: { x: number; y: number } = { x: 10, y: 10 };

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
