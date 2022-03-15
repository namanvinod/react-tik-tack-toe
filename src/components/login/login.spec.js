import { mount, shallow } from "enzyme";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import tickTackToeReducers, { defaultState } from "../../store/tickTackToeReducers";
import Board from "../board/Board";
import Login from "./login";

describe('Login', () => {
    let container;
    let store = createStore(tickTackToeReducers ,defaultState);

    beforeEach(() => {
        container = mount(<Provider store={store}><Login /></Provider>);
    });

    it('should display Login Component', () => {
        expect(container.containsMatchingElement(<Login />)).toBeTruthy();
    });

    // .find('input').simulate("change", { target: { value: "foo" }})
});