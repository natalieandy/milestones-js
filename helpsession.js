console.log('Number time!');

let num1 = 8;
let num2 = 41;

console.log(`The value of num1 is: ${num1}`);
console.log(`The value of num2 is: ${num2}`);

console.log(' ');

let sum = num1 + num2
console.log(`The sum of ${num1} and ${num2} is: ${sum} `);

let difference = num1 - num2
console.log(`The difference of ${num1} - ${num2} is ${difference}`);

let product = num1 * num2
console.log(`The product of ${num1} * ${num2} is ${product}`);

let quotient = num1 / num2
console.log(`The product of ${num1} / ${num2} is ${quotient}`);

let remainder = num1 % num2
console.log(`The remainder of ${num1} after diving by ${num2} is ${remainder}`);

let power = num1 ** num2;
console.log(`The power of ${num1} ** ${num2} is ${power} `);

let floor = Math.floor(num1/num2);
console.log(`The floor of ${num1} and ${num2} is ${floor}`);

console.log('===========');

let blah = 4562;
console.log(`The value of blah is ${blah}`);

let rightMostDigit = blah % 10
console.log(`The right most digit of ${blah} is: ${rightMostDigit}`);
// The right most digit is always the remainder (%) because that signifies what is left over

blah = blah++;
console.log(`The value of ${blah} is `);
// blah++ is shorthand for blah + 1, and blah+= is shorthand for blah + x
