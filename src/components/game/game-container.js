import GameBoard from './game-board';
import GameInfo from './game-info';
import ActionBtnContainer from '../action-btn-container/action-btn-container';

import './game-container.css';

const GameContainer = () => {
    return (
        <div className="game-container">
            <GameBoard />
            <div className="game-details-container">
                <GameInfo />
                <ActionBtnContainer />
            </div>
        </div>
    );
};

export default GameContainer;