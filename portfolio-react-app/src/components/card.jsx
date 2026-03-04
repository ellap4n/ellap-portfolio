import React from 'react'
import './card.module.css';
import styles from './card.module.css';

function Card({ title, description, artdescription, artdate, medium, date, mainimage, mainvideo, image1, image2, image3, variant = 'default', style = {}, isExpanded = false }) {
    {/* Skills Card */ }
    return (
        <div className={`${styles.cardStyle} ${styles[variant]}`} style={style}>
            <h4>{title}</h4>
            <h5>{medium !== undefined ? ' ' + medium : ''} </h5>
            <h6> {date}</h6>
            <div className={styles.cardContent}>
                <div className={styles.textContent}>
                    {description && <div>{description}</div>}
                </div>
                {(mainimage || mainvideo || image1 || image2 || image3) && (
                    <div className={styles.mainProjectImageLayout}>
                        {(image1 || image2) && (
                            <div className={styles.imageStackLayout}>
                                {image1 && <img src={image1} className={styles.imageStacked} />}
                                {image2 && <img src={image2} className={styles.imageStacked} />}
                            </div>
                        )}
                        {image3 && <img src={image3} className={styles.imageSkinny} />}
                        {mainvideo ? (
                            <video src={mainvideo} className={styles.mainImage} controls />
                        ) : (
                            mainimage && <img src={mainimage} className={styles.mainImage} />
                        )}
                    </div>
                )}
            </div>
            <div
                className={styles.artdescriptionWrapper}
                style={{
                    maxHeight: isExpanded ? '200px' : '0px',
                    opacity: isExpanded ? 1 : 0,
                }}
            >
                {artdate && <h6>{artdate}</h6>}
                <div className={styles.artdescription}>{artdescription}</div>
            </div>
        </div>
    )
}

export default Card