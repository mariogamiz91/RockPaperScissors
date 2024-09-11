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



const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    let computerPick = getComputerChoice();
    alert(button.value);
    alert(computerPick);
        
        if (computerPick == 'rock' && button.value == 'rock'){
            alert("It's a Tie");
    }   else if (computerPick == 'rock' && button.value == 'paper'){
            alert("You human won");
    }   else if (computerPick == 'rock' && button.value=='scissors'){
            alert("Computer has won");
    }   else if (computerPick == 'paper' && button.value=='rock'){
        alert("Computer has won");
    }   else if (computerPick == 'paper' && button.value=='paper'){
        alert("It's a Tie");
    }   else if (computerPick == 'paper' && button.value=='scissors'){
        alert("You human won");
    }   else if (computerPick == 'scissors' && button.value=='rock'){
        alert("You human won");
    }   else if (computerPick == 'scissors' && button.value=='paper'){
        alert("Computer has won");
    }   else if (computerPick == 'scissors' && button.value=='scissors'){
        alert("It's a Tie");
    }



    
  });
});





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
