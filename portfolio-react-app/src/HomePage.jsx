import { useState } from 'react'
import './App.css';
import Header from './Header.jsx';
import AboutMe from './aboutme.jsx';
import SkillsSection from './skills.jsx';
import ProjectCarousel from './projectcarousel.jsx';
import ContactMe from './components/contactme.jsx';

function HomePage() {

    return (
        <>
            <AboutMe /> {/* About Me Section */}
            <SkillsSection /> {/* Skills Section */}
            <ProjectCarousel /> {/* Project Carousel Section */}
            <ContactMe /> {/* Contact Me Section */}
        </>
    )
}

export default HomePage