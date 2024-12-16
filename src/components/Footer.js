import React from 'react';
import logo from "../assets/logo/logo-kasa-white.png";

const Footer = ({ className }) => {
    return (
        <footer>
            <img src={logo} alt="logo kasa blanc" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;