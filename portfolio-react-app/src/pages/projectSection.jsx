import { useState, } from 'react'
import '../App.css';
import './projects.module.css';
import styles from './projects.module.css';
import Card from '../components/card';
import { useParams } from 'react-router-dom';

function ProjectSection() {
    const { id } = useParams();
    const [selectedProject, setSelectedProject] = useState(Number(id) || 0);
    const projectList = [
        { id: 0, title: "Portfolio Website Build", date: "Jan - Feb 2026", variant: "personalCard" },
        { id: 1, title: "Drone Build", date: "Mar - Apr 2026", variant: "personalCard" },
        { id: 2, title: "Mini-Warman Challenge", date: "May - Jun 2026", variant: "uniCard" },
        { id: 3, title: "Amoeba Light Sculpture", date: "Jul - Aug 2026", variant: "workCard" },
        { id: 4, title: "C 'Boxed in' Game", date: "Sep - Oct 2026", variant: "uniCard" },
    ]
    function getColorForVariant(variant) {
        switch (variant) {
            case 'personalCard': return 'rgb(214, 216, 225)';
            case 'uniCard': return 'rgb(235, 239, 227)';
            case 'workCard': return 'rgb(218, 230, 232)';
            default: return 'rgb(218, 230, 232)';
        }
    }


    return (

        <section id="projectSection" className={styles.projectSection}>
            <div className={styles.leftContainer}>
                {/* project list */}
                {projectList.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => setSelectedProject(project.id)}
                    >
                        <Card
                            title={project.title}
                            variant={selectedProject === project.id ? "activePreviewCard" : project.variant}
                        />
                    </div>
                ))}

            </div>
            <div className={styles.mainContainer}>
                {/* clicked project details */}
                <Card
                    title={projectList[selectedProject].title}
                    date={projectList[selectedProject].date}
                    description={<p>{projectList[selectedProject].description}</p>}
                    variant="mainProjectCard"
                    style={{ backgroundColor: getColorForVariant(projectList[selectedProject].variant) }}
                />
                <p className={styles.imageDescriptionText}>
                    Image taken in Kaoshiung, Taiwan (高雄市, 臺灣), Jan 2025. Mju Olympus I, Kodak Gold 400. </p>
            </div>
        </section>
    );

}
export default ProjectSection