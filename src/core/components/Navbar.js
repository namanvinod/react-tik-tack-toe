import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    return (
        <Fragment>
            <div className="nav-container">
                <ul><Link to="/">Game</Link></ul>
                <ul><Link to="/about">About</Link></ul>
                <ul className="nav-profile"><Link to="/profile">My Profile</Link></ul>
            </div>
        </Fragment>
    );
};

export default Navbar;

