import React from 'react';
import './SessionStatRow.css';

const SessionStatRow = ({ text, numOfGames }) => {
    return (
        <div className="session-stat-row">
            <label>{text}:</label>
            <label>{numOfGames}</label>
        </div>
    );
};

export default React.memo(SessionStatRow);