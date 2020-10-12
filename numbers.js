console.log('NUMBER TIME!');
console.log(' ');
console.log('Assigning Values...');

let num1 = 8;
let num2 = 41;

console.log(`The value of num1 is: ${num1}`);
console.log(`The value of num2 is: ${num2}`);

console.log(' ');
console.log('Completing operations to the previously assigned values...');

let sum = num1 + num2
console.log(`- The sum of ${num1} and ${num2} is: ${sum} `);

let difference = num1 - num2
console.log(`- The difference of ${num1} and ${num2} is: ${difference}`);

let product = num1 * num2
console.log(`- The product of ${num1} and ${num2} is: ${product}`);

let quotient = num1 / num2
console.log(`- The quotient of ${num1} and ${num2} is: ${quotient}`);

let remainder = num1 % num2
console.log(`- The remainder of ${num1} after diving by ${num2} is: ${remainder}`);

let power = num1 ** num2;
console.log(`- The power of ${num1} ** ${num2} is: ${power} `);

let floor = Math.floor(num1/num2);
console.log(`- The floor of ${num1} and ${num2} is: ${floor}`);

console.log(' ');
console.log('Experimenting with changing the values of num1 and num2...');

num1 = 23;
num2 = 2;
// Don't forget to remove the let after it has been declared!

console.log(`The value of num1 is now: ${num1}`);
console.log(`The value of num2 is now: ${num2}`);

console.log(' ');

sum = num1 + num2;
console.log(`- The sum of ${num1} and ${num2} is now: ${sum}`);

difference = num1 - num2;
console.log(`- The difference of ${num1} and ${num2} is now: ${difference}`);

product = num1 * num2;
console.log(`- The product of ${num1} and ${num2} is now: ${product}`);

console.log('...And so on');
console.log(' ');


// BLAH VARIABLE SECTION:
console.log('Assigning a number to a variable and manipulating it in the following ways...');

let blah = 4562;
console.log(`The value of the variable known as blah is: ${blah}`);

console.log(' ');

let rightMostDigit = blah % 10
console.log(`- The right most digit of ${blah} is: ${rightMostDigit}`);
/* The right most digit is always the remainder (%) because that signifies what is left over
    (Think about it as though 4562 = 4*1000 + 5*100 + 6*10 + 2) */

console.log('- Blah (4562) is: even');
// Confused about this

console.log(' ');
// INCREMENTING:
let newBlah = blah + 1;
console.log(`- Incrementing blah (4562) by 1, now makes blah: ${newBlah}`);
// blah++ is shorthand for blah + 1, and blah+= is shorthand for blah + x

newBlah = blah + 2;
console.log(`- Incrementing by 2 now makes blah: ${newBlah}`);

newBlah = blah + 10;
console.log(`- Incrementing by 10 now makes blah: ${newBlah}`);

let k = 5;
newBlah = blah + k;
console.log(`- Incrementing by k, where k = 5, now makes blah: ${newBlah}`);

console.log(' ');
// DECREMENTING:
newBlah = blah - 1;
console.log(`- Decrementing blah (4562) by 1, now makes blah: ${newBlah}`);

newBlah = blah - 2;
console.log(`- Decrementing by 2 now makes blah: ${newBlah}`);

newBlah = blah - 10;
console.log(`- Decrementing by 10 now makes blah: ${newBlah}`);

k = 5;
newBlah = blah - k;
console.log(`- Decrementing by k, where k = 5, now makes blah: ${newBlah}`);
