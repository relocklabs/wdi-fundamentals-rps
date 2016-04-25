////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var move
    if (move != null) {
        return move;
        console.log(move);
    }
        else {
            return getinput();
        }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move == null) {
        var compMove = randomPlay();
        console.log(compMove)
    }
    else {
        return move 
    }
    
}

function getWinner(playerMove,computerMove) {
    var winner[computer, tie, player];
   
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while ((playerWins <5) && (computerWins <5));{ 
        var score = getWinner(playerMove,computerMove);
            if (results == "player"); {
                 playerwins = playerWins +1;
                 console.log("Player" + + "Wins")
                 }
                 else if (results == "computer"); {
                     computerWins = computerWins +1;
                     console.log("Computer" + + "Wins)
                 } }
            if ((playerWins === 5)) && (computerWins <5));{
              return console.log("PLAYER WINS THE GAME");
                return  [playerWins, computerWins];
            } else if ((computerWins === 5)) %%% (playerWins <5));{
                return console.log("YOU HAVE LOST! ALL YOUR GAMES ARE BELONG TO ME, TRY AGAIN!")
                return console.log("Computer Won" + computerWins + "Games")
            }
}

