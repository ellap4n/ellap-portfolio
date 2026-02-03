import '../../App.css';
import './gallery.module.css';
import styles from './gallery.module.css';
import Card from '../../components/card';

function HighlightPiece() {
    return (
        <div className={styles.highlightPiece}>
            <div className={styles.highlightPieceContainer}>
                <h2 >Highlighted Art Piece</h2>
                <Card title="Sunset Overdrive" description={<p>Acrylic on Canvas, 2023. This piece explores the vibrant colors of a cityscape during sunset, capturing the dynamic interplay of light and shadow.</p>} variant="highlightCard" />
            </div>
        </div >
    );
}

export default HighlightPiece