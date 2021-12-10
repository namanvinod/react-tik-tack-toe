import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Board from './Board';
import './Game.css';
import { gameStore } from '../store/gameStore';

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
    
    const dispatch = useDispatch();

    useEffect(() => (checkWinningConditions()), [squares]);
    useEffect(() => (dispatch({ type: 'UPDATE_WINNER', payload: { winner }})), [winner]);
    
    const endingGame = (player = 'NONE') => (setWinner(player));
    
    const updateGameState = counter => {
        if(winner || squares[counter]) return;

        updateSquare(counter);
        updateCurrentPlayer();
    };

    const createMove = () => {
        return squares
                .map((squareValue, index) => ({ 
                    index,
                    squareValue
                }))
                .filter(sq => sq.squareValue); 
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

        dispatch({ type: 'ADD_NEW_MOVE', payload: { steps: createMove(), winner }});

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
        dispatch({ type: 'ADD_NEW_GAME', payload: gameStore.getState().currentGame });
        resetGame();
        // TODO: CREATE NEW GAME
    };

    const resetGame = () => {
        setSquares(squareInitValue);
        setWinner('');
        setCurrentPlayer('X');
        dispatch({ type: 'RESET_CURRENT_GAME' });        
    };

    // console.log('Game: Winner', winner);
    console.log('Game: State', gameStore.getState());
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