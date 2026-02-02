import { useState } from 'react'
import '../App.css';
import './projects.module.css';
import ProjectTitle from './projectTitle.jsx';
import ProjectSection from './projectSection.jsx';
import FavProject from './favProject.jsx';
import styles from './projects.module.css';

function ProjectPage() {
    return (
        <projectPage className={styles.projectPage}>
            <ProjectTitle /> {/* Project Title Section */}
            <ProjectSection /> {/* Projects Section */}
            <FavProject /> {/* Favorite Project Section */}
        </projectPage>
    );
}

export default ProjectPage