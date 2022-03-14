import './session-stat-row.css';

const SessionStatRow = ({ text, numOfGames }) => {
    return (
        <div className="session-stat-row">
            <label>{text}:</label>
            <label>{numOfGames}</label>
        </div>
    );
};

export default SessionStatRow;