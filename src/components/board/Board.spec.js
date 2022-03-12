import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Board from './Board';
import Square from '../square/Square';

import { Provider } from 'react-redux';
import gameReducer from '../../store/gameReducer';
import { createStore } from 'redux';

describe('Board', () => {
    let container;
    beforeEach(() => {
      const store = createStore(gameReducer);
      container = mount(<Provider store={store}> <Board squareAction={jest.fn()}/> </Provider>);
    });

    it('should render Board', () => {
      expect(container.containsMatchingElement(<Square />)).toBeTruthy();  
    });

    it('should render 9 squares', () => {
      expect(container.find('.board-square').length).toEqual(9);
    });
});

describe('mounted Board', () => {
  let container;
  const spy = sinon.spy();

  beforeEach(() => { 
    const store = createStore(gameReducer);
    container = mount(<Provider store={store}> <Board squareAction={spy}/> </Provider>);
  });

  it('Click Event of Square is fired when it is clicked', () => {
    expect(spy.notCalled).toBeTruthy();
    container.find('.square').first().simulate('click');
    expect(spy.calledOnce).toBeTruthy();
  });
});