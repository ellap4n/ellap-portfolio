import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects, CATEGORIES } from './projectsData';
import PlaceholderCover from './placeholderCover';
import { HeartIcon, AdjustIcon } from './icons';
import styles from './projects.module.css';

function ArchiveSection() {
    const [filter, setFilter] = useState('all');
    const [sortOpen, setSortOpen] = useState(false);
    const [favourites, setFavourites] = useState([]);
    const navigate = useNavigate();

    const filtered = useMemo(() => {
        if (filter === 'all') return projects;
        return projects.filter((p) => p.category === filter);
    }, [filter]);

    const toggleFavourite = (e, id) => {
        e.stopPropagation();
        setFavourites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));
    };

    return (
        <section id="archives" className={styles.archiveSection}>
            <div className={styles.archiveHeader}>
                <div className={styles.sortWrapper}>
                    <button className={styles.sortButton} onClick={() => setSortOpen((o) => !o)}>
                        <AdjustIcon />
                        sort by
                    </button>
                    {sortOpen && (
                        <div className={styles.sortMenu}>
                            <button
                                className={filter === 'all' ? styles.sortMenuItemActive : ''}
                                onClick={() => { setFilter('all'); setSortOpen(false); }}
                            >
                                All
                            </button>
                            {Object.entries(CATEGORIES).map(([key, val]) => (
                                <button
                                    key={key}
                                    className={filter === key ? styles.sortMenuItemActive : ''}
                                    onClick={() => { setFilter(key); setSortOpen(false); }}
                                >
                                    {val.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <h2 className={styles.archiveTitle}>ARCHIVES</h2>

                {/* spacer to balance the "sort by" control so the title stays centered */}
                <div className={styles.archiveHeaderSpacer} />
            </div>

            <div className={styles.archiveGrid}>
                {filtered.map((project) => (
                    <div
                        key={project.id}
                        className={styles.archiveCard}
                        onClick={() => navigate(`/projects/${project.id}`)}
                    >
                        <div className={styles.archiveCover}>
                            {project.cover ? (
                                <img src={project.cover} alt={project.title} />
                            ) : (
                                <PlaceholderCover />
                            )}
                        </div>
                        <div className={styles.archiveMeta}>
                            <div>
                                <div className={styles.archiveCardTitleRow}>
                                    {/* <span
                                        className={styles.categoryDot}
                                        style={{ backgroundColor: CATEGORIES[project.category]?.color }}
                                        title={CATEGORIES[project.category]?.label}
                                    /> */}
                                    <p className={styles.archiveCardTitle}>{project.title}</p>
                                </div>
                                <p className={styles.archiveCardSubtitle}>{project.subtitle}</p>
                                <p className={styles.archiveCardDate}>{project.date}</p>
                            </div>
                            <button
                                className={styles.favouriteButton}
                                onClick={(e) => toggleFavourite(e, project.id)}
                                aria-label="favourite project"
                            >
                                <HeartIcon filled={favourites.includes(project.id)} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ArchiveSection;