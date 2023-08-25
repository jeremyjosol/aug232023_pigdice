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
Player parameters: (true, 1, 0)
playerOne.rollsDice();
Expected Output: 
false

Test 2: "If Player rollsDice, a randomized number with a max amount of 6 should update turnScore property, otherwise return turn property as false."
Code:
playerOne.rollsDice();
Expected Output: Random number from 2-6 || turn: false

Test 3: "If Player rollsDice and turnScore property is between 2-6, increment totalScore property based on number value. However, if Player rollsDice and turnScore property = 1, totalScore property = 0."
Code:
playerOne.rollsDice();
Expected Output: totalScore: 2-100 || totalScore: 0

### Describe: Player.prototype.holdTurn();

Test 1: "If Player decides to holdTurn, double Player's total score."
Code: 
Player parameters: (true, 0, 0, 5)
playerOne.holdTurn();
Expected Output: totalScore: 10

### Major refactoring of tests