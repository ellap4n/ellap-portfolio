import { useState } from 'react'
import './App.css';
import Header from './Header.jsx';
import AboutMe from './aboutme.jsx';

function App() {

  return (
    <>
      <Header /> {/* Website Header! */}
      <AboutMe /> {/* About Me Section */}
      <body>
        <p> information here </p>
      </body>
    </>
  )
}

export default App