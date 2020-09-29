/*----- constants -----*/
let playerBoard = document.querySelector("#game-board");
let btn = document.querySelector("button")
let square = document.querySelectorAll(".square");
let winMsg = document.getElementById("winMsg")
/*----- app's state (variables) -----*/
let playerTurn = -1;
let boardArray = [
  [, ,],
  [, ,],
  [, ,],
];

/*----- cached element references -----*/
/*----- event listeners -----*/
playerBoard.addEventListener("click", playerClick);
btn.addEventListener("click", resetBoard)
/*----- functions -----*/
function playerClick(e) {
  let squareId = e.target.id;
  let rowId = e.target.dataset.row;
  console.log(rowId, squareId);
  if (e.target.textContent == "O" || e.target.textContent == "X") {
    console.log("already taken");
    return;
  }
  if (playerTurn === -1 && e.target.textContent === "") {
    playerTurn = playerTurn + 1;
    e.target.textContent = "X";
    boardArray[rowId].splice(squareId, 1, 1);
    console.log(boardArray);
    myFunction();
  } else if (playerTurn === 0 && e.target.textContent === "") {
    playerTurn = playerTurn - 1;
    e.target.textContent = "O";
    boardArray[rowId].splice(squareId, 1, 2);
    myFunction()
  }
}



function myFunction() {
  for (let i = 0; i < 3; i++) {
    let horizonalWin = boardArray[i][0] + boardArray[i][1] + boardArray[i][2];
    let verticalWin = boardArray[0][i] + boardArray[1][i] + boardArray[2][i];
    let diagonalWinOne = boardArray[0][0] + boardArray[1][1] + boardArray[2][2]
    let diagonalWinTwo = boardArray[0][2] + boardArray[1][1] + boardArray[2][0]
    if (horizonalWin === 6 || diagonalWinOne === 6 || diagonalWinTwo === 6 || verticalWin === 6) {
      winMessage = "O has won"
      winMsg.append(winMessage)
      return;
    } else if
      (horizonalWin === 3 || diagonalWinOne === 3 || diagonalWinTwo === 3 || verticalWin === 3) {
      winMessage = "x has won"
      winMsg.append(winMessage)
      return
    }
  }
}

function resetBoard(e) {
  e.preventDefault()

  for (i = 0; i < square.length; i++) {
    square[i].textContent = ""
  }
  playerTurn = -1;
  boardArray = [
    [, ,],
    [, ,],
    [, ,],
  ];
  winMsg.textContent = ""
}