import React from 'react'
import './ArticleDetails.css'
import { Link } from "react-router-dom";

const ArticleDetails = ({ article }) => {
    console.log({ article })
    return (
        <section className='details-container'>
            <div className='article-details'>
                <p className='article-title'>{article.title}</p>
                <p className='description'>{article.abstract}</p>
                <p className='article-byline'>{article.byline}</p>
                <a href={article.short_url} target="_blank">
                    <u>View Full Article</u>
                </a>
            </div>
            <div className='image-wrapper'>
                <img src={article.multimedia[0].url} alt={article.title} />
            </div>
            <Link to='/'><button className='home-button'>HOME</button>
            </Link>
        </section>
    )
}
export default ArticleDetails