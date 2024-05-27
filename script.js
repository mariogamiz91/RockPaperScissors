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



