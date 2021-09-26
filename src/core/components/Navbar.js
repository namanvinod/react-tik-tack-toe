import './Navbar.css';

const Navbar = () => {
    return (
        <div className="nav-container">
            <ul>Game</ul>
            <ul>About</ul>
            <ul className="nav-profile"><a>My Profile</a></ul>
        </div>
    );
}

export default Navbar;

