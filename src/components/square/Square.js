import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { GAME_STATE, PLAYERS } from '../../core/enum';
import './Square.css';

const Square = ({ squareIndex, squareValue, squareAction }) => {
    const gameState = useSelector(state => state.game.currentGame?.gameState);
    const classes = classNames({
        square: true,
        'first-player': squareValue === PLAYERS.X,
        'second-player': squareValue === PLAYERS.O,
        'disabled-square': !squareValue && gameState === GAME_STATE.WON
    });

    return (
        <button className={classes} onClick={() => (squareAction(squareIndex))}>
            {squareValue}
        </button>
    );
};

export default Square;