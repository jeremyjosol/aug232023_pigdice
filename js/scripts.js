let playerOne = new Player(true, 0, 0);
let playerTwo = new Player(false, 0, 0);

function Player(turn, turnScore, totalScore){
  this.turn = turn;
  this.turnScore = turnScore;
  this.totalScore = totalScore;

  }

Player.prototype.rollsDice = function() {
  if (this.turnScore === 1){
    return this.turn = false;
  } return this.turn;
}