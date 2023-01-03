import React from 'react'
import './ArticleCard.css'

const ArticleCard = ({ title, image, date, key }) => {
    return (
        <div className='article-card'>
            <h3>{title}</h3>
            <div className='article-wrapper'>
                <img className='card-image' src={image} alt={title} />
            </div>
            <p className='article-date'>{date}</p>
        </div>
    )
}
export default ArticleCard