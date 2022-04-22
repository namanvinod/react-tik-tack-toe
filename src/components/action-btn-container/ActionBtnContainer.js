import { useDispatch, useSelector } from 'react-redux';

import { GAME_STATE, PLAYERS } from '../../core/enum';
import { addCurrentGameToGames, resetCurrentGame, updateGameState } from '../../store/gameActions';

import './ActionBtnContainer.scss';

const ActionBtnContainer = () => {
    const gameState = useSelector(({ game }) => game?.currentGame?.gameState);
    const winner = useSelector(({ game }) => game?.currentGame?.winner) ?? '';
    const dispatch = useDispatch();
    
    const createNewGame = () => {
        if(gameState === GAME_STATE.IN_PROGRESS) {
            dispatch(updateGameState({ gameState: GAME_STATE.FORFEITED, winner: winner, currentPlayer: PLAYERS.NONE }));
            dispatch(addCurrentGameToGames());
        }
        resetGame();
    };

    const resetGame = () => (dispatch(resetCurrentGame()));
    
    return (
        <div className="action-btn-container">
            <button className="btn btn-outline-primary btn-create" onClick={createNewGame} disabled={gameState === GAME_STATE.NEW}>New Game</button>
            <button className="btn btn-outline-primary btn-reset" onClick={resetGame} disabled={gameState !== GAME_STATE.IN_PROGRESS}>Reset Current Game</button>
        </div>
    );
};

export default ActionBtnContainer;