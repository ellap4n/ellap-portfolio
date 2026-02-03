import React from 'react'
import './card.module.css';
import styles from './card.module.css';

function Card({ title, description, artdescription, artdate, medium, date, variant = 'default', style = {}, isExpanded = false }) {
    {/* Skills Card */ }
    return (
        <div className={`${styles.cardStyle} ${styles[variant]}`} style={style}>
            <h3>{title}</h3>
            <h5>{medium !== undefined ? ' ' + medium : ''} </h5>
            <h6> {date}</h6>
            <div>{description}</div>
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