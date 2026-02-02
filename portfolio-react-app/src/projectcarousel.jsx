import React from 'react'
import './Header.module.css';
import styles from './Header.module.css';
import Card from './components/card';
import backgroundImg from './assets/bike.jpg';


function ProjectCarousel() {
    //* Project Preview Cards Section *//
    return (
        <div className={styles.projectPreviewSection}>
            <h2 style={{ color: '#ffffff' }}>Projects</h2>
            <div className={styles.carouselContainer}>
                <Card
                    title="Mini Warman Project"
                    description={<p>Project 1 Description</p>}
                    variant="previewCard"
                />
                <Card
                    title="Project awieghfiawghifed"
                    description={<p>Project 2 Description</p>}
                    variant="previewCard"
                />
                <Card
                    title="Project 9"
                    description={<p>Project 2 Description</p>}
                    variant="previewCard"
                />
                <Card
                    title="Project 3"
                    description={<p>Project 2 Description</p>}
                    variant="previewCard"
                />
                <Card
                    title="Project 5"
                    description={<p>Project 2 Description</p>}
                    variant="previewCard"
                />
                <Card
                    title="Project 0"
                    description={<p>Project 2 Description</p>}
                    variant="previewCard"
                />
            </div >
        </div >
    )
}

export default ProjectCarousel