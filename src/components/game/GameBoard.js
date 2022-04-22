import Board from '../board/Board';

const GameBoard = (props) => {
    return <div className="game-board">
        <Board { ...props } />
    </div>
};

export default GameBoard;