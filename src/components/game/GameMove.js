import React from 'react';
import { useSelector } from 'react-redux';

const calculateSquare = (index) => `(${parseInt((index / 3), 0) + 1},${(index % 3) + 1})`;

const GameMove = ({ moveId, moveNumber, squareIndex, squareValue, undoMove }) => {
    const winner = useSelector(({ game }) => game?.currentGame?.winner);
    const canUndo = !(!!winner);

    return (
        <li key={moveId} className="current-game-move">
            {`Move ${moveNumber}: ${squareValue} played at ${calculateSquare(squareIndex)}.`}
            <button className="btn btn-outline-info" disabled={!canUndo} onClick={() => undoMove(squareIndex)}>Make This Current Move</button>
        </li>
    );
};

export default React.memo(GameMove);