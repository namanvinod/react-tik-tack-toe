const GameStat = () => (
    <div className="game-stat-container">
        <div className="current-game-moveset">
            <div className="title">
                Current Game Moves
            </div>
            {
                squares.map((square, idx) => (
                    <li className="current-game-move">
                        Move {idx + 1}. {square.squareValue} played {square.index + 1}.<button>Undo Till Move {idx + 1}</button>
                    </li>
                ))
            }
        </div>        
    </div>
);

export default GameStat;