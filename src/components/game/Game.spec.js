import React from 'react';

import { mount } from 'enzyme';

import Game from './Game';
import Board from '../board/Board';
import { GAME_STATE, PLAYERS } from '../../core/enum';

import { Provider } from 'react-redux';
import gameReducer, { gameStoreInitValue } from '../../store/gameReducer';
import { createStore } from 'redux';
import tickTackToeReducers, { defaultState } from '../../store/tickTackToeReducers';

const getStore = () => createStore(tickTackToeReducers, defaultState);

describe('Game', () => {
    let container;
    beforeEach(() => container = mount(<Provider store={getStore()}><Game /></Provider>));

    it('should render Board', () => {
		  expect(container.containsMatchingElement(<Board />)).toBeTruthy();
    });
});

describe('Game Load', () => {
  let gameInfo;
  
  beforeEach(() => {
    const container = mount(<Provider store={getStore()}><Game /></Provider>);
    gameInfo = container.find('.game-info-container');
  });

  it('displays the value of current player correctly when board loads', () => {  
    expect(gameInfo.text()).toEqual('Current Player: X');
  });
});

describe('Game Play', () => {
  let container, firstBoardRow, firstSquare, secondSquare, gameInfo;
  
  beforeEach(() => {
    container = mount(<Provider store={getStore()}><Game /></Provider>);
    firstBoardRow = container.find('.board-row').first();
    firstSquare = firstBoardRow.find('.square').first();
    secondSquare = firstBoardRow.find('.square').at(1);
    gameInfo = container.find('.game-info-container');
  });

  it('updates the value of first square when it is clicked', () => {  
    console.log('Before Click');
    firstSquare.simulate('click');
    console.log('After Click');
    expect(firstSquare.text()).toEqual('X');
  });

  it('updates the background of first square when it is clicked', () => {  
    expect(container.find('.board-row').first().find('.square').first().hasClass('first-player')).toBeFalsy();
    firstSquare.simulate('click');
    expect(container.find('.board-row').first().find('.square').first().hasClass('first-player')).toBeTruthy();
    expect(container.find('.board-row').first().find('.square').first().hasClass('second-player')).toBeFalsy();
  });

  it('updates the value of current player when it is clicked', () => {  
    firstSquare.simulate('click');
    expect(gameInfo.text()).toEqual('Current Player: O');
  });

  it('updates the value of first two squares when clicked', () => {  
    firstSquare.simulate('click');
    secondSquare.simulate('click');
    expect(firstSquare.text()).toEqual('X');
    expect(secondSquare.text()).toEqual('O');
  });

  it('updates the background of first two squares when clicked', () => {  
    expect(container.find('.board-row').first().find('.square').some('.first-player')).toBeFalsy();
    expect(container.find('.board-row').first().find('.square').some('.second-player')).toBeFalsy();
    
    firstSquare.simulate('click');
    secondSquare.simulate('click');

    expect(container.find('.board-row').first().find('.square').first().hasClass('first-player')).toBeTruthy();
    expect(container.find('.board-row').first().find('.square').first().hasClass('second-player')).toBeFalsy();

    expect(container.find('.board-row').first().find('.square').at(1).hasClass('first-player')).toBeFalsy();
    expect(container.find('.board-row').first().find('.square').at(1).hasClass('second-player')).toBeTruthy();
  });

  it('updates the value of current player when two squares are clicked', () => {  
    firstSquare.simulate('click');
    secondSquare.simulate('click');
    expect(gameInfo.text()).toEqual('Current Player: X');
  });
});