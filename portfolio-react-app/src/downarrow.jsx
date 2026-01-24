import React from 'react'
import './Header.module.css';
import styles from './Header.module.css';
import downArrow from './assets/down.png';

function DownArrow() {
    return (
        <div className={styles.skillsArrow}>
            <img src={downArrow} alt="down arrow" className={styles.downArrowImg} />
        </div>
    )
}
export default DownArrow