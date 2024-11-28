import {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/Logo .svg'

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (

        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href="/" className="logo">
                <img src={logo} alt="Little Lemon Logo" />
            </a>

            {/* Mobile navbar*/}
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/* Nav items*/ }
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/notFound">Order Online</Link></li>
                <li><Link to="/notFound">Log In</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;