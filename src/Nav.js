import logo from './assets/littleLemonLogo.png'

const Nav = () => {
    
    return (
        <nav>
            <img src={logo} alt="little lemon logo"/>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="about">About</a></li>
                <li><a href="menu">Menu</a></li>
                <li><a href="reservations">Reservations</a></li>
                <li><a href="order online">Order Online</a></li>
                <li><a href="Log In">Log In</a></li>
            </ul>
        </nav>
    );
};

export default Nav;