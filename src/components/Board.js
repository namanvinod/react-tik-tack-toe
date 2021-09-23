import { useState, useEffect } from 'react';

import Square from './Square';
import './Board.css';

const winningCombination = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7], [2, 5, 8], [2, 4, 6],
    [3, 4, 5], [6, 7, 8]
];

const Board = props => {
    const initSquares = Array(9).fill(null);
    const [squares, setSquares] = useState(initSquares);
    const [currentPlayer, setCurrentPlayer] = useState('X');

    let updatedSquares = initSquares;

    useEffect(() => (checkWinningConditions()), [squares]);

    const renderSquare = counter => <Square
                                        squareIndex={counter}
                                        squareValue={squares[counter]}
                                        squareAction={updateGameState}
                                    />;

    const updateGameState = counter => {
        if(checkWinningConditions() || squares[counter]) {
            return;
        }

        updateSquare(counter);
        updateCurrentPlayer();
    };

    const updateSquare = counter => {
        updatedSquares = [...squares];
        updatedSquares[counter] = currentPlayer;
        setSquares(updatedSquares);
    };

    const updateCurrentPlayer = () => (setCurrentPlayer(currentPlayer === 'X' ? 'O': 'X'));
    
    const checkWinningConditions = () => {
        let won = checkWinner('X');
        if(!won) {
           won = checkWinner('O');
        }
        return won;
    };

    const checkWinner = (player) => {
        let won = false;
        const playerSquares = squares.map((item, index) => item === player ? index : '').filter(String);
        if(playerSquares && playerSquares.length >= 3) {
            winningCombination.some(combo => {
                won = combo.every(c => playerSquares.includes(c));     
                if(won) {
                    props.onEnding(player);
                    return true;
                }
                if(!won && squares.every(square => square)) {
                    props.onEnding();
                    return true;
                }
                return false;
            })
        }
        return won;
    }
    
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