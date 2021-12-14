import { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { gameStore } from '../../store/gameStore';
import {
    addNewGame,
    addNewMove,
    updateGameState,
    updateCurrentPlayer,
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

    const dispatch = useDispatch();

    useEffect(() => (checkWinningConditions()), [squares]);
    
    const winner = useSelector(state => state.currentGame?.winner);
    const gameState = useSelector(state => state.currentGame?.gameState);
    const currentPlayer = useSelector(state => state.currentGame?.currentPlayer);
    const currentGame = useSelector(state => state.currentGame);

    const endingGame = (player = PLAYERS.NONE) => {
        const currentGameState = player === PLAYERS.NONE ? GAME_STATE.DRAWN : GAME_STATE.WON;
        const winner = player !== PLAYERS.NONE ? player: '';
        dispatch(updateGameState({ gameState: currentGameState, winner: winner }));
    }
    
    const updateCurrentGame = counter => {
        if(winner || (squares && squares.find(sq => sq.index === counter))) return;

        updateSquare(counter);
        dispatch(updateCurrentPlayer({ currentPlayer: PLAYERS.X ? PLAYERS.O : PLAYERS.X }));
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

    const checkWinningConditions = () => {
        dispatch(addNewMove({ moveSet: createMoveSet() }));
        
        if(squares && squares.length > 0 && gameState !== GAME_STATE.IN_PROGRESS) {
            dispatch(updateGameState({ gameState: GAME_STATE.IN_PROGRESS }));
        }

        let won = checkWinner(PLAYERS.X);
        if(!won) {
           won = checkWinner(PLAYERS.O);
        }

        if(!won && squares.length === 9) {
            endingGame();
        }
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
        dispatch(resetCurrentGame);        
    };

    const handleUndoMove = (squareIndex) => {
        const arrIndex = squares.findIndex(square => square.index === squareIndex);
        const updatedSquares = squares.slice(0, arrIndex + 1);
        const lastCurrentPlayer = updatedSquares[arrIndex].squareValue;
        dispatch(updateCurrentPlayer({ currentPlayer: currentPlayer === PLAYERS.X ? PLAYERS.O : PLAYERS.X }));
        setSquares(updatedSquares);
    };

    return (
        <Fragment>
            <div className="game-container">
                <GameBoard 
                    squares={squares}
                    squareAction={updateCurrentGame}
                />
                <GameInfo
                    createNewGame={createNewGame}
                    resetGame={resetGame}
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