let playerOne = new Player(true, 0, 0, 0);
let playerTwo = new Player(false, 0, 0, 0);

// Business logic

function Player(turn, diceRoll, roundScore, totalScore){
  this.turn = turn; // boolean
  this.diceRoll =   diceRoll; // number
  this.roundScore = roundScore; // number
  this.totalScore = totalScore;

  }

Player.prototype.rollsDice = function() {
  this.diceRoll = Math.floor(Math.random() * 6); // roll dice // increment turnScore into totalScore
  this.roundScore += this.diceRoll;
  if (this.diceRoll >= 2){
    this.totalScore = this.roundScore + this.totalScore;
    return this.totalScore;
  } else if (this.diceRoll === 1){
    return this.roundScore = 0;
  }
} 


// Player.prototype.turnDecider = function () {
//   if playerOne.rolls
// }