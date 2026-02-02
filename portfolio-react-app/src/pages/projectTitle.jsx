import { useState } from 'react'
import '../App.css';
import './projects.module.css';
import styles from './projects.module.css';

function ProjectTitle() {
    return (
        <div className={styles.projectTitle}>
            <h1>My Projects!!</h1>
        </div>
    );
}
export default ProjectTitle
