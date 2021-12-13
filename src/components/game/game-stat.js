import GameMove from './game-move';
import './game-stat.css';

const GameStat = ({ squares, undoMove }) => (
    <div className="game-stat-container">
        <div className="current-game-moveset">
            <div className="title">
                Current Game Moves
            </div>
            {
                squares && squares.length > 0 ?
                    <div className="current-game-moves">
                        {
                            [...squares].reverse().map(({ index: squareIndex, squareValue }, idx) => (
                                <GameMove 
                                    id={idx}
                                    numOfMoves={squares.length}
                                    squareIndex={squareIndex}
                                    squareValue={squareValue}
                                    undoMove={undoMove}
                                    canUndo
                                />
                            ))
                        }
                    </div>
                    : <div className="no-moves">No moves in this game yet.</div>
            }
        </div>        
    </div>
);

export default GameStat;