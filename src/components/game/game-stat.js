import './game-stat.css';

const calculateSquare = (index) => `(${parseInt((index/3), 0) + 1},${(index%3) + 1})`;

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
                                <li key={idx} className="current-game-move">
                                    {`Move ${squares.length - idx}: ${squareValue} played at ${calculateSquare(squareIndex)}.`}
                                    <button onClick={() => undoMove(squareIndex)}>Make This Current Move</button>
                                </li>
                            ))}
                    </div>
                    : <div className="no-moves">No moves in this game yet.</div>
            }
        </div>        
    </div>
);

export default GameStat;