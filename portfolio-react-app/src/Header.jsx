import React from 'react'
import './Header.module.css';
import logo from './assets/temp_logo.jpg';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

console.log(logo);

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">home</Link>
        <Link to="/projects">projects</Link>
        <Link to="/gallery">gallery</Link>
      </nav>
      {/* Logo and Website Name */}
      <img src={logo} alt="Ella's Logo" className={styles.logoImg} />
      <p>✧  ella's portfolio</p>
    </header>
  )
}

export default Header