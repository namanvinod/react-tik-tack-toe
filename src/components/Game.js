import { useState, useEffect } from "react";

import Board from "./Board";
import './Game.css';

const winningCombination = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7], [2, 5, 8], [2, 4, 6],
    [3, 4, 5], [6, 7, 8]
];

const squareInitValue = Array(9).fill(null);

const Game = () => {
    const [squares, setSquares] = useState(squareInitValue);
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [winner, setWinner] = useState(null);
    
    useEffect(() => (checkWinningConditions()), [squares]);

    const endingGame = (player = 'NONE') => (setWinner(player));
    
    const updateGameState = counter => {
        if(winner || squares[counter]) return;

        updateSquare(counter);
        updateCurrentPlayer();
    };

    const updateSquare = counter => {
        const updatedSquares = [...squares];
        updatedSquares[counter] = currentPlayer;
        setSquares(updatedSquares);
    };

    const updateCurrentPlayer = () => (setCurrentPlayer(player => player === 'X' ? 'O': 'X'));
    
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
                    endingGame(player);
                    return true;
                }
                if(!won && squares.every(square => square)) {
                    endingGame();
                    return true;
                }
                return false;
            })
        }
        return won;
    }

    const createNewGame = () => {
        resetGame();
        // TODO: CREATE NEW GAME
    };

    const resetGame = () => {
        setSquares(squareInitValue);
        setWinner('');
        setCurrentPlayer('X');
    };

    // console.log('Game: Winner', winner);
    // console.log('Game: Squares', squares.every(square => square));
    // squares.map(s=> console.log('Sq Value', s));
    return (
        <div className="game">
          <div className="game-board">
            <Board 
                squares={squares}
                squareAction={updateGameState}
            />
          </div>
          <div className="game-info">
            <div>
                {winner ? 
                        winner === 'NONE' ? 'Game is drawn': `Game is won by ${winner}`
                        : squares && squares.every(square => square) ? 
                          '': `Current Player: ${currentPlayer}`}
            </div>
            <div className="action-btn-container">
              <button onClick={createNewGame}>New Game</button>
              <button onClick={resetGame} disabled={winner}>Reset Current Game</button>
          </div>
          </div>
        </div>
    );
}

export default Game;