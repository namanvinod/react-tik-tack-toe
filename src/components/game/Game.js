import './Game.css';

import GameStat from './GameStat';
import SessionStat from '../session-stat/SessionStat';
import GameContainer from './GameContainer';

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