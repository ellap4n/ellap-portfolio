import React from 'react'
import './scrollreveal.module.css';
import styles from './scrollreveal.module.css';
import downArrow from '../assets/down.png';

function AboutMe() {
    {/* About Me Section */ }

    const handleScrollToSkills = (e) => {
        e.preventDefault();
        const skillsSection = document.getElementById('skillsSection');
        const navbarHeight = 80; // Adjust this value based on your navbar height
        const offsetPosition = skillsSection.offsetTop - navbarHeight;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    return (
        <div className={styles.aboutMeContainer}>
            <div className={styles.aboutMe}>
                <div className={styles.aboutMeText}>
                    <h1>Welcome to my portfolio!</h1>
                    <p>Currently in my 2nd year studying a conjoint in Mechatronics Engineering and Fine Arts at UoA, my interests has always been in the intersection of the creative arts, and the technical world of physics and maths. I believe art and engineering coexist to not only solve problems but also empower and inspire users. Areas I find myself most drawn to in this is wearable medical devices like prosthetics. I am also interested in the fluid dynamics space, and its application in medical technology and sustainable energy. Engineering is to me, another means of reaching out a hand to our local and global communities, and helping people in need through innovation and design.
                    </p>
                </div>
            </div>
            <a href="#skillsSection" onClick={handleScrollToSkills}>
                <img src={downArrow} alt="Down Arrow" className={styles.downArrowImg} />
            </a>
            <p className={styles.imageDescriptionText}>
                Image taken in Otaku, Sapporo (札幌市, 北海道), Jan 2025. Mju Olympus I, Kodak Gold 400. </p>
        </div>
    )
}

export default AboutMe