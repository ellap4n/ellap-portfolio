import '../../App.css';
import './gallery.module.css';
import styles from './gallery.module.css';
import Card from '../../components/card';

function ArtAboutMe() {
    return (
        <div className={styles.commissionSection}>
            <h2 className={styles.galleryHeading} style={{ color: '#ffffff' }}>ARTIST VISION</h2>
            <div className={styles.commissionContainer}>
                <Card description={<p>As a multi-media artist, as well as a engineering student, I explore the intersection of functionality and form, particulary in how that interacts with the often abstract contemporary art scene. I enjoy blending textiles, clay, and other mediums in my contemporary investigations, but am well versed in more traditional sketch and paint mediums as well. I love engaging with often overlooked, almost mundane details in the world around us, finding beauty in the awe of creation itself.</p>} variant="commissionCard" />
            </div>
        </div >
    );
}

export default ArtAboutMe;