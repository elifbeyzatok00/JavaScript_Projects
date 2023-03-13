/*
Math.random() returns a value between 0 (inclusive) and 1 (exclusive).

In order to make this set of numbers range from 0 (inclusive) to 1000 (exclusive) we can multiply the returned value by 1000.

Finally, to ensure we only have whole numbers from 0 to 999 we can round down using Math.floor().
 */
let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;
const runnerAge = 20;

if(runnerAge > 18){
  raceNumber += 1000;
  if(runnerAge > 18 && registeredEarly == true){
    console.log(`Your race number is ${raceNumber}. You will race at 9:30 am.`);
  }else if(runnerAge > 18 && registeredEarly == false){
    console.log(`Your race number is ${raceNumber}. You will race at 11:00 am.`);
  }
}else if(runnerAge < 18){
  console.log(`Your race number is ${raceNumber}. You will race at 12:30 am.`);
}else{ //runners exactly 18 years old
  console.log(`You must see the registration desk`);
}













