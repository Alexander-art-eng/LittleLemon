import logo from '../../images/small_logo.png'
import facebookIcon from '../../images/icons/facebook.svg'
import instagramIcon from '../../images/icons/instagram.svg'
import twitterIcon from '../../images/icons/x-twitter.svg'
import './Footer.css'

const SOCIALS = [
    {
        href: 'https://www.facebook.com/',
        label: 'Facebook',
        icon: facebookIcon,
    },
    {
        href: 'https://www.instagram.com/',
        label: 'Instagram',
        icon: instagramIcon,
    },
    {
        href: 'https://www.x.com/',
        label: 'X',
        icon: twitterIcon,
    },
]

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
                        <li><a href='#about'>About</a></li>
                        <li><a href='#menu'>Menu</a></li>
                        <li><a href='/booking'>Reservations</a></li>
                        <li><a href='/notFound'>Order Online</a></li>
                        <li><a href='/notFound'>Log In</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contacts</h3>
                    <ul className='contact-info'>
                        <li>Address <br /> 123, Towncity, USA</li>
                        <li>Phone Number <br /> +1 4767 7585</li>
                        <li>Email: <br /> little@lemon.com</li>
                    </ul>
                </div>

                <div>
                    <h3>Social Media</h3>
                    <div className='social-icons'>
                        {SOCIALS.map((social) => (
                            <a href={social.href} key={social.label}>
                                <img src={social.icon} className='social-image' alt={social.label} />
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;