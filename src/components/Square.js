import './Square.css'

const Square = ({ squareIndex, squareAction, squareValue }) => {
    return (
        <button className="square" onClick={() => (squareAction(squareIndex))}>
            {squareValue}
        </button>
    );
};

export default Square;