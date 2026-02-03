import '../../App.css';
import './gallery.module.css';
import styles from './gallery.module.css';
import Card from '../../components/card';

function ArtAboutMe() {
    return (
        <div className={styles.commissionSection}>
            <h2 className={styles.galleryHeading} style={{ color: '#ffffff' }}>As An Artist ...</h2>
            <div className={styles.commissionContainer}>
                <Card title="Ellafwknesdc" description={<p>If you are interested in commissioning a custom art piece, please reach out via the contact page. I am open to various mediums including digital art, traditional painting, and photography. Let's create something unique together!</p>} variant="commissionCard" />
            </div>
        </div >
    );
}

export default ArtAboutMe;