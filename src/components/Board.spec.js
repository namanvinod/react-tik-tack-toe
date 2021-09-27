import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Board from './Board';
import Square from './Square';

describe('Board', () => {
    let container;
    beforeEach(() => (container = shallow(<Board squares={[]} squareAction={jest.fn()}/>)));

    it('should render Board', () => {
		  expect(container.containsMatchingElement(<Square />)).toBeTruthy(); 
    });

    it('should render 9 squares', () => {
      expect(container.find('.square').length).toEqual(9);
    });
});

describe('mounted Board', () => {
  let container;
  const spy = sinon.spy();

  beforeEach(() => (container = mount(<Board squares={[]} squareAction={spy}/>)));

  it('Click Event of Square is fired when it is clicked', () => {
    expect(spy.notCalled).toBeTruthy();
    container.find('.square').first().simulate('click');
    expect(spy.calledOnce).toBeTruthy();
  });
});