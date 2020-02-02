/////////////////// CONSTANTS /////////////////////////////////////
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

///////////////////// APP STATE (VARIABLES) /////////////////////////
let board;
let turn;
let win;

// ///////////////////// CACHED ELEMENT REFERENCES /////////////////////
// const squares = Array.from(document.querySelectorAll("#board div"));
// const message = document.querySelector("h2");
//
// ///////////////////// EVENT LISTENERS ///////////////////////////////
// window.onload = init;
// document.getElementById("board").onclick = takeTurn;
//
// ///////////////////// FUNCTIONS /////////////////////////////////////
// function init() {
//   board = [
//     "", "", "",
//     "", "", "",
//     "", "", ""
//   ];
//   turn = "X";
//   win = null;
//
//   render();
// }
//
// function render() {
//   board.forEach(function(mark, index) {
//     squares[index].textContent = mark;    // writes an X or an O on board
//   });
//
//   message.textContent = `Turn: ${turn}`;
// }
//
// function takeTurn(e) {
//   let index = squares.findIndex(function(square) {
//     return square === e.target;
//   });
//   board[index] = turn;
//   turn = turn === "X" ? "O" : "X";
//
//   render();
// }

// if (board[0] && board[0] === board[1] && board[1] === board[2]) {
//   win = board[0];
// } else if (board[3] && board[3] === board[4] && board[4] === board[5]) {
//   win = board[0];
// } else if (board[6] && board[6] === board[7] && board[7] === board[8]) {
//   win = board[0];
// } else if (board[0] && board[0] === board[3] && board[3] === board[6]) {
//   win = board[0];
// } else if (board[1] && board[1] === board[4] && board[4] === board[7]) {
//   win = board[0];
// } else if (board[2] && board[2] === board[5] && board[5] === board[8]) {
//   win = board[0];
// } else if (board[0] && board[0] === board[4] && board[4] === board[8]) {
//   win = board[0];
// } else if (board[2] && board[2] === board[4] && board[4] === board[6]) {
//   win = board[0];
// }

// function getWinner() {
//   let winner = null;
//
//   winningConditions.forEach(function(condition, index) {
//     if (
//       board[condition[0]] &&
//       board[condition[0]] === board[condition[1]] &&
//       board[conition[1]] === board[condition[2]]
//     ) {
//       winner = board[condition[0]];
//     }
//   });
//
//   return winner;
// }
