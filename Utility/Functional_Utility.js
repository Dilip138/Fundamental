 const readline=require('readline-sync'); 
 /**
  * @purpose : Computes the prime factorization of N using brute force..
  */


 exports.primeFactor = (userInput) => {
     for(let i = 2;i<= userInput;i++){
         if (userInput %i==0){
             console.log(i)
             userInput/=i;
         }
 }
},
/**
 * @purpose: Computes the prime Number of N using brute force..
 */
exports.primeNumber=(userInput)=>{
    for(let i=0;i<=userInput;i++){
        let count=0;
        for(let n=0;n<=i; n++){
            if(i%n==0){
                count++;      
            }
        }
            if(count==2)
                console.log(i+"")    
    }
},
/**
 * @purpose: Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N 
 */
exports.harmonic=(InputNumber)=>{
    let  sum=0;
    for(let i=1;i<=InputNumber;i++){
        sum = sum + 1/i;
    
        console.log(sum)
    }
},
/**
 * @purpose:  Print the year is a Leap Year or not.
 */
exports.leapYear=(userInput)=>{ 
    let year = userInput;
    let answer;
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        answer = "leap year";
    } else {
        answer = "Not a leap year";
    }
    console.log(answer);
},
/**
 * @purpose: Flip Coin and print percentage of Heads and Tails.
 */
exports.flipCoin=(toss)=>{
    let head=0;
    let tail=0;
   for(let i=0;i<toss;i++){
    if(Math.random()>0.5){
        head++
    } else{
        tail++
    }
}
    let headpercentage=(head*100)/toss;
    console.log(headpercentage)
    let tailpercentage=(tail*100)/toss;
     console.log(tailpercentage)
    
    
},
/**
 * @purpose: prints a table of the powers of 2 that are less than or equal to 2^N.
 */
exports.power2=(userInput)=>{
    for(let i=0;i<userInput;i++){
        if(0 <= i < 31){
            console.log(Math.pow(2,i));
        }
        
    }
}

