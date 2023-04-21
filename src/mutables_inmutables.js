// Primitives
const number = 10;

const bool = false;

const str = 'Hello!';

const missingObject = null;

const nothing = undefined;
let a = 1;
let b = a;
b = b + 2;

console.log(a);
console.log(b);


// Objects
const plainObject = {
  prop: 'Value'
};

const array = [1, 5, 6];

const functionObject = (n1, n2) => {
  return n1 + n2;
};

let x = [1];
let y = x;

y.push(2);

console.log(x); // [1, 2]
console.log(y); // [1, 2]