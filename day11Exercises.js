//Create a function that takes a single argument, a number, and after a timeout of 5 seconds, logs the number to the console.
 function numberLog5seconds(number){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(number);
        },5*1000);
    });
 }

 numberLog5seconds(10).then(function(number) {
    console.log(number, ' is returned');
 });

//Create a function that takes a single argument, a number, on an interval of every 5 seconds, logs the number to the console.

function numberLogEvery5(number){
    return new Promise((resolve) => {
        setInterval( () => {
            console.log(number, ' is coming again soon!');
            resolve(number);
        },5*1000);
    });
}

numberLogEvery5(7);

//Create an array that has strings, numbers, and booleans in it, at least two of each type. 
//Our first mixed-type array. Using array functions (like .filters, .sort, .includes, .map, .forEach, etc), 
//do the following (do NOT use for loops) and log them out to the console:

const myArray = [true, true, 54, 'heLLo', 25, false, 'sUp', 142, 'hi'];

//a) Create a new array consisting only of the strings in the array, then sort that array alphabetically ascending (A-Z). 
const stringArray = myArray
    .filter((element) => typeof element === 'string')
    .sort();

console.log(stringArray);

//b) Create a new array consisting only of the numbers in the array, and then sort them ascending. 
const numberArray = myArray
.filter((element) => typeof element === 'number')
.sort((a,b) => a-b);

console.log(numberArray)

//c) Create a new array consisting only of the numbers in the array, and then sort then descending. 

const numberArrayDesc = myArray
    .filter((element) => typeof element === 'number')
    .sort((a,b) => b-a);

    console.log(numberArrayDesc)

//d) Create a new array consisting only of the strings in the array, but lowercase all the strings.

const stringArrayLower = myArray
    .filter((element) => typeof element === 'string')
    .map((element) => {
        return element.toLowerCase();
    });
console.log(stringArrayLower);

//Create an array that has 5 objects that follow this user model:

//object {
//    name: string
//    age: number
//    isAdmin: boolean
// }

const people = require('./ex11Objects');

const Tim = new people('Tim',21,false);
const Tom = new people('Tom',18,false);
const George = new people('George',23,true);
const Jeff = new people('Jeff',16,false);
const Erin = new people('Erin',65,true);

const peopleArray = [Tim,Tom,George,Jeff,Erin];

// Using array functions (like .filters, .sort, .includes, .map, .forEach, etc), do the following and log them out to the console:
// a) Create a new array consisting only of user's that have an age greater than 20. 
const oldArray = peopleArray
    .filter((element) => element.age >= 20);
console.log(oldArray)

//b) Create a new array consisting only of user's that are admins.
const adminArray = peopleArray
    .filter((element) => element.isAdmin === true);
console.log(adminArray);

// c) Create a new array consisting only of user's that are both admin and have an age less than 50. 
const youngAdminArray = peopleArray
    .filter((element) => element.age <= 50 && element.isAdmin === true);
console.log(youngAdminArray);

//d) Sort the array by the user's names, alphabetically, ascending. 
const alphaArray = peopleArray
    .sort((a,b) => a.name.localeCompare(b.name));
console.log(alphaArray);

//e) Sort the array by the user's age, descending (oldest to youngest).
const ageArray = peopleArray
    .sort((a,b) => b.age - a.age)
console.log(ageArray);