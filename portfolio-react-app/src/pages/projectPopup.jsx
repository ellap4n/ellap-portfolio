import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProjectById } from './projectsData';
import PlaceholderCover from './placeholderCover';
import { CloseIcon } from './icons';
import styles from './projects.module.css';

// Renders one inline image template. Pass 1, 2, or 3 images and it picks
// the matching layout (single 19:6 banner / 4:3 pair / 3-across) automatically.
function ImageRow({ images }) {
    if (!images || images.length === 0) return null;

    const rowClass =
        images.length === 1
            ? styles.popupImageRowSingle
            : images.length === 2
                ? styles.popupImageRowTwo
                : styles.popupImageRowThree;

    return (
        <div className={`${styles.popupImageRow} ${rowClass}`}>
            {images.map((img, i) => (
                <figure key={i} className={styles.popupImageFigure}>
                    <div
                        className={styles.popupImageMedia}
                        style={img.height ? { maxHeight: img.height } : undefined}
                    >
                        {img.src ? <img src={img.src} alt={img.caption || ''} /> : <PlaceholderCover />}
                    </div>
                    {img.caption && <figcaption className={styles.popupImageCaption}>{img.caption}</figcaption>}
                </figure>
            ))}
        </div>
    );
}

function ProjectPopup({ projectId }) {
    const navigate = useNavigate();
    const project = getProjectById(projectId);

    const close = () => navigate('/projects');

    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && close();
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!project) return null;

    return (
        <div className={styles.popupOverlay} onClick={close}>
            <div className={styles.popupCard} onClick={(e) => e.stopPropagation()}>
                <button className={styles.popupClose} onClick={close} aria-label="close">
                    <CloseIcon />
                </button>

                <div className={styles.popupCover}>
                    {project.cover ? (
                        <img src={project.cover} alt={project.title} />
                    ) : (
                        <PlaceholderCover />
                    )}
                </div>

                <h2>{project.title}</h2>
                <p className={styles.popupSubtitle}>{project.subtitle}</p>
                <p className={styles.popupDate}>{project.date}</p>

                {/* main body: an ordered mix of text, inline image rows, and
                    videos, written out in projectsData.js — arrange blocks
                    in whatever order tells the project's story best */}
                {project.body?.map((block, i) => {
                    if (block.type === 'text') {
                        return (
                            <p key={i} className={styles.popupDescription}>
                                {block.content}
                            </p>
                        );
                    }
                    if (block.type === 'image') {
                        return <ImageRow key={i} images={block.images} />;
                    }
                    if (block.type === 'video') {
                        return (
                            <video
                                key={i}
                                src={block.src}
                                controls
                                className={styles.popupVideo}
                            />
                        );
                    }
                    if (block.type === 'list') {
                        return (
                            <ul key={i} className={styles.popupList}>
                                {block.items.map((item, j) => (
                                    <li key={j}>{item}</li>
                                ))}
                            </ul>
                        );
                    }
                    return null;
                })}

                {/* named write-up sections, e.g. "Reflection" — add as many
                    as you like per project in projectsData.js */}
                {project.sections?.map((section, i) => (
                    <div key={i} className={styles.popupSection}>
                        <h3 className={styles.popupSectionHeading}>{section.heading}</h3>
                        <p className={styles.popupDescription}>{section.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectPopup;