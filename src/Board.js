import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f[0][0], f, f], [t[1][0], t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];

    for (let y = 0; y < ncols; y++) {
      let col = [];
      for (let x = 0; x < nrows; x++) {
        col.push(Math.random() < chanceLightStartsOn ? true : false);
      }
      initialBoard.push(col);
    }
    return initialBoard;
  }

  function hasWon() {
    for (let y = 0; y < ncols; y++) {
      for (let x = 0; x < nrows; x++) {
        if (board[y][x] === true) {
          return false;
        }
      }
    }
    return true;
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard

      // TODO: in the copy, flip this cell and the cells around it

      // TODO: return the copy
    });
  }

  // if the game is won, just show a winning msg & render nothing else

  // TODO

  // make table board

  //cols is an array
  function makeRows(row){
    return (
    <tr>
      {row.map(row => <Cell />)}
    </tr>
    )
  }
   
  


  // TODO
  return (
    <div className="Board">
      <table className="Board-table">
       {board.map()}
      </table>
    </div>
  );
}

/** 
<table>
  <tr> aka board[0]
    <Cell />(<td></td>) board[0][0]
    <td></td> board[0][1]
    <td></td> board[0][2]
  </tr>
  <tr> board[1]
    <td></td> board[1][0]
    <td></td> board[1][1]
    <td></td> board[1][2]
  </tr>
  <tr> board[2]
    <td></td> board[2][0]
    <td></td> board[2][1]
    <td></td> board[2][2]
  </tr>

</table>
*/

export default Board;
