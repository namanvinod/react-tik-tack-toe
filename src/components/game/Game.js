import { useState, useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';

import { gameStore } from '../../store/gameStore';
import {
    addNewGame,
    addNewMove,
    updateWinner,
    resetCurrentGame
} from '../../store/gameActions';

import './Game.css';

import GameBoard from './game-board';
import GameInfo from './game-info';
import GameStat from './game-stat';

import {
    GAME_STATE,
    PLAYERS
} from '../../core/enum';
import {
    winningCombination,
    squareInitValue,
    currentPlayerInitValue
} from '../../core/initialValues';

const Game = () => {
    const [squares, setSquares] = useState(squareInitValue);
    const [currentPlayer, setCurrentPlayer] = useState(currentPlayerInitValue);
    const [winner, setWinner] = useState(null);
    
    const dispatch = useDispatch();

    useEffect(() => (checkWinningConditions()), [squares]);
    useEffect(() => (dispatch(updateWinner({ winner }))), [winner]);
    
    const endingGame = (player = PLAYERS.NONE) => (setWinner(player));
    
    const updateGameState = counter => {
        if(winner || (squares && squares.find(sq => sq.index === counter))) return;

        updateSquare(counter);
        updateCurrentPlayer();
    };

    const createMoveSet = () => (
        squares.map(
            ({ index, squareValue }) => ({ 
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

    const updateCurrentPlayer = () => (setCurrentPlayer(player => player === PLAYERS.X? PLAYERS.O: PLAYERS.X));

    const checkWinningConditions = () => {
        let won = checkWinner(PLAYERS.X);
        if(!won) {
           won = checkWinner(PLAYERS.O);
        }

        if(!won && squares.length === 9) {
            endingGame();
        }

        dispatch(addNewMove({ moveSet: createMoveSet(), winner }));
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
        }

        return won;
    };

    const createNewGame = () => {
        dispatch(addNewGame(gameStore.getState().currentGame));
        resetGame();
    };

    const resetGame = () => {
        setSquares(squareInitValue);
        setWinner('');
        setCurrentPlayer(currentPlayerInitValue);
        dispatch(resetCurrentGame);        
    };

    const handleUndoMove = (squareIndex) => {
        const arrIndex = squares.findIndex(square => square.index === squareIndex);
        const updatedSquares = squares.slice(0, arrIndex + 1);
        const lastCurrentPlayer = updatedSquares[arrIndex].squareValue;
        setCurrentPlayer( lastCurrentPlayer === PLAYERS.X? PLAYERS.O: PLAYERS.X);
        setSquares(updatedSquares);
    };

    return (
        <Fragment>
            <div className="game-container">
                <GameBoard 
                    squares={squares}
                    squareAction={updateGameState}
                />
                <GameInfo
                    { ...{ winner, squares, currentPlayer, createNewGame, resetGame } }
                />
            </div>
            <GameStat
                squares={squares}
                undoMove={handleUndoMove}
                canUndo={!(!!winner)}
            />
        </Fragment>
    );
};

export default Game;