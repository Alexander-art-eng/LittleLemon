import { Link } from 'react-router-dom';
import React from 'react';
import bannerImage from '../images/bannerImage.jpg';


const Header = () => {
    return (
        <header className="header">
            <section>
                {/* banner text*/}
                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family-owned Mediterranean restaurant, 
                    focused on traditional recipes served with a modern twist.
                    </p>
                    <Link to="/booking" aria-label="On Click" className='reserve-table'>Reserve a table</Link>
                </div>

                {/* banner image*/}
                <div className="banner-img">
                    <img src={bannerImage} alt='Banner Image' />
                </div>
            </section>
        </header>
    );
};

export default Header;