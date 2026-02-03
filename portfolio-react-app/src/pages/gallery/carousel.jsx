import '../../App.css';
import './gallery.module.css';
import styles from './gallery.module.css';
import Card from '../../components/card.jsx';
import snow2 from '../../assets/snow2.JPG';
import sun from '../../assets/sun.JPG';
import fmmart from '../../assets/fmmart.JPG';
import { useState, useRef, useEffect } from 'react';

const GALLERY_ITEMS = [
    { img: snow2, alt: 'Snowy Landscape', title: 'Snowy Day', medium: 'Digital Photography', artdate: 'January 2024', artdescription: 'Captured during a quiet morning in the mountains. The light was soft and diffused through the clouds, giving everything an almost dreamlike quality.' },
    { img: sun, alt: 'Sunny Day', title: 'Sunny Day', medium: 'Digital Photography', artdate: 'January 2024', artdescription: 'A rare break in the clouds while travelling through the countryside. The warmth of the light made the landscape feel alive.' },
    { img: sun, alt: 'Another Sunny Day', title: 'Another Sunny Day', medium: 'Digital Photography', artdate: 'January 2024', artdescription: 'Taken just before sunset. The golden hour gave this scene a completely different mood compared to the earlier shot.' },
    { img: fmmart, alt: 'FM Mart', title: 'FM Mart', medium: 'Digital Photography', artdate: 'January 2024', artdescription: 'A snapshot of the local FM Mart, capturing the vibrant colors and bustling atmosphere.' },
    { img: fmmart, alt: 'FM Mart', title: 'FM Mart', medium: 'Digital Photography', artdate: 'January 2024', artdescription: 'A snapshot of the local FM Mart, capturing the vibrant colors and bustling atmosphere.' }
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