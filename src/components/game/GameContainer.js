import GameBoard from './GameBoard';
import GameInfo from './GameInfo';
import ActionBtnContainer from '../action-btn-container/ActionBtnContainer';

import './GameContainer.css';

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