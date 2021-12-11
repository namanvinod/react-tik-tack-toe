import Square from './Square';
import './Board.css';

const Board = ({ squares, squareAction }) => {
    const renderSquare = counter => <Square
                                        className="board-square"
                                        squareIndex={counter}
                                        squareValue={squares.find(sq => sq.index === counter)?.squareValue}
                                        squareAction={squareAction}
                                    />;
    
    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
};

export default Board;