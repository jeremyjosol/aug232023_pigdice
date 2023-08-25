// Business logic

function Player(id){
  this.id = id; // player 1 or 2
  this.turn = false // boolean
  this.diceRoll = 0 // number
  this.roundScore = 0 // number
  this.totalScore = 0 // final number
  this.winner = false; // WIP
}

Player.prototype.rollsDice = function() {
  this.diceRoll = Math.floor(Math.random() * 6) + 1; // roll dice
  if (this.diceRoll >= 2){ // if this dice roll is >= 2
    this.roundScore += this.diceRoll; // increment roundScore by diceRoll
  } else if (this.diceRoll === 1){ // if diceRoll hits 1
    this.roundScore = 0; // lose all your current points
    this.switchTurn(); // then switch player turn
  } 
this.gameWinner(); // WIP
}

Player.prototype.holdTurn = function() {
  this.totalScore += this.roundScore; // when holdTurn is called, increment totalScore by roundScore
  this.roundScore = 0; // clear roundScore back to 0
  this.switchTurn(); // then switch player turn
  this.gameWinner(); // WIP
} 

Player.prototype.startTurn = function() {
  this.turn = this.id === 1; // initialize player 
}

Player.prototype.switchTurn = function() {
  if (this.turn) { // when switchTurn is called in either rollsDice or holdTurn
    this.turn = false; // <-- this boolean switches turns
  
  let nextPlayer; // declare empty nextPlayer variable 
    if (this.id === 1) { 
    nextPlayer = playerTwo;
  } else {
    nextPlayer = playerOne;
  }
    nextPlayer.turn = true; // initialize nextPlayer turn
  }
}

Player.prototype.gameWinner = function() { // WIP
  if (this.totalScore >= 6)
    this.winner = true;
  }


// UI logic

const playerOne = new Player(1);
const playerTwo = new Player(2);

playerOne.startTurn();
playerTwo.startTurn();

window.addEventListener("load", function() {
  document.getElementById("roll-button").addEventListener("click", function() {

    if (playerOne.turn){

      playerOne.rollsDice();
      playerOne.gameWinner();

      let diceRollOutput = "Player 1 rolled a " + playerOne.diceRoll + "!";
    
      document.getElementById("player-1").innerText = "Player 1 Round Score: " + playerOne.roundScore;
      
        // resets playerTwo roundScore back to 0
      document.getElementById("player-2").innerText = "Player 2 Round Score: " + playerTwo.roundScore;
      
      document.getElementById("player-1-total").innerText = "Player 1 Total Score: " + playerOne.totalScore;
    
      document.getElementById("player-dice-roll").innerText = diceRollOutput;

        // document.getElementById("game-result").innerText = "Player One Wins!"

    } else if (playerTwo.turn){

      playerTwo.rollsDice();
        // resets playerOne roundScore back to 0
      document.getElementById("player-1").innerText = "Player 1 Round Score: " + playerOne.roundScore;

      document.getElementById("player-2").innerText = "Player 2 Round Score: " + playerTwo.roundScore;
      
      document.getElementById("player-2-total").innerText = "Player 2 Total Score: " + playerTwo.totalScore;

      document.getElementById("player-dice-roll").innerText = "Player 2 rolled a " + playerTwo.diceRoll + "!";
    
    } else if (playerOne.winner === true) {
      console.log("hello");
    } 
  });
});

window.addEventListener("load", function() {
  this.document.getElementById("hold-button").addEventListener("click", function() {

    if (playerOne.turn) {

    playerOne.holdTurn();

    document.getElementById("player-1-total").innerText = "Player 1 Total Score: " + playerOne.totalScore;

    document.getElementById("player-dice-roll").innerText = "Player 1 decided to hold. Player 2 rolls next!";
    
    console.log(playerOne);

   } else if (playerTwo.turn) {

    playerTwo.holdTurn();

    document.getElementById("player-1-total").innerText = "Player 1 Total Score: " + playerOne.totalScore;

    document.getElementById("player-dice-roll").innerText = "Player 2 decided to hold. Player 1 rolls next!";

    document.getElementById("player-2-total").innerText = "Player 2 Total Score: " + playerTwo.totalScore;

    console.log(playerTwo);
   }
  });
});