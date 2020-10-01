/*----- constants -----*/
let playerBoard = document.querySelector("#game-board");
let btn = document.querySelector("button")
let square = document.querySelectorAll(".square");
let winMsg = document.getElementById("winMsg")
let container = document.getElementById("container")
let playerIdicator = document.getElementById("player-turn")


/*----- app's state (variables) -----*/
let playerTurn = -1; /* I will use this as a "switch" to cycle through "X" and "O" */
let winMessage = ""
let boardArray = [   /* This array will mirror what the player is doing on the board with 1 and 2 */
  [, ,],
  [, ,],
  [, ,],
];
let clickCounter = 0; /* Using a click counter, it will see if the user
                         has clicked 9 times and if no winner 
                         has been declared, it will count as a tie */


/*----- cached element references -----*/




/*----- event listeners -----*/
playerBoard.addEventListener("click", playerClick);
btn.addEventListener("click", resetBoard)




/*----- functions -----*/
function playerClick(e) {
  let squareId = e.target.id; /* Using the target. id and the given dataset of "row", I can use these values to splice them into my boardArray*/
  let rowId = e.target.dataset.row;
  console.log(rowId, squareId);
  if (e.target.textContent == "O" || e.target.textContent == "X") { /*This is checking if the space has already been taken*/
    alert("Player has already selected this sqaure")
  }

  if (playerTurn === -1 && e.target.textContent === "") {
    playerTurn = playerTurn + 1;
    e.target.textContent = "X";
    boardArray[rowId].splice(squareId, 1, 1);
    clickCounter = clickCounter + 1
    console.log("clicked", clickCounter)
    playerIdicator.textContent = "Its Your Turn O"
    winChecker();

  } else if (playerTurn === 0 && e.target.textContent === "") {
    playerTurn = playerTurn - 1;
    e.target.textContent = "O";
    boardArray[rowId].splice(squareId, 1, 2);
    clickCounter = clickCounter + 1
    console.log("clicked", clickCounter)
    playerIdicator.textContent = "Its Your Turn X"
    winChecker()
  }
}



function winChecker() {
  for (let i = 0; i < 3; i++) { /* I made variables with possible win outcomes. Using a foor loop I can check the vertical and horizonal wins with only two variables */
    let horizonalWin = boardArray[i][0] + boardArray[i][1] + boardArray[i][2];
    let verticalWin = boardArray[0][i] + boardArray[1][i] + boardArray[2][i];
    let diagonalWinOne = boardArray[0][0] + boardArray[1][1] + boardArray[2][2]
    let diagonalWinTwo = boardArray[0][2] + boardArray[1][1] + boardArray[2][0]
    if (horizonalWin === 6 || diagonalWinOne === 6 || diagonalWinTwo === 6 || verticalWin === 6 && clickCounter < 9) {
      winMessage = "O has won"
      winMsg.append(winMessage)
      return setTimeout(resetBoard, 900)
    } else if
      (horizonalWin === 3 || diagonalWinOne === 3 || diagonalWinTwo === 3 || verticalWin === 3 && clickCounter < 9) {
      winMessage = "X has won"
      winMsg.append(winMessage)
      return setTimeout(resetBoard, 900)
    } else if (clickCounter === 9) {
      winMessage = "It's a tie"

      winMsg.append(winMessage)
      return setTimeout(resetBoard, 900)
    }

  }

}

function resetBoard(e) { /* This will reset the game, sets the array back to empty, player back to X and win message */
  for (i = 0; i < square.length; i++) {
    square[i].textContent = ""
  }
  playerTurn = -1;
  boardArray = [
    [, ,],
    [, ,],
    [, ,],
  ];
  clickCounter = 0;
  winMsg.textContent = ""
  playerIdicator.textContent = "Its Your Turn X"
}