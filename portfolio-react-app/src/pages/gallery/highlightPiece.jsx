import '../../App.css';
import './gallery.module.css';
import styles from './gallery.module.css';
import Card from '../../components/card';

function HighlightPiece() {
    return (
        <div className={styles.highlightPiece}>
            <div className={styles.highlightPieceContainer}>
                <h2 style={{ fontFamily: 'Hiker TM, sans-serif', fontSize: 'calc(30vh + 100px)', color: '#aeff3d' }} >gALlERY.</h2>
            </div>
            <p className={styles.imageDescriptionText}>"A piece of art here", 2025. Oil on Canvas 18in x 24in</p>
        </div >
    );
}

export default HighlightPiece