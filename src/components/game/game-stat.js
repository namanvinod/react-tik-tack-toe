import { useState } from 'react';

import GameMove from './game-move';
import './game-stat.css';

const GameStat = ({ squares, undoMove, canUndo }) => {
    const [showMoves, setShowMoves] = useState(true);
    const isMoveSet = squares && squares.length > 0;
    return ( 
        <div className="game-stat-container">
            <div className="current-game-moveset">
                <div className="title">
                    Current Game Moves
                    {
                        isMoveSet &&
                        <div 
                            className={`fas ${showMoves ? 'fa-chevron-circle-up': 'fa-chevron-circle-down'}`}
                            onClick={(() => setShowMoves(!showMoves))}
                        >
                        </div>
                    }
                </div>
                {
                    showMoves && (
                        isMoveSet ?
                            <div className="current-game-moves">
                                {
                                    [...squares].reverse().map(({ index: squareIndex, squareValue }, idx) => (
                                        <GameMove
                                            key={idx}
                                            id={idx}
                                            numOfMoves={squares.length}
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