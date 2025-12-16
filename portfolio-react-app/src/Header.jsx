import React from 'react'
import './Header.module.css';
import logo from './assets/temp_logo.jpg';
import styles from './Header.module.css';

console.log(logo);

function Header() {
  return (
    <header>
      <nav>
        <a href="#home">home</a>
        <a href="#projects">projects</a>
      </nav>
      {/* Logo and Website Name */}
      <img src={logo} alt="Ella's Logo" className={styles.logoImg} />
      <p>ella's portfolio</p>
    </header>
  )
}

export default Header