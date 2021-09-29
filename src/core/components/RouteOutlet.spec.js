import { shallow } from 'enzyme';

import { Route } from 'react-router-dom';

import RouteOutlet from './RouteOutlet';

describe('RouteOutlet', () => {
    let container;

    beforeEach(() => (container = shallow(<RouteOutlet />)));

    it('Displays Route', () => {
        expect(container.containsMatchingElement(<Route />)).toBeTruthy();
    });

    it('Displays 3 Routes', () => {
        expect(container.findWhere(ele => ele.name() === 'Route').length).toEqual(3);
    });

    it('Displays first Route as Game', () => {
        const routeElements = container.findWhere(ele => ele.name() === 'Route');
        const firstRouteProps = routeElements && routeElements.first() && routeElements.first().props();
        expect(firstRouteProps.path).toEqual('/');
        expect(firstRouteProps.component.name).toEqual('Game');
    });

    it('Displays second Route as About', () => {
        const routeElements = container.findWhere(ele => ele.name() === 'Route');
        const firstRouteProps = routeElements && routeElements.at(1) && routeElements.at(1).props();
        expect(firstRouteProps.path).toEqual('/about');
        expect(firstRouteProps.component.name).toEqual('About');
    });

    it('Displays Third Route as MyProfile', () => {
        const routeElements = container.findWhere(ele => ele.name() === 'Route');
        const firstRouteProps = routeElements && routeElements.at(2) && routeElements.at(2).props();
        expect(firstRouteProps.path).toEqual('/profile');
        expect(firstRouteProps.component.name).toEqual('MyProfile');
    });
});