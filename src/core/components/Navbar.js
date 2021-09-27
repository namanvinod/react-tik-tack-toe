import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './Navbar.css';

import Game from '../../components/Game';
import About from '../../components/About';
import MyProfile from '../../components/MyProfile';

const Navbar = () => {
    return (
        <Router>
            <div className="nav-container">
                <ul><Link to="/">Game</Link></ul>
                <ul><Link to="/about">About</Link></ul>
                <ul className="nav-profile"><Link to="/profile">My Profile</Link></ul>
            </div>
            <Route exact path="/" component={Game}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/profile" component={MyProfile}></Route>
        </Router>
    );
};

export default Navbar;

