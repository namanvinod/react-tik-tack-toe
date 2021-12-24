import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addCurrentGameToGames, updateSquares, updateGameState, updateCurrentPlayer, resetCurrentGame } from '../../store/gameActions';

import './Game.css';

import GameStat from './game-stat';
import SessionStat from '../session-stat/session-stat';
import GameContainer from './game-container';

import { GAME_STATE, PLAYERS } from '../../core/enum';
import { winningCombination } from '../../core/initialValues';

const Game = () => {
    const squares = useSelector(({ game }) => game.currentGame?.moveSet);
    const winner = useSelector(({ game }) => game.currentGame?.winner);
    const gameState = useSelector(({ game }) => game.currentGame?.gameState);
    const currentPlayer = useSelector(({ game }) => game.currentGame?.currentPlayer);

    const dispatch = useDispatch();
    useEffect(() => (checkWinningConditions()), [squares]);
    
    const endingGame = player => {
        const currentGameState = player === PLAYERS.NONE ? GAME_STATE.DRAWN : GAME_STATE.WON;
        const winner = player !== PLAYERS.NONE ? player: '';
        dispatch(updateGameState({ gameState: currentGameState, winner: winner, currentPlayer: PLAYERS.NONE }));
        dispatch(addCurrentGameToGames());
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

    const createNewGame = () => {
        if(gameState === GAME_STATE.IN_PROGRESS) {
            dispatch(updateGameState({ gameState: GAME_STATE.FORFEITED, winner: winner, currentPlayer: PLAYERS.NONE }));
            dispatch(addCurrentGameToGames());
        }
        resetGame();
    };

    const resetGame = () => (dispatch(resetCurrentGame()));

    const handleUndoMove = squareIndex => {
        const arrIndex = squares.findIndex(square => square.index === squareIndex);
        const updatedSquares = squares.slice(0, arrIndex + 1);
        const lastCurrentPlayer = updatedSquares[arrIndex].squareValue;
        dispatch(updateCurrentPlayer({ currentPlayer: lastCurrentPlayer === PLAYERS.X ? PLAYERS.O : PLAYERS.X }));
        dispatch(updateSquares({ squares: updatedSquares }));
    };

    return (
        <div className="game">
            <div>
                <GameContainer 
                    updateCurrentGame={updateCurrentGame}
                    createNewGame={createNewGame}
                    resetGame={resetGame}
                />
                <SessionStat />
            </div>
            <GameStat
                undoMove={handleUndoMove}
            />
        </div>
    );
};

export default Game;