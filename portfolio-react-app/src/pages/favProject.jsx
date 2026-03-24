import { useState } from 'react'
import '../App.css';
import './projects.module.css';
import styles from './projects.module.css';

function FavProject() {
    return (
        <div id="favproject" className={styles.favProjectSection}>
            <h2>Currently working on . . .</h2>
            <h3>Heart Hackathon!</h3>
            <p>An exciting opportunity to be a part of UoA's first ever Heart Hackathon Team!</p>
        </div>
    );
}
export default FavProject