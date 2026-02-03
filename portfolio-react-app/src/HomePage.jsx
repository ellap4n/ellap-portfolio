import { useEffect } from 'react'
import './App.css';
import ScrollReveal from './titlescroll/scrollreveal.jsx';
import SkillsSection from './skills.jsx';
import ProjectCarousel from './projectcarousel.jsx';
import ContactMe from './components/contactme.jsx';

function HomePage() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on component mount
    }, []);
    return (
        <>
            <ScrollReveal /> {/* Scroll Reveal Section */}
            <SkillsSection /> {/* Skills Section */}
            <ProjectCarousel /> {/* Project Carousel Section */}
            <ContactMe /> {/* Contact Me Section */}
        </>
    )
}

export default HomePage