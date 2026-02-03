import React from 'react'
import './Header.module.css';
import styles from './Header.module.css';
import Card from './components/card';
import { Link } from 'react-router-dom';


function ProjectCarousel() {
    //* Project Preview Cards Section *//

    return (
        <div className={styles.projectPreviewSection}>
            <h2 style={{ color: '#ffffff' }}>Projects</h2>
            <div className={styles.carouselContainer}>
                <Link to='/projects/0'>
                    <Card title="Portfolio Website Build" description={<p>Project 1 Description</p>} variant="previewCard" />
                </Link>
                <Link to='/projects/1'>
                    <Card title="Drone Build" description={<p>Project 2 Description</p>} variant="previewCard" />
                </Link>
                <Link to='/projects/2'>
                    <Card title="Mini-Warman Challenge" description={<p>Project 2 Description</p>} variant="previewCard" />
                </Link>
                <Link to='/projects/3'>
                    <Card title="Amoeba Light Sculpture" description={<p>Project 2 Description</p>} variant="previewCard" />
                </Link>
                <Link to='/projects/4'>
                    <Card title="C 'Boxed in' Game" description={<p>Project 2 Description</p>} variant="previewCard" />
                </Link>
            </div>
            <p style={{ textAlign: 'right' }} className={styles.imageDescriptionText}>Image taken in Tokyo, Japan (東京, 日本), Dec 2024. Mju Olympus I, Fujifilm 200.</p>
        </div >
    )
}

export default ProjectCarousel