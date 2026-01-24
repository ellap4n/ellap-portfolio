import React from 'react'
import './Header.module.css';
import styles from './Header.module.css';
import Card from './components/card';

function SkillsSection() {
    {/* Skills Cards Section */ }
    return (
        <div className={styles.skillsSection}>
            <Card
                title="Skill 1"
                description="Description of Skill 1"
                variant="skillCard"
            />
            <Card
                title="Skill 2"
                description="Description of Skill 2"
                variant="skillCard"
            />
            <Card
                title="Skill 3"
                description="Description of Skill 3"
                variant="skillCard"
            />
            <Card
                title="Skill 4"
                description="Description of Skill 4"
                variant="skillCard"
            />
        </div >
    )
}

export default SkillsSection