import { useState } from 'react'
import '../App.css';
import './gallery/gallery.module.css';
import HighlightPiece from './gallery/highlightPiece.jsx';
import GalleryCarousel from './gallery/carousel.jsx';
import Commission from './gallery/commission.jsx';
import InstagramFeed from '../components/instagramfeed.jsx';

function GalleryPage() {
    return (
        <div>
            <HighlightPiece />
            <GalleryCarousel />
            <Commission />
            <InstagramFeed />
        </div>
    );
}

export default GalleryPage