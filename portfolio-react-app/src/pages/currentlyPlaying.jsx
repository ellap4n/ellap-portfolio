import { useState } from 'react';
import { currentlyWorkingOn } from './projectsData';
import PlaceholderCover from './placeholderCover';
import { PlayIcon, PauseIcon, PrevIcon, NextIcon, ShuffleIcon, VolumeIcon } from './icons';
import styles from './projects.module.css';

// Replaces your old favProject.jsx. Keeps the same `id="favproject"` anchor
// so the homepage's click-through / hash link still scrolls here correctly
// (ProjectPage.jsx's scrollIntoView-on-hash logic is unchanged).
//
// Content comes from `currentlyWorkingOn` in projectsData.js — edit that
// object directly, it doesn't need to correspond to a project card.
function CurrentlyPlaying() {
    const [isPlaying, setIsPlaying] = useState(true);
    const { title, subtitle, description, cover } = currentlyWorkingOn;

    return (
        <section id="favproject" className={styles.favProjectSection}>
            <div className={styles.currentlyIntro}>
                <h2>Currently working on . . .</h2>
                <h3 className={styles.currentlySubheading}>{title}</h3>
                <p>{description}</p>
            </div>

            <div className={styles.playerWidget}>
                <div className={styles.playerScreen}>
                    {cover ? <img src={cover} alt={title} /> : <PlaceholderCover />}
                </div>
                <p className={styles.playerTitle}>{title.toLowerCase()}</p>
                {subtitle && <p className={styles.playerSubtitle}>{subtitle}</p>}
                <div className={styles.playerControls}>
                    <VolumeIcon />
                    <PrevIcon />
                    <button
                        className={styles.playPauseButton}
                        onClick={() => setIsPlaying((p) => !p)}
                        aria-label={isPlaying ? 'pause' : 'play'}
                    >
                        {isPlaying ? <PauseIcon /> : <PlayIcon />}
                    </button>
                    <NextIcon />
                    <ShuffleIcon />
                </div>
            </div>
        </section>
    );
}

export default CurrentlyPlaying;