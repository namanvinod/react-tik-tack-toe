import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Square from './Square';

import { Provider } from 'react-redux';
import gameReducer from '../../store/gameReducer';
import { createStore } from 'redux';

describe('Square Load', () => {
    let container;
    beforeEach(() => {
      const store = createStore(gameReducer);
      container = mount(<Provider store={store}><Square squareAction={jest.fn()} squareValue={'O'} squareIndex={0}/></Provider>)
    });

    it('should render Square', () => {
		  expect(container.find('button').length).toEqual(1);
    });

    it('should render given value', () => {
      expect(container.find('button').text()).toEqual('O');
    });
});

describe('Square Click', () => {
  let container, spy;

  beforeEach(() => {
    spy = sinon.spy();
    const store = createStore(gameReducer);
    container = mount(<Provider store={store}><Square squareValue={'O'} squareIndex={101} squareAction={spy}/></Provider>);
  });

  it('Click Event of Square is fired when it is clicked from square', () => {
    expect(spy.notCalled).toBeTruthy();
    container.find('.square').first().simulate('click');
    expect(spy.calledOnce).toBeTruthy();
  });

  it('Click Event of Square is fired with correct param when it is clicked from square', () => {
    expect(spy.notCalled).toBeTruthy();
    container.find('.square').first().simulate('click');
    expect(spy.calledWith(101));
  });
});