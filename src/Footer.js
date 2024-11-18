import footerLogo from './assets/littleLemonLogo.png'

const Footer = () => {
    
    return (
        <footer>
            <img src={footerLogo} alt="little lemon logo" />
            
            <section>
                <h5>Doormap Navigation</h5>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="menu">Menu</a></li>
                    <li><a href="reservations">Reservations</a></li>
                    <li><a href="order online">Order Online</a></li>
                    <li><a href="log in">Log In</a></li>
                </ul>
            </section>

            <section>
                <h5>Contacts</h5>
                <ul>
                    <li><a href="address">Address</a></li>
                    <li><a href="phone number">Phone Number</a></li>
                    <li><a href="email">Email</a></li>
                </ul>
            </section>

            <section>
                <h5>Social Media Links</h5>
                <ul>
                    <li><a href="facebook">Facebook</a></li>
                    <li><a href="twitter">Twitter</a></li>
                    <li><a href="instagram">Instagram</a></li>
                </ul>
            </section>
        </footer>
    );
};

export default Footer;