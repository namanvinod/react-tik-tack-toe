import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GAME_STATE, PLAYERS } from '../../core/enum';
import { winningCombination } from '../../core/initialValues';
import { addCurrentGameToGames, updateGameState } from '../../store/gameActions';
import Square from '../square/Square';
import './Board.css';

const Board = () => {
    const squares = useSelector(({ game }) => game?.currentGame?.moveSet) ?? [];
    const gameState = useSelector(({ game }) => game?.currentGame?.gameState) ?? '';
    const currentPlayer = useSelector(({ game }) => game?.currentGame?.currentPlayer) ?? '';

    const dispatch = useDispatch();

    useEffect(() => checkWinningConditions(), [squares]);

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
        const playerSquares = squares?.map(square => square && square.squareValue === player ? square.index : '').filter(String);
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

    const endingGame = player => {
        const currentGameState = player === PLAYERS.NONE ? GAME_STATE.DRAWN : GAME_STATE.WON;
        const winner = player !== PLAYERS.NONE ? player: '';
        dispatch(updateGameState({ gameState: currentGameState, winner: winner, currentPlayer: PLAYERS.NONE }));
        dispatch(addCurrentGameToGames());
    };

    const renderSquare = counter => <Square
                                        className="board-square"
                                        squareIndex={counter}
                                        squareValue={squares?.find(sq => sq.index === counter)?.squareValue}
                                    />;
    
    return (
        <div>
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
        </div>
    );
};

export default Board;