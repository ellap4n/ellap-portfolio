import '../../App.css';
import './gallery.module.css';
import styles from './gallery.module.css';
import Card from '../../components/card.jsx';
import hema1 from '../../assets/galleryphotos/hema1.JPG';
import hema2 from '../../assets/galleryphotos/hema2.JPG';
import hema3 from '../../assets/galleryphotos/hema3.JPG';
import hema4 from '../../assets/galleryphotos/hema4.JPG';
import lamp from '../../assets/galleryphotos/lamp.JPG';
import lamp1 from '../../assets/galleryphotos/lamp1.JPG';
import lamp2 from '../../assets/galleryphotos/lamp2.JPG';
import hand from '../../assets/galleryphotos/hand.JPG';
import motion1 from '../../assets/galleryphotos/motion1.jpg';
import motion2 from '../../assets/galleryphotos/motion2.jpg';
import motion3 from '../../assets/galleryphotos/motion3.jpg';
import motion4 from '../../assets/galleryphotos/motion4.jpg';
import motion5 from '../../assets/galleryphotos/motion5.jpg';
import motion6 from '../../assets/galleryphotos/motion6.jpg';
import sun from '../../assets/sun.JPG';
import fmmart from '../../assets/fmmart.JPG';
import maandba from '../../assets/galleryphotos/momanddad.jpg';
import { useState, useRef, useEffect } from 'react';

const GALLERY_ITEMS = [
    {
        img: hand,
        alt: 'the people we meet, even in passing',
        title: 'the people we meet, even in passing',
        medium: 'Air Dry Clay, Textiles, Sewing Thread',
        artdate: 'February 2026',
        artdescription: 'thank you to the lady at the corner who taught me kindness',
        extraPhotos: [hand],
    },
    {
        img: hema1,
        alt: 'hematopoiesis',
        title: 'Hematopoiesis',
        medium: 'Texiles, Sewing Thread',
        artdate: 'February 2026',
        artdescription: 'Hematopoiesis—the process of creating new blood cells in the bone marrow—is a highly complex, tightly regulated process that can be profoundly affected by genetic, environmental, and pathological factors. These factors can influence the rate of blood cell production, the differentiation of stem cells, or cause, such as in the case of cancer or infections, the production of dysfunctional cells.',
        extraPhotos: [hema1, hema2, hema3, hema4],
    },
    {
        img: lamp2,
        alt: 'Ancestral Rites',
        title: 'Ancestral Rites',
        medium: 'Fired Ceramics',
        artdate: 'November 2025',
        artdescription: 'overgrown lamp, glazed with tenmoku and splashes of celadon and jade abbots',
        extraPhotos: [lamp, lamp1, lamp2],
    },
    {
        img: maandba,
        alt: 'Mom and Dad',
        title: 'Ma and Ba',
        medium: 'Oil Paint on Canvas, 50cm x 50cm',
        artdate: 'March 2025',
        artdescription: 'Colourzation of my parents wedding photo from 1994',
        extraPhotos: [maandba],
    },
    {
        img: sun,
        alt: 'Memos from Taiwan',
        title: 'Memos from Taiwan',
        medium: 'Analogue Photography',
        artdate: 'January 2025',
        artdescription: 'Taiwan from my perspective',
        extraPhotos: [sun],
    },
    {
        img: fmmart,
        alt: 'Memos from Shikoku',
        title: 'Memos from Shikoku',
        medium: 'Analogue Photography',
        artdate: 'January 2025',
        artdescription: 'Japan, away from the metropolis',
        extraPhotos: [fmmart],
    },
    {
        img: motion5,
        alt: 'life moves on',
        title: 'life moves on',
        medium: 'Digital Photography',
        artdate: 'May 2024',
        artdescription: 'Subjects captured, stationary while Auckland moves in motion around them.',
        extraPhotos: [motion1, motion2, motion3, motion4, motion5, motion6],
    },
];

function GalleryCarousel() {
    const [selected, setSelected] = useState(null);
    const itemRefs = useRef([]);
    const carouselRef = useRef(null);

    // scroll the selected card into the centre of the carousel
    useEffect(() => {
        if (selected !== null && itemRefs.current[selected] && carouselRef.current) {
            const carousel = carouselRef.current;
            const selectedItem = itemRefs.current[selected];
            const itemLeft = selectedItem.offsetLeft;
            const itemWidth = selectedItem.offsetWidth;
            const carouselWidth = carousel.offsetWidth;

            const scrollPosition = itemLeft - (carouselWidth / 2) + (itemWidth / 2);

            carousel.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }
    }, [selected]);

    const selectedItem = selected !== null ? GALLERY_ITEMS[selected] : null;

    return (
        <div className={styles.galleryCarouselWrapper}>
            <div className={styles.galleryCarousel} ref={carouselRef}>
                {GALLERY_ITEMS.map((item, i) => {
                    const isSelected = selected === i;
                    return (
                        <div
                            key={i}
                            ref={el => itemRefs.current[i] = el}
                            className={`${styles.imageContainer} ${isSelected ? styles.imageContainerSelected : ''}`}
                            onClick={() => setSelected(isSelected ? null : i)}
                        >
                            <img
                                src={item.img}
                                alt={item.alt}
                                className={`${styles.carouselImage} ${isSelected ? styles.carouselImageSelected : ''}`}
                            />
                            <Card
                                title={item.title}
                                medium={item.medium}
                                artdate={item.artdate}
                                variant="galleryCard"
                                artdescription={item.artdescription}
                                isExpanded={isSelected}
                            />
                        </div>
                    );
                })}
            </div>

            <section
                className={`${styles.expandedGallerySection} ${selectedItem ? styles.expandedGallerySectionVisible : ''}`}
                aria-hidden={!selectedItem}
            >
                {selectedItem && (
                    <>
                        <h3 className={styles.expandedGalleryTitle}>{selectedItem.title} - More Photos</h3>
                        <div className={styles.expandedGalleryTrack}>
                            {selectedItem.extraPhotos.map((photo, idx) => (
                                <img
                                    key={`${selectedItem.title}-extra-${idx}`}
                                    src={photo}
                                    alt={`${selectedItem.alt} extra ${idx + 1}`}
                                    className={styles.expandedGalleryImage}
                                />
                            ))}
                        </div>
                    </>
                )}
            </section>
        </div>
    );
}

export default GalleryCarousel;