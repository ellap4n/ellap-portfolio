import { useState } from 'react'
import '../App.css';
import './projects.module.css';
import styles from './projects.module.css';
import Card from '../components/card';

function ProjectSection() {
    return (
        <section id="projectSection" className={styles.projectSection}>
            <div className={styles.leftContainer}>
                <Card
                    title="Project 1"
                    variant="personalCard"
                />
                <Card
                    title="Project 2"
                    variant="uniCard"
                />
                <Card
                    title="Project 3"
                    variant="workCard"
                />
                <Card
                    title="Project 4"
                    variant="personalCard"
                />
                <Card
                    title="Project 5"
                    variant="workCard"
                />

            </div>
            <div className={styles.mainContainer}>
                {/* clicked project details */}
            </div>
        </section>
    );

}
export default ProjectSection