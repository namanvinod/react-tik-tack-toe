import './Square.css'

const Square = ({ squareIndex, squareValue, squareAction }) => {
    return (
        <button className={`square ${squareValue ? squareValue === 'X' ? 'first-player' : 'second-player' : ''}`} onClick={() => (squareAction(squareIndex))}>
            {squareValue}
        </button>
    );
};

export default Square;