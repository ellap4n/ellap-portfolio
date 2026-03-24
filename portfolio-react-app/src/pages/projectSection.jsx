import { useState, } from 'react'
import '../App.css';
import './projects.module.css';
import styles from './projects.module.css';
import Card from '../components/card';
import { useParams } from 'react-router-dom';

//images for projects

import warman from '../assets/projectphotos/warman.JPG';
import warman1 from '../assets/projectphotos/warman1.JPG';
import warman2 from '../assets/projectphotos/warman2.JPG';
import warmanvid from '../assets/projectphotos/warmanvid.mov';

import mdcvid from '../assets/projectphotos/mdcvid.MOV';
import mdc1 from '../assets/projectphotos/mdc1.JPG';
import mdc2 from '../assets/projectphotos/mdc2.JPG';
import mdc3 from '../assets/projectphotos/mdc3.JPG';

import drone from '../assets/projectphotos/drone.JPG';
import drone1 from '../assets/projectphotos/drone1.JPG';
import drone2 from '../assets/projectphotos/drone2.JPG';
import drone3 from '../assets/projectphotos/drone3.JPG';

import portfolioweb from '../assets/projectphotos/portfolioweb.JPG';


function ProjectSection() {
    const { id } = useParams();
    const [selectedProject, setSelectedProject] = useState(Number(id) || 0);

    const projectList = [
        { id: 0, title: "C 'Boxed in' Game", date: "Aug - Nov 2024", description: "C Language programme. First exposure to coding through my ENGGEN 131 paper. ", variant: "uniCard" },
        { id: 1, title: "MDC Trophy Design", date: "September 2025", description: "I designed a fun little trophy project for my club, MECHA's Design and Build Competition! I self-learnt blender for this, utilising it's 3d sculpting and mesh manipulation capabilities.", variant: "personalCard", mainvideo: mdcvid, image1: mdc1, image2: mdc2, image3: mdc3 },
        { id: 2, title: "Drone Build", date: "May - Aug 2025", description: "A collaboration with my peers to design and build a drone for a short inter-sem project. I led the Mechanical design and assembly.", variant: "personalCard", mainimage: drone, image1: drone1, image2: drone2, image3: drone3 },
        { id: 3, title: "Mini-Warman Challenge", date: "Feb - June 2025", description: "This challenging group course project for MECHENG235 had us problem solving, prototyping, building, and coding in a extremely fast-paced 10 week build project.", variant: "uniCard", mainvideo: warmanvid, image1: warman, image2: warman1, image3: warman2 },
        { id: 4, title: "Portfolio Website Build", date: "Jan - Feb 2026", description: "This website you are currently viewing was built from scratch in React and Vite, using Javascript, CSS and HTML. It's a summer project with the goal to improve my web development skills, which I thought were lacking.", variant: "personalCard", mainimage: portfolioweb },

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
                {[...projectList].reverse().map((project) => (
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
                    mainimage={projectList[selectedProject].mainimage}
                    mainvideo={projectList[selectedProject].mainvideo}
                    image1={projectList[selectedProject].image1}
                    image2={projectList[selectedProject].image2}
                    image3={projectList[selectedProject].image3}
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