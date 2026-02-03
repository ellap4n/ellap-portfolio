import React, { useState, useEffect, useRef } from 'react';
import './scrollreveal.module.css';
import styles from './scrollreveal.module.css';
import AboutMe from './aboutme';

function ScrollReveal() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            // Calculate how far scrolled through the section (0 to 1)
            const progress = Math.min(Math.max(-rect.top / (rect.height - windowHeight), 0), 1);
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            {/* Spacer to allow scrolling */}
            <div style={{ height: '25vh', background: '#04326b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            </div>
            {/* Sticky section that animates */}
            <div ref={containerRef} style={{ height: '200vh' }}>
                <div style={{
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    overflow: 'hidden',
                    display: 'flex'
                }}>
                    {/* Title Section - slides left */}
                    <div className={styles.titleSection}
                        style={{
                            transform: `translateX(${-scrollProgress * 100}%)`,
                            transition: 'transform 0.1s linear',
                        }}>
                        <div style={{ textAlign: 'left', color: '#fff' }}>
                            <h1 style={{ fontSize: '128px', margin: 0 }}>ELLA PAN</h1>
                            <p style={{ fontSize: '20px', opacity: 0.7 }}>Bachelor of Engineering/Bachelor of Fine Arts</p>
                            <p style={{ fontSize: '20px', opacity: 0.7 }}>University of Auckland</p>
                        </div>
                    </div>

                    {/* Information Section - revealed underneath */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: '#0f3460',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1
                    }}>
                        <AboutMe />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ScrollReveal;