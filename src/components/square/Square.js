import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { GAME_STATE, PLAYERS } from '../../core/enum';
import './Square.css';

import { updateSquares, updateCurrentPlayer } from '../../store/gameActions';

const Square = ({ squareIndex, squareValue }) => {
    const gameState = useSelector(state => state?.game?.currentGame?.gameState);
    const squares = useSelector(state => state?.game?.currentGame?.moveSet);
    const winner = useSelector(({ game }) => game?.currentGame?.winner) ?? '';
    const currentPlayer = useSelector(({ game }) => game?.currentGame?.currentPlayer) ?? '';

    const dispatch = useDispatch();

    const updateCurrentGame = counter => {
        if(winner || (squares && squares.find(sq => sq.index === counter))) return;

        updateSquare(counter);
        dispatch(updateCurrentPlayer({ currentPlayer: currentPlayer === PLAYERS.X ? PLAYERS.O : PLAYERS.X }));
    };

    const updateSquare = index => {
        const newSquares = [ 
            ...squares, 
            { 
                index, 
                squareValue: currentPlayer 
            }
        ];
        dispatch(updateSquares({ squares: newSquares }));
    };

    const classes = classNames({
        square: true,
        'first-player': squareValue === PLAYERS.X,
        'second-player': squareValue === PLAYERS.O,
        'disabled-square': !squareValue && gameState === GAME_STATE.WON
    });

    return (
        <button className={classes} onClick={() => updateCurrentGame(squareIndex)}>
            {squareValue}
        </button>
    );
};

export default React.memo(Square);