import React from 'react'
import './contactme.module.css';
import styles from './contactme.module.css';
import contactImg from '../assets/contactmeimg.jpg';

function ContactMe() {
    {/* Contact Me Section */ }
    return (
        <div className={styles.contactMeContainer}>
            <div>
                <h2>Contact Me</h2>
                <p className={styles.contactMeText}>e. ellap4816@gmail.com</p>
                <p className={styles.contactMeText}>ph. 02041673961</p>
            </div>
            <img src={contactImg} alt="Contact Me" className={styles.contactMeImg} />
        </div >
    )
}

export default ContactMe