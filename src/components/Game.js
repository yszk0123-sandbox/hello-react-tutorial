import React from 'react';
import Board from './Board';
import calculateWinnerLine from '../calculateWinnerLine';
import './Game.css';

function calculateWinner(squares) {
  const winnerLine = calculateWinnerLine(squares);

  return winnerLine ? squares[winnerLine[0]] : null;
}

function getPosition(squaresA, squaresB) {
  for (let i = 0; i < squaresA.length; i += 1) {
    if (squaresA[i] !== squaresB[i]) {
      return [i % 3, Math.floor(i / 3)];
    }
  }
  throw new Error('Invalid format');
}

function getDesc(history, move) {
  if (!move) {
    return 'Game start';
  }

  const [x, y] = getPosition(history[move - 1].squares, history[move].squares);

  return `Move #${move} (${x + 1}, ${y + 1})`;
}

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      isReverse: false,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'O' : 'X';
    this.setState({
      history: history.concat([{ squares }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  handleSort() {
    this.setState({
      isReverse: !this.state.isReverse,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 ? false : true,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    let moves = history.map((step, move) => {
      const desc = getDesc(history, move);

      return (
        <li key={move}>
          <a
            href="#"
            onClick={() => this.jumpTo(move)}
            style={{
              fontWeight: move === this.state.stepNumber ? 'bold' : undefined,
            }}
          >
            {desc}
          </a>
        </li>
      );
    });
    if (this.state.isReverse) {
      moves.reverse();
    }

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    const sortOrderButton = (
      <button onClick={() => this.handleSort()}>
        {this.state.isReverse ? '△' : '▽'}
      </button>
    );

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status} {sortOrderButton}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
