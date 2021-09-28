import React from 'react';

import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Game from './Game';
import Board from './Board';

describe('Game', () => {
    let container;
    beforeEach(() => (container = shallow(<Game />)));

    it('should render Board', () => {
		  expect(container.containsMatchingElement(<Board />)).toBeTruthy();
    });
});

describe('Game Load', () => {
  let gameInfo;
  
  beforeEach(() => {
    const container = shallow(<Game />);
    gameInfo = container.find('.game-info');
  });

  it('displays the value of current player correctly when board loads', () => {  
    expect(gameInfo.text()).toEqual('Current Player: X');
  });
});

describe('Game Play', () => {
  let container, firstSquare, secondSquare, gameInfo;
  
  beforeEach(() => {
    container = mount(<Game />);
    firstSquare = container.find('.board-row').first().find('.square').first();
    secondSquare = container.find('.board-row').first().find('.square').at(2);
    gameInfo = container.find('.game-info');
  });

  it('updates the value of first square when it is clicked', () => {  
    firstSquare.simulate('click');
    expect(firstSquare.text()).toEqual('X');
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

  it('updates the value of current player when two squares are clicked', () => {  
    firstSquare.simulate('click');
    secondSquare.simulate('click');
    expect(gameInfo.text()).toEqual('Current Player: X');
  });
});