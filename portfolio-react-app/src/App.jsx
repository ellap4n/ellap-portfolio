import { useState } from 'react'
import './App.css';
import Header from './Header.jsx';
import AboutMe from './aboutme.jsx';
import SkillsSection from './skills.jsx';

function App() {

  return (
    <>
      <Header /> {/* Website Header! */}
      <AboutMe /> {/* About Me Section */}
      <SkillsSection /> {/* Skills Section */}
      <body>
        <p> information here </p>
      </body>
    </>
  )
}

export default App