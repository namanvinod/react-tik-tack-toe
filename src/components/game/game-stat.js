import './game-stat.css';

const GameStat = ({ squares, undoMove }) => (
    <div className="game-stat-container">
        <div className="current-game-moveset">
            <div className="title">
                Current Game Moves
            </div>
            {
                squares && squares.length > 0 ?
                    squares.map((square, idx) => (
                        <li key={idx} className="current-game-move">
                            Move {idx + 1}: {square.squareValue} played {square.index + 1}.<button onClick={() => undoMove(square.index)}>Make This Current Move</button>
                        </li>
                    ))
                    : <div className="no-moves">No moves in this game yet.</div>
            }
        </div>        
    </div>
);

export default GameStat;