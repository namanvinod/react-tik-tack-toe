import { useSelector } from 'react-redux';
import { GAME_STATE, PLAYERS } from '../../core/enum';
import './session-stat.css';

const SessionStat = () => {
    const games = (useSelector(state => state.games)) ?? [];
    const gamesWonByX = games.filter(game => game.winner === PLAYERS.X);
    const gamesWonByO = games.filter(game => game.winner === PLAYERS.O);
    const gamesDrawn = games.filter(game => game.gameState === GAME_STATE.DRAWN);
    const gamesForfeited = games.filter(game => game.gameState === GAME_STATE.FORFEITED);

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
            </div>
            <div className="session-stat-row">
                <label>Total Games: </label>
                <label>{games.length}</label>
            </div>
            <div className="session-stat-row">
                <label>Total Games Won By X: </label>
                <label>{gamesWonByX.length}</label>
            </div>
            <div className="session-stat-row">
                <label>Total Games WON by O: </label>
                <label>{gamesWonByO.length}</label>
            </div>
            <div className="session-stat-row">
                <label>Total Games Drawn: </label>
                <label>{gamesDrawn.length}</label>
            </div>
            <div className="session-stat-row">
                <label>Total Games Forfeited: </label>
                <label>{gamesForfeited.length}</label>
            </div>
        </div>
    );
};

export default SessionStat;