import { useState } from 'react';
import { useSelector } from 'react-redux';
import CollapseRow from '../../core/components/collapse-row';

import GameMove from './game-move';
import './game-stat.css';

const GameStat = ({ undoMove }) => {
    const squares = useSelector(({ game }) => game.currentGame?.moveSet);
    const winner = useSelector(({ game }) => game.currentGame?.winner);
    const canUndo = !(!!winner);
    
    const [showMoves, setShowMoves] = useState(true);
    const isMoveSetAvailable = squares && squares.length > 0;
    
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
                                            undoMove={undoMove}
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

export default GameStat;