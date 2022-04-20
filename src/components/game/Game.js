import './Game.css';

import GameStat from './game-stat';
import SessionStat from '../session-stat/session-stat';
import GameContainer from './game-container';

const Game = () => {
    return (
        <div className="game">
            <div>
                <GameContainer />
                <SessionStat />
            </div>
            <GameStat />
        </div>
    );
};

export default Game;