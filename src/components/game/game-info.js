const GameInfo = ({ winner, squares, currentPlayer, createNewGame, resetGame }) => (
    <div className="game-info-container">
        <div>
            {winner ? 
                    winner === 'NONE' ? 'Game is drawn': `Game is won by ${winner}`
                    : squares && squares.length === 9 ? 
                        '': `Current Player: ${currentPlayer}`}
        </div>
        <div className="action-btn-container">
            <button onClick={createNewGame} disabled={squares && !squares.length}>New Game</button>
            <button onClick={resetGame} disabled={(squares && !squares.length) || winner}>Reset Current Game</button>
        </div>
    </div>
);

export default GameInfo;