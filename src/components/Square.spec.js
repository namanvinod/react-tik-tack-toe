import React from 'react';
import { shallow } from 'enzyme';

import Square from './Square';

describe('Square', () => {
    let container;
    beforeEach(() => (container = shallow(<Square squareAction={jest.fn()} squareValue={''}/>)));

    it('should render Board', () => {
		expect(container.find('button').length).toEqual(1);
    });
});