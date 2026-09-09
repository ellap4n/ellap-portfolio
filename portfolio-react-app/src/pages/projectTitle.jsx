import styles from './projects.module.css';

function ProjectTitle() {
    return (
        <div className={styles.title}>
            <div className={styles.titleContainer}>
                <h2 style={{ fontFamily: 'Hiker TM, sans-serif', fontSize: 'calc(30vh + 100px)', color: '#beff46' }} >PRoJectS.</h2>
            </div>
            <p className={styles.imageDescriptionText}>"Taiwan", 2024. 35mm Analogue Film, MJU Olympus I Fujifilm 400 Prenium.</p>
        </div >
    );
}

export default ProjectTitle;