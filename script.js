
const buttons = document.querySelectorAll("button");
const playerWonText= "You have won this round";
const computerWonText= "You loose, skynet has won this round";
const tieText = "It's a tie"
var playerScore = 0;
var computerScore = 0;
var tieScore = 0;
const buttonsGame = document.querySelector(".buttons-section");
const choicesSection = document.querySelector(".choices-section");
const scoreSection = document.querySelector(".score-section");

const newGameButton = document.createElement('button');
newGameButton.textContent = 'New game!';




var winner = document.getElementById("winner");


function getComputerChoice (){
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0){
        return 'rock'
    } else if (choice == 1){
        return 'paper'
    } else if(choice==2) {
        return 'scissors'
    }   
}

function getHumanChoice(){
    let humanChoice = prompt("Piedra, papel o tijera?").toLocaleLowerCase();
    return humanChoice;
}







// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    

    let computerPick = getComputerChoice();
    document.getElementById("computerResult").innerHTML = computerPick;
    document.getElementById("humanResult").innerHTML = button.value;
    
           
        if (computerPick == 'rock' && button.value == 'rock'){
            document.getElementById("winner").innerHTML = tieText;
            tieScore = tieScore + 1;
            document.getElementById("tieScore").innerHTML = tieScore;

    }   else if (computerPick == 'rock' && button.value == 'paper'){
        document.getElementById("winner").innerHTML = playerWonText;
        playerScore = playerScore + 1;
        document.getElementById("playerScore").innerHTML = playerScore;
    }   else if (computerPick == 'rock' && button.value=='scissors'){
        document.getElementById("winner").innerHTML = computerWonText;
        computerScore = computerScore + 1;
        document.getElementById("computerScore").innerHTML = computerScore;
    }   else if (computerPick == 'paper' && button.value=='rock'){
        document.getElementById("winner").innerHTML = computerWonText;
        computerScore = computerScore + 1;
        document.getElementById("computerScore").innerHTML = computerScore;
    }   else if (computerPick == 'paper' && button.value=='paper'){
        document.getElementById("winner").innerHTML = tieText;
        tieScore = tieScore + 1;
        document.getElementById("tieScore").innerHTML = tieScore;
    }   else if (computerPick == 'paper' && button.value=='scissors'){
        document.getElementById("winner").innerHTML = playerWonText;
        playerScore = playerScore + 1;
        document.getElementById("playerScore").innerHTML = playerScore;
    }   else if (computerPick == 'scissors' && button.value=='rock'){
        document.getElementById("winner").innerHTML = playerWonText;
        playerScore = playerScore + 1;
        document.getElementById("playerScore").innerHTML = playerScore;
    }   else if (computerPick == 'scissors' && button.value=='paper'){
        document.getElementById("winner").innerHTML = computerWonText;
        computerScore = computerScore + 1;
        document.getElementById("computerScore").innerHTML = computerScore;
    }   else if (computerPick == 'scissors' && button.value=='scissors'){
        document.getElementById("winner").innerHTML = tieText;
        tieScore = tieScore + 1;
        document.getElementById("tieScore").innerHTML = tieScore;
    }   

                //Validation of score
                if (computerScore >= 5){
                    document.getElementById("winner").innerHTML = "Skynet has won 5 rounds, you loosed the game, humanity is doom";
                        buttonsGame.remove();
                        choicesSection.remove();
                        scoreSection .remove();
                        winner.appendChild(newGameButton);
                        newGameButton.addEventListener("click", newGame);
                        
                   

                   

                } else if (playerScore >=5){
                    document.getElementById("winner").innerHTML = "You have won 5 rounds, humanity is safe against skynet"
                        buttonsGame.remove();
                        choicesSection.remove();
                        scoreSection.remove();
                        winner.appendChild(newGameButton);
                        newGameButton.addEventListener("click", newGame);
                      
                    
                 
                }

                       


    
  });
});

function newGame(){
    location.reload();
}



/*
function playGame(){
    function playRound(computerPick, humanPick){

    
        if (computerPick == 'rock' && humanPick == 'rock'){
           return console.log("It's a tie") 
        } else if (computerPick == 'rock' && humanPick == 'paper'){
            ++humanScore;
            return console.log("Human has won");
            
        } else if (computerPick == 'rock' && humanPick=='scissors'){
            ++computeScore;
            return console.log("Computer has won");
        } else if (computerPick == 'paper' && humanPick == 'rock'){
            ++computeScore
            return console.log("Computer has won");
            
        }  else if (computerPick == 'paper' && humanPick == 'paper'){
            return console.log("It's a tie") ;
        }   else if (computerPick == 'paper' && humanPick == 'scissors'){
            ++humanScore;
            return console.log("Human has won") ;
        }   else if (computerPick == 'scissors' && humanPick == 'scissors'){
            return console.log("It's a tie") ;
        }   else if (computerPick == 'scissors' && humanPick == 'paper'){
            ++computeScore
            console.log("Computer has won");
        }   else if (computerPick == 'scissors' && humanPick == 'rock'){
            ++humanScore;
            return console.log("Human has won") ;
        }
        
    }









                    var humanScore = 0;
                    var computeScore= 0;  

    
 
            
                var computerPick = getComputerChoice();
                console.log(computerPick);
                var humanPick = getHumanChoice();
                console.log(humanPick); 
            playRound(computerPick,humanPick);
            var computerPick = getComputerChoice();
            console.log(computerPick);
            var humanPick = getHumanChoice();
            console.log(humanPick);
            playRound(computerPick,humanPick);
            var computerPick = getComputerChoice();
                console.log(computerPick);
                var humanPick = getHumanChoice();
                console.log(humanPick);
            playRound(computerPick,humanPick);
            var computerPick = getComputerChoice();
                console.log(computerPick);
                var humanPick = getHumanChoice();
                console.log(humanPick);
            playRound(computerPick,humanPick);
            var computerPick = getComputerChoice();
                console.log(computerPick);
                var humanPick = getHumanChoice();
                console.log(humanPick);
            playRound(computerPick,humanPick);


                console.log(humanScore,computeScore);
}




    


playGame();


*/
