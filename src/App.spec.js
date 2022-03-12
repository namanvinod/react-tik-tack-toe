// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import { mount } from 'enzyme';

import App from './App';
import Navbar from './core/components/Navbar';
import { Provider } from 'react-redux';
import gameReducer from './store/gameReducer';
import { createStore } from 'redux';

describe('App', () => {
  let container;
  beforeEach(() => (container = mount(<Provider store={createStore(gameReducer)}><App /></Provider>)));

  it('should render Game Component', () => {
    expect(container.containsMatchingElement(<Navbar />)).toEqual(true);
  });
});
