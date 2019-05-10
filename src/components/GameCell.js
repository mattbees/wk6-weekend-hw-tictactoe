import React, { Component } from 'react';
import './GameCell.css';

class GameCell extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.updateCell(this.props.id);
  }

  render() {
    return (
      <button className='game-cell' onClick={this.handleClick}>
        <h3>{this.props.currentPlayer}</h3>
      </button>
    )
  };

};

export default GameCell;
