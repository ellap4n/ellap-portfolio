import { useState } from 'react'
import '../App.css';
import './projects.module.css';
import styles from './projects.module.css';

function FavProject() {
    return (
        <div id="favproject" className={styles.favProjectSection}>
            <h2>Currently working on . . .</h2>
            <p>This project showcases my skills in React and web development.</p>
        </div>
    );
}
export default FavProject