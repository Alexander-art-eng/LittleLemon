import logo from '../images/small_logo.png'

const Footer = () => {

    return(
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt="Little Lemon Logo" />
                </div>

                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/menu'>Menu</a></li>
                        <li><a href='/reservations'>Reservations</a></li>
                        <li><a href='/order online'>Order Online</a></li>
                        <li><a href='/log in'>Log In</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contacts</h3>
                    <ul>
                        <li>Address <br /> 123, Towncity, USA</li>
                        <li>Phone Number <br /> +1 4767 7585</li>
                        <li>Email: <br /> little@lemon.com</li>
                    </ul>
                </div>

                <div>
                    <h3>Social Media</h3>
                    <ul>
                        <li><a href='https://www.facebook.com/'>Facebook</a></li>
                        <li><a href='https://www.x.com/'>x</a></li>
                        <li><a href='https://www.instagram.com/'>Instagram</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;