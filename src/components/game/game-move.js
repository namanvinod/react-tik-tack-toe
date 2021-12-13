const calculateSquare = (index) => `(${parseInt((index/3), 0) + 1},${(index%3) + 1})`;

const GameMove = ({ id, numOfMoves, squareIndex, squareValue, undoMove, canUndo }) => (
    <li key={id} className="current-game-move">
        {`Move ${numOfMoves - id}: ${squareValue} played at ${calculateSquare(squareIndex)}.`}
        <button disabled={!canUndo} onClick={() => undoMove(squareIndex)}>Make This Current Move</button>
    </li>
);

export default GameMove;