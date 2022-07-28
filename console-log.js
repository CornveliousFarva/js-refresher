// Console log of a single number
console.log(1)
print ()
// Console log of a single word
console.log('Hubris')
print()
// Console log of a string (like a sentence)
console.log('The third season of Solar Opposites was respectable.')
// Math in JavaScript
console.log(7 + 7);
console.log(1561 - 282);
console.log(69 / 9)
console.log(3 * 5)
// String Concatenation-thinkl math, but with words
console.log('hi' + 'ya')
console.log('work ' + 'place')
console.log('wild' + ' fire')
// Properties
// Length
console.log('Scouse, not English'.length)
console.log('      Fire Up Chips      '.trim())
// Built-In Objects
console.log(Math.random())
console.log(Math.random(Math.floor) *50)
// Variables- container for a value
// Creating a variable-var
// Var is a variable that cannot be reassigned a different value
const myName = 'Greg';
console.log(myName);

var favoriteFood = 'Subs';
var numOfPieces = 2;
var favoriteSubs = 'Jersey Mikes'
console.log(favoriteFood);
console.log(numOfPieces);
console.log(favoriteSubs);
// Creating a variable-let
// Let means the variable can be reassigned a different value
let blueBayou = false
// in the above example, I'm saying that blueBayou will never be reassigned
let bobsBurgers = false

bobsBurgers = true

console.log(bobsBurgers);
// In the above example, I started bobsBurgers as false, but then changed it to true. As the console will register the true statement last, it will register as true

// Variables - const
// Const is basically the ES6 equivalent of var
const entree = 'salad'
console.log(entree)

// Unlike let, consts cannot be alterered

// MATHEMATICAL OPERATORS
// Addition
let w = 1
w += 1
// Subtraction
let x = 1
x -= 1
// Multiplication 
let y = 1
y *= 1
// Division
let z = 1
z /= 1

// INCREMENT AND DECREMENT OPERATORS
// Increment
let a = 10;
a++;
console.log(a); // Output: 11
// Decrement
let b = 20;
b--;
console.log(b); // Output: 19

// STRING CONCATENATION WITH VARIABLES
// This has more to do with adding words, or strings 

let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet armadillo.'
// In the above example, we have armadillo as what myPet represnts and we are adding it into the console log

// STRING INTERPOLATION
// String interpolation is inserting, or interpolating variables into stages using template literals

const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.
// In the above example, a template literal is wrapped in backticks
// Inside of the TL, there is a placeholder, ${myPet}. The value of myPet is then inserted into the TL
// When you interpolate `I own a pet ${myPet}.`, the output is the string: 'I own a pet armadillo.'
// The benefit of this is readability. Using template literals, you don't have to worry about using the wrong quote marks and it's easier to tell what the new string will be

// TYPEOF OPERATORS
// Typeof operators check the value to the right and returns a string of the data type
const unknown1 'too';
console.log(typeof unknown1) 
// In the above example, since too is a string, typeof unknown1 will return as a string
const unknown2 = 25;
console.log(typeof unknown2)
// Output will return as a number
const unknown3 = false;
console.log(typeof unknown3)
// Output will return as a boolean