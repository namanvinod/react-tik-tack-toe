import { mount } from "enzyme";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import sinon from 'sinon';
import { GAME_STATE } from "../../core/enum";
import tickTackToeReducers, { defaultState } from "../../store/tickTackToeReducers";

import ActionBtnContainer from "./action-btn-container";

const getStore = () => createStore(tickTackToeReducers, defaultState);

describe('Action Button Container', () => {
    let container;
    const spyCreateNewGame = sinon.spy();
    const spyResetGame = sinon.spy();

    beforeEach(() => {
        container = mount(<Provider store={getStore()}><ActionBtnContainer createNewGame={spyCreateNewGame} resetGame={spyResetGame} /></Provider>);
    });

    it('should render Action Button Container Component', () => {
        expect(container.containsMatchingElement(<ActionBtnContainer />)).toBeTruthy();
    });

    it('should render 2 action buttons', () => {
        expect(container.find('.btn.btn-outline-primary').length).toEqual(2);
    });    
});

describe('Action Btn for "new" game state', () => {
    let container;
    const spyCreateNewGame = sinon.spy();
    const spyResetGame = sinon.spy();

    const state = defaultState;
    state.game.currentGame = { ...defaultState?.game?.currentGame, gameState: GAME_STATE.NEW };
    const store = createStore(tickTackToeReducers, state);
    
    beforeEach(() => {
        container = mount(<Provider store={store}><ActionBtnContainer createNewGame={spyCreateNewGame} resetGame={spyResetGame} /></Provider>);
    });

    it('should not trigger click event on createNewGame in case of "new game" state', () => {
        container.find('.btn.btn-outline-primary').first().simulate('click');
        expect(spyCreateNewGame.notCalled).toBeTruthy();
    });

    it('should not trigger click event on resetGame in case of "new game" state', () => {
        container = mount(<Provider store={store}><ActionBtnContainer createNewGame={spyCreateNewGame} resetGame={spyResetGame} /></Provider>);
        container.find('.btn.btn-outline-primary').at(1).simulate('click');
        expect(spyResetGame.notCalled).toBeTruthy();
    });
});

describe('Action Btn for "in progress" game state', () => {
    let container;
    const spyCreateNewGame = sinon.spy();
    const spyResetGame = sinon.spy();

    const state = defaultState;
    state.game.currentGame = { ...defaultState?.game?.currentGame, gameState: GAME_STATE.IN_PROGRESS };
    const store = createStore(tickTackToeReducers, state);
    
    beforeEach(() => {
        container = mount(<Provider store={store}><ActionBtnContainer createNewGame={spyCreateNewGame} resetGame={spyResetGame} /></Provider>);
    });

    it('should trigger click event on createNewGame in case of "in progress" state', () => {
        container.find('.btn.btn-outline-primary').first().simulate('click');
        expect(spyCreateNewGame.calledOnce).toBeTruthy();
    });

    it('should trigger click event on resetGame in case of "in progress" state', () => {
        container.find('.btn.btn-outline-primary').at(1).simulate('click');
        expect(spyResetGame.calledOnce).toBeTruthy();
    });
});

describe('Action Btn for "won" game state', () => {
    let container;
    const spyCreateNewGame = sinon.spy();
    const spyResetGame = sinon.spy();

    const state = defaultState;
    state.game.currentGame = { ...defaultState?.game?.currentGame, gameState: GAME_STATE.WON };
    const store = createStore(tickTackToeReducers, state);
    
    beforeEach(() => {
        container = mount(<Provider store={store}><ActionBtnContainer createNewGame={spyCreateNewGame} resetGame={spyResetGame} /></Provider>);
    });

    it('should trigger click event on createNewGame in case of "won" state', () => {
        container.find('.btn.btn-outline-primary').first().simulate('click');
        expect(spyCreateNewGame.calledOnce).toBeTruthy();
    });

    it('should not trigger click event on resetGame in case of "won" state', () => {
        container.find('.btn.btn-outline-primary').at(1).simulate('click');
        expect(spyResetGame.notCalled).toBeTruthy();
    });
});

describe('Action Btn for "drawn" game state', () => {
    let container;
    const spyCreateNewGame = sinon.spy();
    const spyResetGame = sinon.spy();

    const state = defaultState;
    state.game.currentGame = { ...defaultState?.game?.currentGame, gameState: GAME_STATE.WON };
    const store = createStore(tickTackToeReducers, state);
    
    beforeEach(() => {
        container = mount(<Provider store={store}><ActionBtnContainer createNewGame={spyCreateNewGame} resetGame={spyResetGame} /></Provider>);
    });

    it('should trigger click event on createNewGame in case of "drawn" state', () => {
        container.find('.btn.btn-outline-primary').first().simulate('click');
        expect(spyCreateNewGame.calledOnce).toBeTruthy();
    });

    it('should not trigger click event on resetGame in case of "drawn" state', () => {
        container.find('.btn.btn-outline-primary').at(1).simulate('click');
        expect(spyResetGame.notCalled).toBeTruthy();
    });
});