import React from 'react';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CollapseRow from '../../core/components/CollapseRow';

import GameMove from './GameMove';
import './GameStat.css';

import { updateSquares, updateCurrentPlayer } from '../../store/gameActions';
import { PLAYERS } from '../../core/enum';

const GameStat = () => {
    const squares = useSelector(({ game }) => game?.currentGame?.moveSet);
    const winner = useSelector(({ game }) => game?.currentGame?.winner);
    const canUndo = !(!!winner);
    
    const [showMoves, setShowMoves] = useState(true);
    const isMoveSetAvailable = squares && squares.length > 0;

    const dispatch = useDispatch();

    const handleUndoMove = squareIndex => {
        const arrIndex = squares.findIndex(square => square.index === squareIndex);
        const updatedSquares = squares.slice(0, arrIndex + 1);
        const lastCurrentPlayer = updatedSquares[arrIndex].squareValue;
        dispatch(updateCurrentPlayer({ currentPlayer: lastCurrentPlayer === PLAYERS.X ? PLAYERS.O : PLAYERS.X }));
        dispatch(updateSquares({ squares: updatedSquares }));
    };

    return ( 
        <div className="game-stat-container">
            <div className="current-game-moveset">
                <div className="section-title">
                    Current Game Moves
                    <CollapseRow 
                        isDataAvailable={isMoveSetAvailable}
                        showData={showMoves}
                        handleToggle={(() => setShowMoves(!showMoves))}
                    />
                </div>
                {
                    showMoves && (
                        isMoveSetAvailable ?
                            <div className="current-game-moves">
                                {
                                    [...squares].reverse().map(({ index: squareIndex, squareValue }, idx) => (
                                        <GameMove
                                            key={idx}
                                            moveId={idx}
                                            moveNumber={squares.length - idx}
                                            squareIndex={squareIndex}
                                            squareValue={squareValue}
                                            undoMove={handleUndoMove}
                                            canUndo={canUndo}
                                        />
                                    ))
                                }
                            </div>
                            : <div className="no-moves">No moves in this game yet.</div>
                    )
                }
            </div>
        </div>
    );
};

export default React.memo(GameStat);