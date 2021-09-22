const Square = props => {
    return (
        <button className="square" onClick={() => props.squareAction(props.squareIndex)}>
            {props.squareValue}
        </button>
    );
};

export default Square;