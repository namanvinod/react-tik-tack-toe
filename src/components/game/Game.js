import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Board from '../board/Board';
import './Game.css';
import { gameStore } from '../../store/gameStore';
import {
    addNewGame,
    addNewMove,
    updateWinner,
    resetCurrentGame
} from '../../store/gameActions';

const winningCombination = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7], [2, 5, 8], [2, 4, 6],
    [3, 4, 5], [6, 7, 8]
];

const squareInitValue = [];

const Game = () => {
    const [squares, setSquares] = useState(squareInitValue);
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [winner, setWinner] = useState(null);
    
    const dispatch = useDispatch();

    useEffect(() => (checkWinningConditions()), [squares]);
    useEffect(() => (dispatch(updateWinner({ winner }))), [winner]);
    
    const endingGame = (player = 'NONE') => (setWinner(player));
    
    const updateGameState = counter => {
        if(winner || (squares && squares.find(sq => sq.index === counter))) return;

        updateSquare(counter);
        updateCurrentPlayer();
    };

    const createMove = () => (
        squares.map(
            ({ index, squareValue}) => ({ 
                index,
                squareValue
            })
        )
    );

    const updateSquare = index => {
        setSquares([ 
            ...squares, 
            { 
                index, 
                squareValue: currentPlayer 
            }
        ]);
    };

    const updateCurrentPlayer = () => (setCurrentPlayer(player => player === 'X' ? 'O': 'X'));
    
    const checkWinningConditions = () => {
        let won = checkWinner('X');
        if(!won) {
           won = checkWinner('O');
        }

        dispatch(addNewMove({ steps: createMove(), winner }));

        return won;
    };

    const checkWinner = (player) => {
        let won = false;
        const playerSquares = squares.map(square => square && square.squareValue === player ? square.index : '').filter(String);
        playerSquares.sort((first, second) => first - second);
        
        if(playerSquares && playerSquares.length >= 3) {
            winningCombination.some(combo => {
                won = combo.every(c => playerSquares.includes(c));     
                if(won) {
                    endingGame(player);
                    return true;
                }
                return false;
            });

            if(!won && squares && squares.length === 9) {
                endingGame();
                return true;
            }
        }
        return won;
    }

    const createNewGame = () => {
        dispatch(addNewGame(gameStore.getState().currentGame));
        resetGame();
        // TODO: CREATE NEW GAME
    };

    const resetGame = () => {
        setSquares(squareInitValue);
        setWinner('');
        setCurrentPlayer('X');
        dispatch(resetCurrentGame);        
    };

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
                        : squares && squares.length === 9 ? 
                          '': `Current Player: ${currentPlayer}`}
            </div>
            <div className="action-btn-container">
              <button onClick={createNewGame} disabled={squares && !squares.length}>New Game</button>
              <button onClick={resetGame} disabled={(squares && !squares.length) || winner}>Reset Current Game</button>
            </div>
          </div>
        </div>
    );
};

export default Game;