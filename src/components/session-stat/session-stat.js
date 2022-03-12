import { useState } from 'react';
import { useSelector } from 'react-redux';
import { GAME_STATE, PLAYERS } from '../../core/enum';

import CollapseRow from '../../core/components/collapse-row';
import SessionStatRow from './session-stat-row';

import './session-stat.css';

const SessionStat = () => {
    const [showStats, setShowStates] = useState(true);

    const games = (useSelector(state => state?.game?.games)) ?? [];
    const gamesWonByX = games.filter(game => game.winner === PLAYERS.X);
    const gamesWonByO = games.filter(game => game.winner === PLAYERS.O);
    const gamesDrawn = games.filter(game => game.gameState === GAME_STATE.DRAWN);
    const gamesForfeited = games.filter(game => game.gameState === GAME_STATE.FORFEITED);

    const isDataAvailable = games && games.length > 0;

    const populateGameDetails = (text, numOfGames,  gameData) => ({  text, numOfGames,  gameData });

    const sessionStats = [
        populateGameDetails('Total Games', games.length),
        populateGameDetails('Total Games Won By X', gamesWonByX.length),
        populateGameDetails('Total Games Won By O', gamesWonByO.length),
        populateGameDetails('Total Games Drawn', gamesDrawn.length),
        populateGameDetails('Total Games Forfeited', gamesForfeited.length) 
    ];

    return (
        <div className="session-stat-container">
            <div className="section-title">
                Current Session Stat
                <CollapseRow
                    isDataAvailable={isDataAvailable}
                    showData={showStats}
                    handleToggle={() => setShowStates(!showStats)}
                />
            </div>
            {
                isDataAvailable && showStats && sessionStats.map((game, idx) => (
                    <SessionStatRow
                        key={idx}
                        text={game.text}
                        numOfGames={game.numOfGames}
                    />
                ))
            }
            {
                !isDataAvailable && <div className="no--collapsable-data">No stats in this session yet.</div>
            }
        </div>
    );
};

export default SessionStat;