import { useSelector } from 'react-redux';

import { GAME_STATE } from '../../core/enum';

import './action-btn-container.scss';

const ActionBtnContainer = ({ createNewGame, resetGame }) => {
    const gameState = useSelector(({ game }) => game.currentGame?.gameState);
    
    return (
        <div className="action-btn-container">
            <button className="btn btn-outline-primary" onClick={createNewGame} disabled={gameState === GAME_STATE.NEW}>New Game</button>
            <button className="btn btn-outline-primary" onClick={resetGame} disabled={gameState !== GAME_STATE.IN_PROGRESS}>Reset Current Game</button>
        </div>
    );
};

export default ActionBtnContainer;