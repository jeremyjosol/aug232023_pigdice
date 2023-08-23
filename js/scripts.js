let playerOne = new Player(true, 0, 0);
let playerTwo = new Player(false, 0, 0);

function Player(turn, turnScore, totalScore){
  this.turn = turn;
  this.turnScore = turnScore;
  this.totalScore = totalScore;

  }

Player.prototype.rollsDice = function() {
  this.turnScore = Math.floor(Math.random(this.turnScore) * 6);
  this.totalScore += this.turnScore;
  if (this.turnScore === 1){
    return this.totalScore = 0;
  } if (this.turn === false) {
    } return this.totalScore;
  } 