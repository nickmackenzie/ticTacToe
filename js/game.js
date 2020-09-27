/*----- constants -----*/
let playerBoard = document.querySelector("#game-board");

/*----- app's state (variables) -----*/
let playerTurn = -1;
let board = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
/*----- cached element references -----*/
/*----- event listeners -----*/
playerBoard.addEventListener("click", playerClick);
/*----- functions -----*/
function playerClick(e) {
  board.forEach(function (boardSquare, idx) {
    boardSquare.forEach(function (sqaure, id) {
      console.log(sqaure);
    });
  });
  if (playerTurn === -1 && e.target.textContent === "") {
    console.log("player one turn");
    playerTurn = playerTurn + 1;
    console.log("player has clicked square ", e.target.id);
    e.target.textContent = "X";
    console.log(playerTurn);
  } else if (playerTurn === 0 && e.target.textContent === "") {
    console.log("player two turn");
    playerTurn = playerTurn - 1;
    e.target.textContent = "O";
    console.log("player has clicked square ", e.target.id);
    console.log(playerTurn);
  }
}
