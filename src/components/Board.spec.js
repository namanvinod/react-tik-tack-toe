import React from 'react';
import { shallow } from 'enzyme';

import Board from './Board';
import Square from './Square';

describe('Board', () => {
    let container;
    beforeEach(() => (container = shallow(<Board />)));

    it('should render Board', () => {
		expect(container.containsMatchingElement(<Square />)).toBeTruthy(); 
    });
});

// describe('mounted Timer', () => {
//     let container;
  
//     beforeEach(() => (container = mount(<Board />)));
  
//     it('Click Event of Square is fired when it is clicked', () => {
//       const spy = jest.spyOn(container.instance(), 'updateGameState');
//       container.instance().forceUpdate();
//       expect(spy).toHaveBeenCalledTimes(0);
//       container.find('.square').first().simulate('click');
//       expect(spy).toHaveBeenCalledTimes(1);
//     });