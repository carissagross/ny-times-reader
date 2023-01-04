import React from 'react'
import { Link } from "react-router-dom";
import './ArticleCard.css'

const ArticleCard = ({ title, image, date, key }) => {
    const month = date.slice(6, 7)
    const day = date.slice(8, 10)
    const year = date.slice(0, 4)
    // 2023-01-03T12:56:04-05:00
    
    return (
        <Link to={`${date}`} className='article-card'>
            <div className='article-wrapper'>
                <img className='card-image' src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p className='article-date'>{month}/{day}/{year}</p>
        </Link>
    )
}
export default ArticleCard