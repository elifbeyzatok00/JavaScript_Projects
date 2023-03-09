/*
     Kelvin Weather
*/

const kelvin = 293;
//created a variable named kelvin, and set it equal to 293.The value saved to kelvin will stay constant.
const celsius = kelvin - 273;
//converted Kelvin to Celsius by subtracting 273 from the kelvin variable
let fahrenheit = celsius * (9/5) + 32;
//Used this equation to calculate Fahrenheit, then stored the answer in a variable named fahrenheit.
fahrenheit = Math.floor(fahrenheit);
//When we convert from Celsius to Fahrenheit, we often get a decimal number.we used the .floor() method from the built-in Math object to round down the Fahrenheit temperature.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//What’s 0 Kelvin in Fahrenheit?
const kelvin2 = 0;
console.log(`${kelvin2} kelvin equals to ${fahrenheit} Fahrenheit.`);


/*
     Newton scale
*/
// extra practice: Convert celsius to the Newton scale using the equation  "Newton = Celsius * (33/100)"

const celsius_ = 25;
//created a variable named kelvin, and set it equal to 293.The value saved to kelvin will stay constant.
let newton = celsius_ * (33/100);
newton = Math.floor(newton);

console.log(`${celsius_} celsius degrees  equals to ${newton} Newton .`);

