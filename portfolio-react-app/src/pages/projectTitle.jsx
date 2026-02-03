import { useState } from 'react'
import '../App.css';
import './projects.module.css';
import styles from './projects.module.css';

function ProjectTitle() {
    return (
        <div>
            <div className={styles.projectTitle}>
                <h1 style={{ color: '#1f3a51' }}>My Projects!!</h1>
            </div>
            <div className={styles.projectLegend}>
                <div className={styles.legendItem}>
                    <div className={styles.legendCircle} style={{ backgroundColor: 'rgb(214, 216, 225)' }}></div>
                    <span>Personal Project</span>
                </div>
                <div className={styles.legendItem}>
                    <div className={styles.legendCircle} style={{ backgroundColor: 'rgb(235, 239, 227)' }}></div>
                    <span>Uni Project</span>
                </div>
                <div className={styles.legendItem}>
                    <div className={styles.legendCircle} style={{ backgroundColor: 'rgb(218, 230, 232)' }}></div>
                    <span>Work Project</span>
                </div>
            </div>
        </div>
    );
}
export default ProjectTitle
