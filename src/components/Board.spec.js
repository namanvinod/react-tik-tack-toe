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