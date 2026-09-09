import { useState, useRef, useEffect, useCallback } from 'react';
import { getFeaturedProjects } from './projectsData';
import PlaceholderCover from './placeholderCover';
import hhIcon from '../assets/projectphotos/hhicon.png';
import warmanIcon from '../assets/projectphotos/warmanicon.png';
import xyIcon from '../assets/projectphotos/xyicon.png';
import styles from './projects.module.css';

// Reduced to the 3 projects with ready-made case icons; each icon already
// has the jewel case artwork + photo baked in, so no separate jewelcase
// background + inset image is needed anymore. Order matches `featured` below.
const caseIcons = [hhIcon, xyIcon, warmanIcon];
const featured = getFeaturedProjects().slice(0, 3);

function FeaturedCarousel() {
    // "centered on 3rd item on startup" -> index 2, clamped for shorter lists
    const startIndex = Math.min(2, featured.length - 1);
    const [activeIndex, setActiveIndex] = useState(startIndex);
    const [showDetails, setShowDetails] = useState(false);
    const containerRef = useRef(null);
    const itemRefs = useRef([]);

    useEffect(() => {
        const el = itemRefs.current[startIndex];
        if (el) el.scrollIntoView({ behavior: 'auto', inline: 'center', block: 'nearest' });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // "hover scroll" — hovering the carousel + using the mouse wheel scrolls
    // it horizontally instead of the page scrolling vertically
    const handleWheel = useCallback((e) => {
        if (!containerRef.current) return;
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.preventDefault();
            containerRef.current.scrollLeft += e.deltaY;
        }
    }, []);

    const handleScroll = useCallback(() => {
        const container = containerRef.current;
        if (!container) return;
        const containerCenter = container.scrollLeft + container.clientWidth / 2;
        let closestIndex = 0;
        let closestDistance = Infinity;
        itemRefs.current.forEach((el, i) => {
            if (!el) return;
            const itemCenter = el.offsetLeft + el.offsetWidth / 2;
            const distance = Math.abs(itemCenter - containerCenter);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = i;
            }
        });
        setActiveIndex(closestIndex);
    }, []);

    const goToItem = (i) => {
        const el = itemRefs.current[i];
        if (el) el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    };

    const activeProject = featured[activeIndex];

    return (
        <section className={styles.featuredSection}>
            {/* .carouselStage is the full-viewport-width, positioned
                ancestor: it's what lets the jewel cases bleed off both
                edges of the page, and what the overlaid title/description
                text is positioned against (see projects.module.css). */}
            <div className={styles.carouselStage}>
                {activeProject && (
                    <div className={styles.featuredTextLeft}>
                        <h3>{activeProject.title}</h3>
                        <p className={styles.featuredDate}>{activeProject.date}</p>
                        <p className={styles.featuredSubtitle}>{activeProject.subtitle}</p>
                    </div>
                )}

                <div
                    className={styles.carouselTrack}
                    ref={containerRef}
                    onWheel={handleWheel}
                    onScroll={handleScroll}
                >
                    {featured.map((project, i) => (
                        <div
                            key={project.id}
                            ref={(el) => (itemRefs.current[i] = el)}
                            className={`${styles.carouselItem} ${i === activeIndex ? styles.carouselItemActive : ''}`}
                            onClick={() => goToItem(i)}
                        >
                            <div className={styles.carouselCaseWrapper}>
                                <img
                                    src={caseIcons[i]}
                                    alt={project.title}
                                    className={styles.carouselCaseImage}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {activeProject && (
                    <p className={styles.featuredDescription}>{activeProject.featured_description}</p>
                )}
            </div>

            {!showDetails && activeProject && (
                <button
                    className={styles.seeMoreButton}
                    onClick={() => setShowDetails(true)}
                >
                    see more
                </button>
            )}

            <div className={`${styles.detailsPanel} ${showDetails ? styles.detailsPanelOpen : ''}`}>
                {activeProject && (
                    <>
                        <button className={styles.detailsBackButton} onClick={() => setShowDetails(false)}>
                            ← back
                        </button>
                        <div className={styles.popupCover}>
                            {activeProject.cover ? (
                                <img src={activeProject.cover} alt={activeProject.title} />
                            ) : (
                                <PlaceholderCover />
                            )}
                        </div>
                        <h3>{activeProject.title}</h3>
                        <p className={styles.popupDate}>{activeProject.date}</p>
                        <p className={styles.popupSubtitle}>{activeProject.subtitle}</p>
                        <p className={styles.popupDescription}>{activeProject.description}</p>
                    </>
                )}
            </div>
        </section>
    );
}

export default FeaturedCarousel;