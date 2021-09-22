import { useState, useEffect } from 'react';

import Square from './Square';
import './Board.css';

const winningCombination = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7], [2, 5, 8], [2, 4, 6],
    [3, 4, 5], [6, 7, 8]
];

const Board = props => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState('X');
    // useEffect(() => (setSquares(updatedSquares)), [updatedSquares]);

    const renderSquare = counter => <Square
                                        squareIndex={counter}
                                        squareValue={squares[counter]}
                                        squareAction={updateGameState}
                                    />;

    const updateGameState = counter => {
        if(squares[counter]) {
            return;
        }

        updateSquare(counter);
        updateCurrentPlayer();
        // checkWinningConditions();
    };

    const updateSquare = counter => {
        let updatedSquares = [...squares];
        updatedSquares[counter] = currentPlayer;
        setSquares(updatedSquares);
        // console.log('Updating End', squares, updatedSquares);
    };

    const updateCurrentPlayer = () => (setCurrentPlayer(currentPlayer === 'X' ? 'O': 'X'));
    
    const checkWinningConditions = () => {
        const playerSquares = squares.map((item, index) => item === currentPlayer ? index : '').filter(String);
        
        if(playerSquares && playerSquares.length >= 3) {
            winningCombination.some(combo => {
                const isWon = combo.every(c => playerSquares.includes(c));     
                if(isWon) {
                    props.onEnding(currentPlayer);
                    return true;
                }
                if(squares.every(square => square)) {
                    props.onEnding();
                    return true;
                }
                return false;
            })
        }
    };

    checkWinningConditions();

    return (
        <div>
            <div className="status">{squares.every(square => square) ? '': `Current Player: ${currentPlayer}`}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            Squares: {squares}
        </div>
    );
};

export default Board;