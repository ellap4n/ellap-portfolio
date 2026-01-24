import React from 'react'
import './card.module.css';
import styles from './card.module.css';

function Card({ title, description, image, variant = 'default' }) {
    {/* Skills Card */ }
    return (
        <div className={`${styles.cardStyle} ${styles[variant]}`}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Card