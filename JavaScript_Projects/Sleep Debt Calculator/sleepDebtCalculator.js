/*
    Sleep Debt Calculator
*/


/*
const getSleepHours = day => {
    day = day.toLowerCase();
    if(day === 'monday'){
        return 8;
    }else if(day === 'tuesday'){
        return 7;
    }else if(day === 'wednesday'){
        return 6;
    }else if(day === 'thursday'){
        return 8;
    }else if(day === 'friday'){
        return 5;
    }else if(day === 'saturday'){
        return 9;
    }else if(day === 'sunday'){
        return 10;
    }else {
        return "Error!";
    }

};

//console.log(getSleepHours('Tuesday'));

const getActualSleepHours = () => {
    
    return getSleepHours('monday') +getSleepHours('tuesday') +getSleepHours('wednesday') +getSleepHours('thursday') +getSleepHours('friday') +getSleepHours('saturday') +getSleepHours('sunday'); 

};
*/

const getActualSleepHours = () => {
    
    return 8 + 7 + 5 + 6 + 8 + 10 + 9; 

};


//console.log(getActualSleepHours());  //prints 53

/*
const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
};
*/

const getIdealSleepHours = (idealHours = 8) => idealHours * 7;

//console.log(getIdealSleepHours());   //prints 56

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if(actualSleepHours === idealSleepHours){
        console.log("You got the perfect amount of sleep");
    }else if(actualSleepHours > idealSleepHours){
        console.log("You've got an extra "+(actualSleepHours - idealSleepHours)+" hours of sleep this week");
    }else if(actualSleepHours < idealSleepHours) {
        console.log("You should get an extra " + (idealSleepHours - actualSleepHours) + " hours of sleep this week" );
    }else{
        console.log("Error! Check your code.");
    }
};

calculateSleepDebt();