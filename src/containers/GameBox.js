import React, { Component } from 'react';
import GameBoard from '../components/GameBoard';

class GameBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: null,
      winner: null,
      board: ['-','-','-','-','-','-','-','-','-']
    };

  };

  render() {
    return (
      <>
        <h1>GameBox</h1>
        <GameBoard board={this.state.board} currentPlayer={this.state.currentPlayer} />
      </>
    )
  };

};

export default GameBox;
