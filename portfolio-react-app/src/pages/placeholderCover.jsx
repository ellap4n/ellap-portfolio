import styles from './projects.module.css';

// Shown anywhere an image/video hasn't been uploaded yet
// (album covers, popup gallery, player widget, etc).
function PlaceholderCover({ label = 'image coming soon', className = '' }) {
    return (
        <div className={`${styles.placeholderCover} ${className}`}>
            <span>{label}</span>
        </div>
    );
}

export default PlaceholderCover;