/**
 * @purpose: User Input and Replace String Template “Hello <<UserName>>, How are you?”
 */
   exports.nameReplace=(str)=>{
       let str_length=str.length
       if(str_length>3 && str>="a" && str<="z"|| str>="A" && str<="Z" ){
           let str1="Hi <<UserName>> how r u";
           let result=str1.replace("<<UserName>>",str);
           console.log(result)
       }
           else{
               console.log("please enter the minimum character 3")

           }
       }
       
       
   
   /**
    * @purpose: Print function to print 2 Dimensional Array.
    */
   exports.array2D=()=>{
        
        let num = readline.question('Enter the ele');
        let row = readline.questionInt('row'); 
        let col = readline.questionInt('col');
        let i = 0;

        let  array2D = [[]];
        for(let r = 0; r < row; ++r)
        {
            array2D[r] = [];
             for(let c = 0; c < col; ++c)
        {
        array2D[r][c] = num[i++];
    }
}
    console.log(array2D); 
}
   /**
    * @purpose:Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0.
    */
   exports.sumOfThree=()=>{
       let arr=[4,3,6,7,-13,8]
       for(let i=0;i<arr.length;i++){
           for(let j=i+1;j<arr.length;j++){
               for(let k=j+1;k<arr.length;k++){
                   if(arr[i]+arr[j]+arr[k]==0){
                       console.log("Number of distinct triplet")    
                   }else{
                       console.log("not a distinct triplet")
                   }
               }
           }
       }
   }
   /**
    * @purpose: Write a program ​ Distance.java t ​ hat takes two integer command-line arguments x
    *           and y and prints the Euclidean distance from the point (x, y) to the origin (0, 0). The
    *           formulae to calculate distance = sqrt(x*x + y*y). Use Math.power function.
    */
   exports.distance=()=>{
       let x=readline.question("Enter the number of x")
       let y=readline.question("Enter the number of y")
       let X=Math.floor(Math.pow(x,2));
      let Y=Math.floor(Math.pow(y,2));
      let dist=Math.floor(Math.sqrt(X-Y));
       console.log("distance from (" + X+ ", " + Y+ ") to (0, 0) = " + dist);
   }
   /**
    * @purpose:Write a Program to play a Cross Game or Tic-Tac-Toe Game. Player 1 is the Computer 
    * and the Player 2 is the user. Player 1 take Random Cell that is the Column and Row.
    */
   exports.ticTaeToe=()=>{
    var readline = require('readline');


    var TicTacToe = function(readline) {
    
    /*
    * Private API
    * ------------------------------------------------------------------------
    */
    
    var _rl = null
    , _boardSize = 3
    , _boardData = {}
    , _playerMarks = ['x', 'o']
    , _players = [];
    
    _init(readline);
    
    
    /**
    * Initializes the readline interface
    * @private
    * @param {Object} Readline module
    */
    function _init(readline) {
    _rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });
    }
    
    /**
    * Builds the board data object with a 3x3 array and an array of
    * empty cells
    * @private
    */
    function _buildBoard() {
    var data = {
    board: [],
    empty: []
    };
    
    for (var i = 0; i < _boardSize; i += 1) {
    var row = [];
    
    for (var k = 0; k < _boardSize; k += 1) {
    row.push(null);
    data.empty.push(i + ' ' + k);
    }
    
    data.board.push(row);
    }
    _boardData = data;
    }
    
    /**
    * Sets the players array with the types supplied, and markers (x and o)
    * chosen at random
    * @private
    */
    function _setupPlayers(playerTypes) {
    var initialIndex = 0;
    
    if (playerTypes.length == 2) {
    initialIndex = Math.round(Math.random());
    
    _players = [
    {
    marker: _playerMarks[initialIndex],
    type: playerTypes[0]
    },
    {
    marker: _playerMarks[(!initialIndex | 0)],
    type: playerTypes[1]
    }
    ]
    }
    }
    
    /**
    * Rotates the players. Switches which player is currently active
    * @private
    */
    function _rotatePlayers() {
    _players.push( _players.shift() );
    }
    
    /**
    * Delegate getting the player's position determined by their type
    * @private
    */
    function _getPlayerMove() {
    var pos = [];
    
    if (_players[0].type == 'ai') {
    pos = _aiMove(_addPlayerToBoard);
    } else {
    pos = _getInput(_addPlayerToBoard);
    }
    }
    
    /**
    * Get the AI's position by choosing a random empty cell
    * @private
    */
    function _aiMove(callback) {
    var index = -1
    , pos = [];
    
    // Choose a random index from the available positions
    index = Math.floor(Math.random() * _boardData.empty.length - 0);
    pos = _posFromString(_boardData.empty[index]);
    
    setTimeout(function() {
    callback(pos);
    }, 1000);
    }
    
    /**
    * Get the human's position from the user input
    * @private
    */
    function _getInput(callback) {
    _rl.question('Player ' +  _players[0].marker + '\'s move (enter row column): ', function(input) {
    
    // Ensure input is an available cell
    if (_boardData.empty.indexOf(input) != -1) {
    callback(_posFromString(input));
    } else {
    _getInput(callback);
    }
    });
    }
    
    /**
    * Parse a space separate string of '[row] [column]' as a board position
    * @private
    */
    function _posFromString(str) {
    var pos = str.split(' ');
    
    pos.forEach(function(el, i, arr) {
    arr[i] = parseInt(el);
    });
    
    return pos;
    }
    
    /**
    * Add the active player to the board, print the board, and check
    * for a winner. If no winner is found, start again.
    * @private
    * @param {Array} The player's position
    */
    function _addPlayerToBoard(pos) {
    _addToBoard(_players[0], pos);
    
    console.log('\u001b[2J\u001b[0;0H');
    _printBoard();
    
    if (_boardData.empty.length == 0) {
    console.log('Draw!');
    _rl.close();
    return;
    }
    
    if (_checkBoard(_players[0])) {
    _rl.close();
    return;
    } else {
    _rotatePlayers();
    _getPlayerMove(_players[0]);
    }
    }
    
    /**
    * Mark the board with the player's position, and remove that cell
    * from the array of empty cells.
    * @private
    * @param {Object} The player to add
    * @param {Array} The player's position
    */
    function _addToBoard(player, pos) {
    var emptyIndex = -1;
    
    // Add the player's position to the board
    _boardData.board[pos[0]][pos[1]] = player.marker;
    
    // Remove this position from the array of empty cells
    emptyIndex = _boardData.empty.indexOf(pos[0] + ' ' + pos[1]);
    _boardData.empty.splice(emptyIndex, 1);
    }
    
    /**
    * Print the board
    * @private
    */
    function _printBoard() {
    var divider = '+-----------+';
    
    for (var i = 0; i < 3; i += 1) {
    console.log(divider);
    var row = '|';
    
    for (var k = 0; k < 3; k += 1) {
    if (_boardData.board[i][k])
    row += ' ' + _boardData.board[i][k] + ' |';
    else
    row += '   |';
    }
    
    console.log(row);
    }
    
    console.log(divider);
    }
    
    /**
    * Check the board to see if the player had a winning move
    * @private
    * @param {Object} The player
    */
    function _checkBoard(player) {
    var board = _boardData.board
    , playerStr = player.marker + player.marker + player.marker
    , winner = null
    , colStrs = ['', '', '']
    , diagStrs = ['', ''];
    
    for (var i = 0; i < 3; i += 1) {
    
    // Check each row for a winner
    var rowStr = board[i].join('');
    
    if (rowStr == playerStr) {
    winner = player;
    break;
    }
    
    // Build a string of column values
    for (var k = 0; k < 3; k += 1) {
    colStrs[k] += board[i][k];
    }
    
    // Build a string of diagonal values
    if (i == 0) {
    diagStrs[0] += board[i][0];
    diagStrs[1] += board[i][2];
    } else if (i == 1) {
    diagStrs[0] += board[i][1];
    diagStrs[1] += board[i][1];
    } else if (i == 2) {
    diagStrs[0] += board[i][2];
    diagStrs[1] += board[i][0];
    }
    }
    
    // Check the column strings for a winner
    if (colStrs.indexOf(playerStr) > -1) {
    winner = player;
    }
    
    // Check the diagonals for a winner
    if (diagStrs.indexOf(playerStr) > -1) {
    winner = player;
    }
    
    if (winner) {
    console.log(winner.marker + ' wins!');
    return true;
    }
    
    return false;
    
    }
    
    
    /*
    * Public API
    * ------------------------------------------------------------------------
    */
    
    return {
    
    /**
    * Start the game
    * @param {Array} A two element array of player types. Possible values
    * are 'human' or 'ai'.
    */
    start: function(playerTypes) {
    _buildBoard();
    _setupPlayers(playerTypes);
    
    if (_players[0].marker != 'x') {
    // Rotate the players so that 'x' goes first
    _rotatePlayers();
    }
    
    _getPlayerMove();
    },
    
    /**
    * Return the array of players
    */
    getPlayers: function() {
    return _players;
    }
    
    }
    };

    ticTacToe = new TicTacToe(readline)
    ticTacToe.start(['human', 'ai']);
}
    