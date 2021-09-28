import './Square.css'

const Square = ({ squareIndex, squareValue, squareAction }) => {
    return (
        <button className="square" onClick={() => (squareAction(squareIndex))}>
            {squareValue}
        </button>
    );
};

export default Square;