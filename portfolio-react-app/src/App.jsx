import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header.jsx';
import HomePage from './HomePage.jsx';
import ProjectsPage from './pages/ProjectPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* Website Header! */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
    </BrowserRouter >
  );
}


export default App