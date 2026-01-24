import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header.jsx';
import AboutMe from './aboutme.jsx';
import SkillsSection from './skills.jsx';
import ProjectCarousel from './projectcarousel.jsx';
import DownArrow from './downarrow.jsx';

function App() {

  return (
    <>
      <Header /> {/* Website Header! */}
      <AboutMe /> {/* About Me Section */}
      <SkillsSection /> {/* Skills Section */}
      <h2>Projects</h2>
      <ProjectCarousel /> {/* Project Carousel Section */}
      <body>
        <p> information here </p>
      </body>
    </>
  )
}

export default App