import React, { useState, useEffect, useRef } from 'react';
import styles from './scrollreveal.module.css';
import AboutMe from './aboutme';
import altero from '../assets/fonts/Altero-Regular.otf';
import dirtystains from '../assets/fonts/DirtyStains.otf';
import nineties from '../assets/fonts/NinetiesDisplay.otf';
import chunkbold from '../assets/fonts/Chunk-Bold.otf';
import monext from '../assets/fonts/MonumentExtended-Regular.otf';
import monextbold from '../assets/fonts/MonumentExtended-Ultrabold.otf';
import minihanzhen from '../assets/fonts/mini-hanzhen-simplified.ttf';


/* ─────────────────────────────────────────────
   BLOB CONFIGS
   size        – diameter in px
   lag         – how fast it chases the mouse (lower = floatier)
   morphSpeed  – how fast the shape mutates
   offsetX/Y   – static offset from cursor so blobs fan out
   ───────────────────────────────────────────── */
const BLOB_CONFIGS = [
    { size: 250, lag: 0.05, morphSpeed: 3, offsetX: 10, offsetY: 2 },
];

/* 8 random values used for the two-value border-radius shorthand */
function randomRadii() {
    return Array.from({ length: 8 }, () => 30 + Math.random() * 16);
}

function ScrollReveal() {
    // ── scroll progress ──
    const [scrollProgress, setScrollProgress] = useState(0);
    const containerRef = useRef(null);
    const stickyRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const progress = Math.min(Math.max(-rect.top / (rect.height - window.innerHeight), 0), 1);
            setScrollProgress(progress);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ── blob animation state ──
    const mouseRef = useRef({ x: -999, y: -999 });
    const blobsRef = useRef(
        BLOB_CONFIGS.map(() => ({
            x: -999, y: -999,
            currentRadii: randomRadii(),
            targetRadii: randomRadii(),
            morphT: Math.random(),
        }))
    );
    const rafRef = useRef(null);
    const [blobStyles, setBlobStyles] = useState(() =>
        BLOB_CONFIGS.map(cfg => ({
            left: -999, top: -999,
            width: cfg.size, height: cfg.size,
            borderRadius: '50%',
        }))
    );

    // ── mouse tracking – coords relative to the sticky container ──
    useEffect(() => {
        const onMove = (e) => {
            if (!stickyRef.current) return;
            const rect = stickyRef.current.getBoundingClientRect();
            mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        };
        window.addEventListener('mousemove', onMove);
        return () => window.removeEventListener('mousemove', onMove);
    }, []);

    // ── rAF loop ──
    useEffect(() => {
        let lastTime = performance.now();

        const tick = (now) => {
            const dt = Math.min((now - lastTime) / 16.67, 3);
            lastTime = now;

            const { x: mx, y: my } = mouseRef.current;
            const blobs = blobsRef.current;
            const next = [];

            blobs.forEach((blob, i) => {
                const cfg = BLOB_CONFIGS[i];

                // lerp position
                blob.x += (mx + cfg.offsetX - blob.x) * cfg.lag * dt;
                blob.y += (my + cfg.offsetY - blob.y) * cfg.lag * dt;

                // morph border-radius
                blob.morphT += 0.014 * cfg.morphSpeed * dt;
                if (blob.morphT >= 1) {
                    blob.currentRadii = blob.targetRadii;
                    blob.targetRadii = randomRadii();
                    blob.morphT = 0;
                }
                const t = blob.morphT;
                const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                const r = blob.currentRadii.map((v, idx) => v + (blob.targetRadii[idx] - v) * ease);

                next.push({
                    left: blob.x - cfg.size / 2,
                    top: blob.y - cfg.size / 2,
                    width: cfg.size,
                    height: cfg.size,
                    borderRadius: `${r[0]}% ${r[1]}% ${r[2]}% ${r[3]}% / ${r[4]}% ${r[5]}% ${r[6]}% ${r[7]}%`,
                });
            });

            setBlobStyles(next);
            rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current);
    }, []);

    return (
        <div>
            <style>{`
                @font-face {
                    font-family: 'Chunk Bold';
                    src: url(${chunkbold}) format('opentype');
                    font-weight: normal;
                    font-style: normal;
                }
                @font-face {
                    font-family: 'Mini Hanzhen';
                    src: url(${minihanzhen}) format('truetype');
                    font-weight: normal;
                    font-style: normal;
                }
            `}</style>

            {/* scroll driver */}
            <div ref={containerRef} style={{ height: '200vh' }}>
                {/* sticky viewport */}
                <div
                    ref={stickyRef}
                    style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}
                >
                    {/* ── LAYER 1 (back): AboutMe – always visible underneath ── */}
                    <div
                        style={{
                            transform: `translateY(${(1 - scrollProgress) * 100}px)`,
                            transition: 'transform 0.1s linear',
                        }}
                    >
                        <AboutMe />
                    </div>

                    {/* ── LAYER 2: Title – slides left on scroll, sits on top ── */}
                    <div
                        className={styles.titleSection}
                        style={{
                            transform: `translateX(${-scrollProgress * 100}%)`,
                            transition: 'transform 0.1s linear',
                        }}
                    >
                        <div className={styles.titleTextContainer}>
                            <h1 style={{ fontFamily: 'Chunk Bold, sans-serif', fontSize: '190px', margin: 0, lineHeight: '0.7', marginBottom: 50 }}>ella <br /> pan. </h1>
                            <p style={{ fontSize: '18px', opacity: 0.7, }}>Bachelor of Engineering / Bachelor of Fine Arts</p>
                            <p style={{ fontSize: '18px', opacity: 0.7, lineHeight: '0.2' }}>University of Auckland</p>
                        </div>
                    </div>

                    {/* ── LAYER 3: Blob "windows" ── */}
                    <div style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none', opacity: scrollProgress > 0.01 ? 0 : 1, transition: 'opacity 0.6s ease' }}>
                        {blobStyles.map((s, i) => (
                            <div key={i} style={{
                                position: 'absolute',
                                left: s.left,
                                top: s.top,
                                width: s.width,
                                height: s.height,
                                borderRadius: s.borderRadius,
                                overflow: 'hidden',
                                // ── glassy effect ──
                                backdropFilter: 'blur(2px) brightness(1.05)',
                                WebkitBackdropFilter: 'blur(2px) brightness(1.05)',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.08) 100%)',
                                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.1), 0 2px 12px rgba(0,0,0,0.15)',
                            }}>
                                {/* content offset so it aligns with the base AboutMe layer */}
                                <div style={{
                                    position: 'absolute',
                                    left: -s.left,
                                    top: -s.top,
                                    width: '100vw',
                                    height: '100vh',
                                    background: '#0f3460',
                                }}>
                                    <div
                                        className={styles.titleSectionBehind}
                                        style={{
                                            transform: `translateX(${-scrollProgress * 100}%)`,
                                            transition: 'transform 0.1s linear',
                                        }}
                                    >
                                        <div className={styles.titleTextContainer} style={{ color: '#e2ff3b' }}>
                                            <h1 style={{ fontFamily: 'Mini Hanzhen, sans-serif', fontSize: '210px', margin: 0, lineHeight: '1', textShadow: '0 0 10px rgba(174, 255, 61, 0.7)', marginBottom: 50 }}>潘逸鹛</h1>
                                            <p style={{ fontSize: '18px', opacity: 0.7 }}>三年级 工学学士 / 美术学士</p>
                                            <p style={{ fontSize: '18px', opacity: 0.7, lineHeight: '0.2' }}>奥克兰大学</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ScrollReveal;