import { useState } from 'react'
import './App.css';
import Header from './Header.jsx';
import AboutMe from './aboutme.jsx';
import SkillsSection from './skills.jsx';
import ProjectCarousel from './projectcarousel.jsx';

function HomePage() {

    return (
        <>
            <AboutMe /> {/* About Me Section */}
            <SkillsSection /> {/* Skills Section */}
            <h2>Projects</h2>
            <ProjectCarousel /> {/* Project Carousel Section */}
        </>
    )
}

export default HomePage