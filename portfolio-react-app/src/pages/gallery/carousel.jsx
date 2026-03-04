import '../../App.css';
import './gallery.module.css';
import styles from './gallery.module.css';
import Card from '../../components/card.jsx';
import hema1 from '../../assets/galleryphotos/hema1.JPG';
import lamp2 from '../../assets/galleryphotos/lamp2.JPG';
import hand from '../../assets/galleryphotos/hand.JPG';
import sun from '../../assets/sun.JPG';
import fmmart from '../../assets/fmmart.JPG';
import maandba from '../../assets/galleryphotos/momanddad.JPG';
import { useState, useRef, useEffect } from 'react';

const GALLERY_ITEMS = [
    { img: hand, alt: 'the people we meet, even in passing', title: 'the people we meet, even in passing', medium: 'Air Dry Clay, Textiles, Sewing Thread', artdate: 'February 2026', artdescription: 'thank you to the lady at the corner who taught me kindness' },
    { img: hema1, alt: 'hematopoiesis', title: 'Hematopoiesis', medium: 'Texiles, Sewing Thread', artdate: 'February 2026', artdescription: 'Hematopoiesis—the process of creating new blood cells in the bone marrow—is a highly complex, tightly regulated process that can be profoundly affected by genetic, environmental, and pathological factors. These factors can influence the rate of blood cell production, the differentiation of stem cells, or cause, such as in the case of cancer or infections, the production of dysfunctional cells.' },
    { img: lamp2, alt: 'Ancestral Rites', title: 'Ancestral Rites', medium: 'Fired Ceramics', artdate: 'November 2025', artdescription: 'overgrown lamp, glazed with tenmoku and splashes of celadon and jade abbots' },
    { img: maandba, alt: 'Mom and Dad', title: 'Ma and Ba', medium: 'Oil Paint on Canvas, 50cm x 50cm', artdate: 'March 2025', artdescription: 'Colourzation of my parents wedding photo from 1994' },
    { img: sun, alt: 'Another Sunny Day', title: 'Sun Moon Lake', medium: 'Analogue Photography', artdate: 'January 2025', artdescription: 'Taiwan from my perspective' },
    { img: fmmart, alt: 'FM Mart', title: 'Local Family Mart', medium: 'Analogue Photography', artdate: 'January 2025', artdescription: 'A snapshot of the local FM Mart, unusual in its countryside setting.' },
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

    return (
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
    );
}

export default GalleryCarousel;