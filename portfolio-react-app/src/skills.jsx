import React from 'react'
import './Header.module.css';
import styles from './Header.module.css';
import Card from './components/card';

function SkillsSection() {
    //* Skills Cards Section *//
    return (
        <div className={styles.skillsSection}>
            <Card
                title="Technical"
                description={<p>Welding <br /> 3D Printing <br />  Machining <br />  Soldering <br /> Laser Cutting <br /> Turning/Milling <br /> Woodwork & Ceramics</p>}
                variant="skillCard"
            />
            <Card
                title="Programming"
                description={<p>C/C++ <br /> Matlab <br /> Rstudio <br /> Javascript <br /> CSS/Html </p>}
                variant="skillCard"
            />
            <Card
                title="Softwares"
                description={<p>Revit <br />  Autodesk Inventor <br />  Adobe Creative Suite <br />  Blender <br /> Excel <br /> LaTex</p>}
                variant="skillCard"
            />
            <Card
                title="Developer Tools/Frameworks"
                description={<p>Github <br /> Visual Studio Code <br /> Vite <br /> React </p>}
                variant="skillCard"
            />
        </div >
    )
}

export default SkillsSection