import { mount, shallow } from "enzyme";
// import { createStore } from "redux";
import { Provider } from 'react-redux';
import tickTackToeReducers, { defaultState } from "../../store/tickTackToeReducers";

import Login from "./login";

import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import asyncReducers from '../../store/async-reducers';
import sessionReducer, { defaultSessionState } from "../../store/sessionReducer";

const axios = require('axios');
jest.mock('axios');

describe('Login', () => {
    const sagaMiddleware = createSagaMiddleware();

    let container;

    let store = createStore(sessionReducer ,defaultSessionState, applyMiddleware(sagaMiddleware));

    sagaMiddleware.run(asyncReducers);

    beforeEach(() => {
        container = mount(<Provider store={store}><Login /></Provider>);
    });

    it('should display Login Component', () => {
        expect(container.containsMatchingElement(<Login />)).toBeTruthy();
    });

    it('should render 2 inputs', () => {
        expect(container.find('input').length).toEqual(2);
    });

    // it('should not trigger click event on Login button when username and password is not entered', () => {
    //     axios.get.mockResolvedValue({
    //         data: []
    //     });

    //     const loggedIn = store?.getState()?.session?.loggedIn;
    //     container.find('button').first().simulate('click');
    //     expect(loggedIn).toBeFalsy();
    // });

    it('should not trigger click event on Login button when username and password is not entered', () => {
        axios.post.mockResolvedValue({
            data: []
        });

        container.find('input').first().simulate("change", { target: { value: 'testUseName' }});
        container.find('input').at(1).simulate("change", { target: { value: 'testPassword' }});
        container.find('button').at(0).simulate('click');
        console.log('State value', store?.getState(), store?.getState()?.session);
        store.subscribe(st => console.log('state changed', st));
        const loggedIn = store?.getState()?.session?.loggedIn;
        expect(loggedIn).toBeTruthy();
    });
    // .find('input').simulate("change", { target: { value: "foo" }})
});