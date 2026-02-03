import React from 'react'
import './card.module.css';
import styles from './card.module.css';

function Card({ title, description, date, variant = 'default', style = {} }) {
    {/* Skills Card */ }
    return (
        <div className={`${styles.cardStyle} ${styles[variant]}`} style={style}>
            <h3>{title}</h3>
            <h5>{date}</h5>
            <div>{description}</div>
        </div>
    )
}

export default Card