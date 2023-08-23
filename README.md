### Describe: Player(score, turn);

Test 1: "It should return Player properties when called."
Code: 
let playerOne = new Player(true, 0, 0);
playerOne;
Expected Output: 
turn: true
turnScore: 0 
totalScore: 0

### Describe Player.prototype.rollsDice();

Test 1: "If Player's turnScore property = 1, return turn property as false."
Code: 
playerOne.rollsDice(true, 1, 0);
Expected Output: 
false

  Player.prototype.rollsDice();
  let playerOne.turnScore = 1;
  if (playerOne.turnscore === 1){
    return playerOne.turn false;
  }
