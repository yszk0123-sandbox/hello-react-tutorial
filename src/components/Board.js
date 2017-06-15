import React from 'react';
import Square from './Square';
import calculateWinnerLine from '../calculateWinnerLine';

export default class Board extends React.Component {
  renderSquare(i, winnerLine) {
    return (
      <Square
        key={i}
        value={this.props.squares[i + 1]}
        hilight={winnerLine && winnerLine.includes(i)}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const winnerLine = calculateWinnerLine(this.props.squares);

    return (
      <div>
        {[0, 1, 2].map(row =>
          <div key={row} className="board-row">
            {[0, 1, 2].map(column =>
              this.renderSquare(3 * row + column, winnerLine),
            )}
          </div>,
        )}
      </div>
    );
  }
}
