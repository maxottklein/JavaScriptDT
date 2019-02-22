const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
    console.log('Sorry, but your Input is wrong!');
  }
};

const getComputerChoice = () => {
  const randomNumber =    Math.floor(Math.random() * 3);
  switch (randomNumber){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  
  if(userChoice === computerChoice){
    return 'the Game is a tie!';
  }
  
 if (userChoice === 'rock'){
   if (computerChoice === 'paper'){
     return 'Computer won!';
   } else {
     return 'User won!';
   }
 } 

  
if (userChoice === 'paper'){
   if (computerChoice === 'scissors'){
     return 'Computer won!';
   } else {
     return 'User won!';
   }
 } 

if (userChoice === 'scissors'){
   if (computerChoice === 'rock'){
     return 'Computer won!';
   } else {
     return 'User won!';
   }
 } 
  
 if (userChoice === 'bomb'){
  return 'You destroyed the computer, Congrats!';
   } 

}

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('Your choice is: ' + userChoice);
  console.log('The computer choice is: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();











