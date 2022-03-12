import { useSelector } from "react-redux";
import { GAME_STATE } from "../../core/enum";

const GameInfo = ({ createNewGame, resetGame }) => {
    const winner = useSelector(({ game }) => game?.currentGame?.winner);
    const gameState = useSelector(({ game }) => game?.currentGame?.gameState);
    const currentPlayer = useSelector(({ game }) => game?.currentGame?.currentPlayer);

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