import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header.jsx';
import HomePage from './HomePage.jsx';
import ProjectsPage from './pages/ProjectPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* Website Header! */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </main>
      <Footer /> {/* Website Footer! */}
    </BrowserRouter >
  );
}


export default App