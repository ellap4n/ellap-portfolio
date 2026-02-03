import { useEffect } from 'react'
import '../App.css';
import './gallery/gallery.module.css';
import HighlightPiece from './gallery/highlightPiece.jsx';
import GalleryCarousel from './gallery/carousel.jsx';
import Commission from './gallery/commission.jsx';
import ArtAboutMe from './gallery/artaboutme.jsx';
import InstagramFeed from '../components/instagramfeed.jsx';

function GalleryPage() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on component mount
    }, []);
    return (
        <div>
            <HighlightPiece />
            <GalleryCarousel />
            <ArtAboutMe />
            <InstagramFeed />
            <Commission />
        </div>
    );
}

export default GalleryPage