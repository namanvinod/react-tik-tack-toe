import GameBoard from './game-board';
import GameInfo from './game-info';
import ActionBtnContainer from '../action-btn-container/action-btn-container';

import './game-container.css';

const GameContainer = ({ updateCurrentGame, createNewGame, resetGame }) => {
    return (
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
    );
};

export default GameContainer;