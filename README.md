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

Test 2: "If Player rollsDice, a randomized number with a max amount of 6 should update turnScore property."
Code:
playerOne.rollsDice();
Expected Output:
2
Code: 
playerOne.rollsDice();
Expected Output:
5, etc