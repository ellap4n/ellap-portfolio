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
                    <p style={{ fontSize: '1.125rem', lineHeight: '1.25rem' }}>Kia Ora! I am a penultimate Mechatronics/Fine Arts Conjoint student at the University of Auckland. My studies blend the best of both brains, and I believe that art and engineering coexist to not only solve problems but also empower and inspire users. I've been lucky enough to have the opportunity to explore this this year through the Heart Hackathon - a global team competition to design a Total Artificial Heart. Engineering is to me, another means of reaching out a hand to our local and global communities, and helping people in need through innovation and design.
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