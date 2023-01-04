import React from 'react'
import './ArticleDetails.css'

const ArticleDetails = ({ articles }) => {
    return (
        <section className='details-container'>
            <div className='article-details'>
                <p className='article-title'>{articles.title}</p>
                <p className='article-byline'>{articles.byline}</p>
                <p className='description'>{articles.abstract}</p>
                <button className='article-url'>{articles.url}</button>
            </div>
            <div className='image-wrapper'>
                <img src={articles.multimedia[0].uri} alt={articles.title} />
            </div>
            <button>Home</button>
        </section>
    )
}
export default ArticleDetails