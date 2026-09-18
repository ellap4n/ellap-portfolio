import { useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom';
import '../App.css';
import './projects.module.css';
import ProjectTitle from './projectTitle.jsx';
import FeaturedCarousel from './featuredCarousel.jsx';
import ArchiveSection from './archiveSection.jsx';
import CurrentlyPlaying from './currentlyPlaying.jsx';
import ProjectPopup from './projectPopup.jsx';
import styles from './projects.module.css';

function ProjectPage() {
    // /projects/:id still works exactly like before — any link from the
    // homepage pointing at /projects/:id will land here and pop the
    // matching project's details card open over the page.
    const { id } = useParams();
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (id === undefined) {
            window.scrollTo(0, 0);
        }
    }, [id, location]);

    return (
        <div className={styles.projectPage}>
            <ProjectTitle />
            {/* <FeaturedCarousel /> */}
            <ArchiveSection />
            {/* <CurrentlyPlaying /> */}
            {id !== undefined && <ProjectPopup projectId={id} />}
        </div>
    );
}

export default ProjectPage