import { useState, useEffect } from "react";

import Board from "./Board";
import './Game.css';

const Game = () => {
    const [winner, setWinner] = useState(null);
    const onEnding = (player = 'NONE') => {
        setWinner(player);
        console.log('winner', winner);
        return;
    }

    return (
        <div className="game">
          <div className="game-board">
            <Board onEnding={onEnding}/>
          </div>
          <div className="game-info">
            <div>{winner ? 
                        winner === 'NONE' ? 'Game is drawn': `Game is won by ${winner}`
                        : ''}
            </div>
          </div>
        </div>
    );
}

export default Game;