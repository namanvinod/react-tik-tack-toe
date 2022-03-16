import { mount, shallow } from "enzyme";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import tickTackToeReducers, { defaultState } from "../../store/tickTackToeReducers";
import Board from "../board/Board";
import Login from "./login";

// const axios = require('axios');
// jest.mock('axios');

describe('Login', () => {
    let container;
    let store = createStore(tickTackToeReducers ,defaultState);

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

    // it('should not trigger click event on Login button when username and password is not entered', () => {
    //     axios.get.mockResolvedValue({
    //         data: []
    //     });

    //     container.find('input').first().simulate("change", { target: { value: 'testUseName' }});
    //     container.find('input').at(1).simulate("change", { target: { value: 'testPassword' }});
    //     container.find('button').first().simulate('click');
    //     const loggedIn = store?.getState()?.session?.loggedIn;
    //     expect(loggedIn).toBeTruthy();
    // });
    // .find('input').simulate("change", { target: { value: "foo" }})
});