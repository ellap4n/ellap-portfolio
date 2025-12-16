import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Header from './Header.jsx';

function App() {

  return (
    <>
      <Header /> {/* Website Header! */}
      <body>
        <h1>Welcome to my portfolio!</h1>
        <p>This is where I will showcase my projects and skills.</p>
      </body>
    </>
  )
}

export default App