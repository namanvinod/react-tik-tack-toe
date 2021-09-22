// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Game from './components/Game';

describe('App', () => {
  let container;
  beforeEach(() => (container = shallow(<App />)));

  it('should render Game Component', () => {
    expect(container.containsMatchingElement(<Game />)).toEqual(true);
  });
});
