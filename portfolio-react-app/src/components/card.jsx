import React from 'react'
import './card.module.css';
import styles from './card.module.css';

function Card({ title, description, variant = 'default' }) {
    {/* Skills Card */ }
    return (
        <div className={`${styles.cardStyle} ${styles[variant]}`}>
            <h3>{title}</h3>
            <div>{description}</div>
        </div>
    )
}

export default Card