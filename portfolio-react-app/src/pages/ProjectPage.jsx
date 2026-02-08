import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom';
import '../App.css';
import './projects.module.css';
import ProjectTitle from './projectTitle.jsx';
import ProjectSection from './projectSection.jsx';
import FavProject from './favProject.jsx';
import styles from './projects.module.css';

function ProjectPage() {
    const { id } = useParams();
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            // If there's a hash, scroll to that element
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (id === undefined) {
            window.scrollTo(0, 0); // Only scroll to top if no ID passed
        } else {
            window.scrollTo(0, 150); // Scroll to specific position for project details
        }
    }, [id, location]);
    return (
        <div className={styles.projectPage}>
            <ProjectTitle /> {/* Project Title Section */}
            <ProjectSection /> {/* Projects Section */}
            <FavProject /> {/* Favorite Project Section */}
        </div>
    );
}

export default ProjectPage