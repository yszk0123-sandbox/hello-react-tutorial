import React from 'react';
import Square from './Square';

export default class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        {[0, 1, 2].map(row =>
          <div key={row} className="board-row">
            {[0, 1, 2].map(column => this.renderSquare(3 * row + column))}
          </div>,
        )}
      </div>
    );
  }
}
