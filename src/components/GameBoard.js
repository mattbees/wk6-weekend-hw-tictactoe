import React from 'react';
import GameCell from './GameCell';
import './GameBoard.css';

const GameBoard = (props) => {

  const displayBoard = props.board.map((cell, index) => {
    return  <GameCell
             currentPlayer={props.currentPlayer}
             key={index}
             id={index}
             updateCell={props.updateCell}
            />
  });

  return (
    <>
      <h2>GameBoard</h2>
      <div className='game-board'>
        {displayBoard}
      </div>
    </>
  )
};

export default GameBoard;
