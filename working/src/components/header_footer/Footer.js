import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">Sury & Abril = Ramon + Andrea</div>
                <div className="footer_copyright">
                    Blacky Rocket Gucci @OHANA
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;