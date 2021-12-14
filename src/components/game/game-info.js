import { useSelector } from "react-redux";
import { GAME_STATE } from "../../core/enum";

const GameInfo = ({ currentPlayer, createNewGame, resetGame }) => {
    const winner = useSelector(state => state.currentGame?.winner);
    const gameState = useSelector(state => state.currentGame?.gameState);

    return (
        <div className="game-info-container">
            <div>
                {
                    gameState === GAME_STATE.DRAWN 
                        ? 'Game is drawn' 
                        : gameState === GAME_STATE.WON 
                            ? `Game is won by ${winner}`
                            : `Current Player: ${currentPlayer}`}
            </div>
            <div className="action-btn-container">
                <button onClick={createNewGame} disabled={gameState === GAME_STATE.NEW}>New Game</button>
                <button onClick={resetGame} disabled={gameState !== GAME_STATE.IN_PROGRESS}>Reset Current Game</button>
            </div>
        </div>
    );
};

export default GameInfo;