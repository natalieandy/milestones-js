console.log('HOORAY 4 ARRAYS');
console.log(' ');

console.log('Manipulating the array...')

// Declaring the variable
let coolArray = [' booyah', ' hell ya', ' whoopwhoop', ' yeehaw'];
console.log(`- The array known as coolArray contains the following strings: ${coolArray}`);

// Length
console.log(`- coolArray contains ${coolArray.length} elements`);

/*Retreiving the values...
    Referenced:
      1. https://www.techiedelight.com/get-first-element-array-javascript/
      2. https://flaviocopes.com/how-to-get-last-item-array-javascript/ */

console.log(`- The first element in coolArray is${coolArray.shift(0)}`);
console.log(`- The second element in coolArray is${coolArray.shift(1)}`);

let lastItem = coolArray[coolArray.length -1];
console.log(`- The last element in coolArray is${lastItem}`);

let k = 3;
console.log(`- The element at index k, where k is a variable containing the number 3, is${coolArray.shift(k)}`);

console.log(' ');

// Changing the values of the array
console.log('Changing the values of the array...');

// console.log(`***Replacing the first element in coolArray from booyah to ayo:${coolArray.splice(-1, 0, 'yahoo')}`);

// Append
let append = coolArray + 'ayo';
console.log(`- Appending the element ayo to coolArray:${append}`);
