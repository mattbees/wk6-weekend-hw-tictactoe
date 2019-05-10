import React, { Component } from 'react';
import GameBoard from '../components/GameBoard';

class GameBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: 'X',
      winner: null,
      board: ['-','-','-','-','-','-','-','-','-']
    };

    this.updateCell = this.updateCell.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
    this.setCurrentPlayer = this.setCurrentPlayer.bind(this);
  };

  updateCell(id) {
    // update the relevant cell of the array with the value of currentPlayer
    this.updateBoard(id);
    // toggle currentPlayer
    this.setCurrentPlayer();
    // check if there's a winner

  }

  updateBoard() {
    const updatedBoard = [...this.state.board];
    updatedBoard[id] = this.state.currentPlayer;
    this.setState({ board: updatedBoard });
    console.log(updatedBoard);
  };

  setCurrentPlayer() {
    if (this.state.currentPlayer === 'X') {
      this.setState({ currentPlayer: 'O' })
    } else {
      
    }
  };

  render() {
    return (
      <>
        <h1>GameBox</h1>
        <GameBoard
          board={this.state.board}
          currentPlayer={this.state.currentPlayer}
          updateCell={this.updateCell}
        />
      </>
    )
  };

};

export default GameBox;
