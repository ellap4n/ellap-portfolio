import { Link } from 'react-router-dom';
import './scrollreveal.module.css';
import styles from './scrollreveal.module.css';

function AboutMe() {
    {/* About Me Section */ }

    return (
        <div className={styles.aboutMeContainer}>
            <div className={styles.aboutMe}>
                <div className={styles.aboutMeText}>
                    <h1 style={{ fontFamily: 'MANIC, system-ui, Avenir, Helvetica, Arial, sans-serif' }}>A LITTLE ABOUT ME</h1>
                    <p>Currently in my 2nd year studying a conjoint in Mechatronics Engineering and Fine Arts at UoA, my interests has always been in the intersection of the creative arts, and the technical world of physics and maths. I believe art and engineering coexist to not only solve problems but also empower and inspire users. Areas I find myself most drawn to in this is wearable medical devices like prosthetics. I am also interested in the fluid dynamics space, and its application in medical technology and sustainable energy. Engineering is to me, another means of reaching out a hand to our local and global communities, and helping people in need through innovation and design.
                    </p>
                    <Link to="/projects#favproject" style={{ color: 'white', fontSize: '1.25rem', lineHeight: '2rem' }}> See what I'm currently working on here! --{'>'}</Link>
                </div>
            </div>
            <p className={styles.imageDescriptionText}>
                Image taken in Otaku, Hokkaido (小樽市, 北海道), Dec 2024. Mju Olympus I, FujiFilm 200. </p>
        </div>
    )
}

export default AboutMe