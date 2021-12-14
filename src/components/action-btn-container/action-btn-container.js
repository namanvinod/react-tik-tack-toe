import { useSelector } from 'react-redux';

import { GAME_STATE } from '../../core/enum';

import './action-btn-container.css';

const ActionBtnContainer = ({ createNewGame, resetGame }) => {
    const gameState = useSelector(state => state.currentGame?.gameState);
    
    return (
        <div className="action-btn-container">
            <button onClick={createNewGame} disabled={gameState === GAME_STATE.NEW}>New Game</button>
            <button onClick={resetGame} disabled={gameState !== GAME_STATE.IN_PROGRESS}>Reset Current Game</button>
        </div>
    );
};

export default ActionBtnContainer;