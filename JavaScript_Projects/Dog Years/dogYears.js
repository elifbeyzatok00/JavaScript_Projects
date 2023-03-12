/*
Dog Years

Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.
*/

// Let's give your age constantly
const myAge = 20;

//The first two years of a dog’s life count as 10.5 dog years each. We will keep the number 2 here and multiply by 10.5
let earlyYears = 2;
earlyYears *= 10.5;

//Each year following equates to 4 dog years. So we need to find later years and multiply by 4
let laterYears = myAge  - 2;
laterYears *= 4;

//Let's add earlyYears and laterYears
let myAgeInDogYears = earlyYears + laterYears;

let myName = "Elif Beyza Tok";
myName = myName.toLowerCase();

//Let's print the results to the terminal
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
