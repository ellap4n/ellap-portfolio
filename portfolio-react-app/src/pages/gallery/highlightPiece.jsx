import '../../App.css';
import './gallery.module.css';
import styles from './gallery.module.css';
import Card from '../../components/card';

function HighlightPiece() {
    return (
        <div className={styles.highlightPiece}>
            <div className={styles.highlightPieceContainer}>
                <h2 style={{ fontFamily: 'Hiker TM, sans-serif', fontSize: 'calc(30vh + 100px)', color: '#beff46' }} >gALlERY.</h2>
            </div>
            <p className={styles.imageDescriptionText}>"Sapporo Station", 2024. 35mm Analogue Film, MJU Olympus I Fujifilm 400 Prenium.</p>
        </div >
    );
}

export default HighlightPiece