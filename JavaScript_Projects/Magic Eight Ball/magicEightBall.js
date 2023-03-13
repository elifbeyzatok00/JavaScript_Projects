let userName = 'Elif';
// if userName = '' , it turns false. But if we write something in '', it turns true
userName ? console.log(`Hello ${userName}!`)  :  console.log(`Hello!`);

let userQuestion = 'Will I adopt a new kitty soon?';
console.log(`${userName} has asked: ${userQuestion} `)

//We need to generate a random number between 0 and 7
/*
Math.random() returns a value between 0 (inclusive) and 1 (exclusive).

In order to make this set of numbers range from 0 (inclusive) to 8 (exclusive) we can multiply the returned value by 8.

Finally, to ensure we only have whole numbers from 0 to 7 we can round down using Math.floor().
 */
let randomNumber = (Math.floor(Math.random() * 8));
//console.log(randomNumber);


//We will save a value to this eightBall variable  depending on the value of randomNumber
let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain - Bu kesin';
    break;
  case 1:
    eightBall = 'It is decidedly so - Kesin öyledir';
    break;
  case 2:
    eightBall = 'Reply hazy try again - Bulanık cevap tekrar deneyin';
    break;
  case 3:
    eightBall = 'Cannot predict now - Şimdi tahmin edemem';
    break;
  case 4:
    eightBall = 'Do not count on it - buna güvenme';
    break;
  case 5:
    eightBall = 'My sources say no - Kaynaklarım hayır diyor';
    break;
  case 6:
    eightBall = 'Outlook not so good - Görünüm çok iyi değil';
    break;
  case 7:
    eightBall = 'Signs point to yes - İşaretler evete işaret ediyor';
    break;
  default:
    console.log('invalid value. Try again');
    break;

}

console.log(`The Magic 8 ball says: ${eightBall}.`);

