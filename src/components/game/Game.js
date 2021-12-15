import { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addNewGame, updateSquares, updateGameState, updateCurrentPlayer, resetCurrentGame } from '../../store/gameActions';

import './Game.css';

import GameBoard from './game-board';
import GameInfo from './game-info';
import GameStat from './game-stat';
import ActionBtnContainer from '../action-btn-container/action-btn-container';
import SessionStat from '../session-stat/session-stat';

import { GAME_STATE, PLAYERS } from '../../core/enum';
import { winningCombination } from '../../core/initialValues';

const Game = () => {
    const squares = useSelector(state => state.currentGame?.moveSet);
    const winner = useSelector(state => state.currentGame?.winner);
    const gameState = useSelector(state => state.currentGame?.gameState);
    const currentPlayer = useSelector(state => state.currentGame?.currentPlayer);
    const currentGame = useSelector(state => state.currentGame);

    const dispatch = useDispatch();
    useEffect(() => (checkWinningConditions()), [squares]);
    
    const endingGame = player => {
        const currentGameState = player === PLAYERS.NONE ? GAME_STATE.DRAWN : GAME_STATE.WON;
        const winner = player !== PLAYERS.NONE ? player: '';
        dispatch(updateGameState({ gameState: currentGameState, winner: winner, currentPlayer: PLAYERS.NONE }));
    }
    
    const updateCurrentGame = counter => {
        if(winner || (squares && squares.find(sq => sq.index === counter))) return;

        updateSquare(counter);
        dispatch(updateCurrentPlayer({ currentPlayer: currentPlayer === PLAYERS.X ? PLAYERS.O : PLAYERS.X }));
    };

    const updateSquare = index => {
        const newSquares = [ 
            ...squares, 
            { 
                index, 
                squareValue: currentPlayer 
            }
        ];
        dispatch(updateSquares({ squares: newSquares }));
    };

    const checkWinningConditions = () => {
        if(squares && squares.length > 0 && gameState !== GAME_STATE.IN_PROGRESS) {
            dispatch(updateGameState({ gameState: GAME_STATE.IN_PROGRESS, currentPlayer: currentPlayer }));
        }

        let won = checkWinner(PLAYERS.X);
        if(!won) {
           won = checkWinner(PLAYERS.O);
        }

        if(!won && squares.length === 9) {
            endingGame(PLAYERS.NONE);
        }
    };

    const checkWinner = player => {
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

    const createNewGame = () => (dispatch(addNewGame({ ...currentGame, gameState: gameState === GAME_STATE.IN_PROGRESS ? GAME_STATE.FORFEITED : gameState })));

    const resetGame = () => (dispatch(resetCurrentGame()));

    const handleUndoMove = squareIndex => {
        const arrIndex = squares.findIndex(square => square.index === squareIndex);
        const updatedSquares = squares.slice(0, arrIndex + 1);
        const lastCurrentPlayer = updatedSquares[arrIndex].squareValue;
        dispatch(updateCurrentPlayer({ currentPlayer: lastCurrentPlayer === PLAYERS.X ? PLAYERS.O : PLAYERS.X }));
        dispatch(updateSquares({ squares: updatedSquares }));
    };

    return (
        <Fragment>
            <div className="game-container">
                <GameBoard 
                    squareAction={updateCurrentGame}
                />
                <div className="game-details-container">
                    <GameInfo />
                    <ActionBtnContainer 
                        createNewGame={createNewGame}
                        resetGame={resetGame}
                    />
                </div>             
            </div>
            <GameStat
                undoMove={handleUndoMove}
            />
            <SessionStat />
        </Fragment>
    );
};

export default Game;