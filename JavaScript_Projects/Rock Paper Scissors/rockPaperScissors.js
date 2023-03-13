/*
    Rock, Paper, Scissors

    Rock, Paper, Scissors is a classical two player game.
    Each player chooses either rock, paper or scissors.
    The items are compared and player chooses the more powerfull item wins
*/



const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if(userInput==='rock' || userInput==='paper' || userInput==='scissors'){
        return userInput;
    }else{
        return (console.log("Invalid value! Please type one of them: rock, paperor scissors"));
    }
};

//console.log(getUserChoice('rock'));

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    //console.log(randomNumber);

    switch(randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
  
};


//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {

    if(userChoice === computerChoice ){
        return 'This game is a tie!';
    }

    if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return 'Sorry, computer won!';
        }else{
            return 'Congratulations, you won!';
        }
    }

    if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            return 'Sorry, computer won!';
        }else{
            return 'Congratulations, you won!';
        }
    }

    if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            return 'Sorry, computer won!';
        }else{
            return 'Congratulations, you won!';
        }
    }
};

//console.log(determineWinner('rock', 'scissors'));

const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
};

// variables of userChoice, computerChoice 80th line are same variables of userChoice, computerChoice 75 and 76th lines
// But they don't have connection with variables of userChoice, computerChoice which in determineWinner function

playGame();