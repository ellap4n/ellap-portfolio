import React from 'react'
import './Header.module.css';
import logo from './assets/temp_logo.jpg';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

console.log(logo);

function Footer() {
    return (
        <footer>
            <div className={styles.footerLinks}>
                <p>Ella Pan's Portfolio!</p>
            </div>
            <div className={styles.footerPageLinks}>
                <h4> Navigation </h4>
                <p><Link to="/">Home</Link></p>
                <p><Link to="/projects">Projects</Link></p>
                <p><Link to="/gallery">Gallery</Link></p>
            </div>
            <div className={styles.footerThirdColumn}>
                <img src={logo} alt="Ella's Logo" className={styles.logoImgFooter} />
                <p>© 2024 Ella Pan. All rights reserved.</p>
            </div>


        </footer>
    )
}
export default Footer
