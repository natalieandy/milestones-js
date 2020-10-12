console.log('STRING TIME BBY!');
console.log(' ');

let str1 = 'Gold';
let str2 = 'Fish';

console.log('Assigning Values...')
console.log(`The value of str1 is: ${str1}`);
console.log(`The value of str2 is: ${str2}`);

console.log(' ');

console.log('Manipulating str1 and str2...');

let cocatenate = str1 + str2;
console.log(`- The cocatenation of ${str1} (str1) and ${str2} (str2) is: ${cocatenate}`);

console.log(`- Gold (str1) is included in Fish (str2): ${str1.includes(str2)}`);

console.log(' ');

// ASSIGNING A STRING TO A VARIABLE
console.log('Assigning a string to a variable and manipulating it in the following ways...');

let waffles = 'GoldFish is the snack that smiles back'
console.log(`- The value of the new variable known as waffles is: ${waffles}`);

//Length:
console.log(`- The length of the string, Golfish is the snack that smiles back, is: ${waffles.length}`);

//Uppercase:
console.log(`- The string in all uppercase: ${waffles.toUpperCase(waffles)}`);

//Lowercase:
console.log(`- The string in all lowercase: ${waffles.toLowerCase(waffles)}`);

//First character:
console.log(`- The first character of the string is: ${waffles.charAt(0)}`);

//Second character:
console.log(`- The second character of the string is: ${waffles.charAt(1)}`);

//K character:
let k = 3
console.log(`- The k character of the string, where k = 3, is: ${waffles.charAt(k)}`);

//Modifying the value of waffles
neWaffles = waffles + 'a'
console.log(`- Adding -a to the string results in: ${neWaffles}`);

console.log(' ');

//Template literals; got interrupted but will return to this!!
console.log('Using template literals to print a formatted string containing dynamic information...')

console.log(``)
