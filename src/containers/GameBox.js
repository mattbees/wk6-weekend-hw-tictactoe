import React, { Component } from 'react';
import GameBoard from '../components/GameBoard';
import testWinner from '../models/test_winner';

class GameBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previousPlayer: 'O', // Needed to check winner following player toggle (async)
      currentPlayer: 'X', // Needed to post accurate player letter to cell on click
      winner: null,
      board: ['','','','','','','','','']
    };

    this.updateCell = this.updateCell.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
    this.setCurrentPlayer = this.setCurrentPlayer.bind(this);
  };

  updateCell(id) {
    // update the relevant cell of the array with the value of currentPlayer
    this.updateBoard(id);
    // check if there's a winner
    this.componentDidUpdate(this.state.board)
    // toggle currentPlayer
    this.setCurrentPlayer();
  }

  updateBoard(id) {
    const updatedBoard = [...this.state.board];
    updatedBoard[id] = this.state.currentPlayer;
    this.setState({ board: updatedBoard });
  };

  componentDidUpdate(prevProps) {
    if (this.state.board !== prevProps) {
      const result = testWinner.checkForWin(this.state.board, this.state.previousPlayer);
      return result;
      // Unable to setState to output a message based on this result as this
      // appears to be creating an infinite loop. Not sure why!
    };
  };

  setCurrentPlayer() {
    if (this.state.currentPlayer === 'X') {
      this.setState({ previousPlayer: 'X', currentPlayer: 'O' })
    } else {
      this.setState({ previousPlayer: 'O', currentPlayer: 'X' })
    };
  };

  render() {
    return (
      <>
        <h1>GameBox</h1>
        <GameBoard
          board={this.state.board}
          currentPlayer={this.state.currentPlayer}
          updateCell={this.updateCell}
          winner={this.state.winner}
        />
      </>
    )
  };
};

export default GameBox;
