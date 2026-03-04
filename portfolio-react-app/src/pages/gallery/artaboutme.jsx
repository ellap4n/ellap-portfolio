import '../../App.css';
import './gallery.module.css';
import styles from './gallery.module.css';
import Card from '../../components/card';

function ArtAboutMe() {
    return (
        <div className={styles.commissionSection}>
            <h2 className={styles.galleryHeading} style={{ color: '#ffffff' }}>ARTIST VISION</h2>
            <div className={styles.commissionContainer}>
                <Card description={<p>As a multi-media artist</p>} variant="commissionCard" />
            </div>
        </div >
    );
}

export default ArtAboutMe;