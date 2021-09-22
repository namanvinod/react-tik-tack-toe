import React from 'react';
import { shallow } from 'enzyme';

import Game from './Game';
import Board from './Board';

describe('Game', () => {
    let container;
    beforeEach(() => (container = shallow(<Game />)));

    it('should render Board', () => {
		expect(container.containsMatchingElement(<Board />)).toBeTruthy();
    });
});