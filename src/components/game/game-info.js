import { useSelector } from "react-redux";
import { GAME_STATE } from "../../core/enum";

const GameInfo = ({ createNewGame, resetGame }) => {
    const winner = useSelector(state => state.currentGame?.winner);
    const gameState = useSelector(state => state.currentGame?.gameState);
    const currentPlayer = useSelector(state => state.currentGame?.currentPlayer);

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
        </div>
    );
};

export default GameInfo;