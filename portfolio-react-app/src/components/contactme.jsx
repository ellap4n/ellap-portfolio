import React from 'react'
import './contactme.module.css';
import styles from './contactme.module.css';
import contactImg from '../assets/contactmeimg.jpg';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';

function ContactMe() {
    {/* Contact Me Section */ }
    return (
        <div className={styles.contactMeContainer}>
            <div>
                <h2>Contact Me</h2>
                <p className={styles.contactMeText}>e. ellap4816@gmail.com</p>
                <p className={styles.contactMeText}>auckland, new zealand</p>
                <div className={styles.contactMeIcons}>
                    <a href="https://www.linkedin.com/in/ella-pan-1234/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn" className={styles.contactMeIcon} />
                    </a>
                    <a href="https://github.com/ella-pan" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub" className={styles.contactMeIcon} />
                    </a>
                </div>
            </div>
            <img src={contactImg} alt="Contact Me" className={styles.contactMeImg} />
        </div >
    )
}

export default ContactMe