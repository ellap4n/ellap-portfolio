import React from 'react'
import './Header.module.css';
import styles from './Header.module.css';
import Card from './components/card';
import { Link } from 'react-router-dom';

function ProjectCarousel() {
    //* Project Preview Cards Section *//

    return (
        <div className={styles.projectPreviewSection}>
            <h2 style={{ color: '#ffffff' }}> {'<'} PROJECTS {'>'}</h2>
            <div className={styles.carouselContainer}>
                {/* <Link to='/projects/1'>
                    <Card title="Portfolio Website Build" description={<p>Building this Website! <br />Using React and CSS.</p>} variant="previewCard" />
                </Link> */}
                <Link to='/projects/5'>
                    <Card title="TAH Mechanical Design" description={<p>Heart Hackathon Competition</p>} variant="previewCard" />
                </Link>
                <Link to='/projects/3'>
                    <Card title="Mini-Warman Challenge" description={<p> Design and Build Challenge<br />UOA MECHENG235</p>} variant="previewCard" />
                </Link>
                <Link to='/projects/2'>
                    <Card title="2D Pen Plotter" description={<p>Mechatronics Systems Design project<br />UOA MECHENG306</p>} variant="previewCard" />
                </Link>
                <Link to='/projects/7'>
                    <Card title="Amoeba" description={<p>Design and manufactureing of a Lighting Sculpture </p>} variant="previewCard" />
                </Link>
                <Link to='/projects/6'>
                    <Card title="Electromagnetic Motor" description={<p>Building an Electromagnetic Motor<br />UOA MECHTRON299</p>} variant="previewCard" />
                </Link>
            </div>
            <p style={{ textAlign: 'right' }} className={styles.imageDescriptionText}>Image taken in Tokyo, Japan (東京, 日本), Dec 2024. Mju Olympus I, Fujifilm 200.</p>
        </div >
    )
}

export default ProjectCarousel