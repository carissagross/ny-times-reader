import React from 'react'
import './ArticleDetails.css'

const ArticleDetails = ({ article }) => 
{
    console.log({article})

    return (
        <section className='details-container'>
            <div className='article-details'>
                <p className='article-title'>{article.title}</p>
                <p className='article-byline'>{article.byline}</p>
                <p className='description'>{article.abstract}</p>
                <p className='article-url'>{article.url}</p>
            </div>
            <div className='image-wrapper'>
                <img src={article.multimedia[0].url} alt={article.title} />
            </div>
            <button>Home</button>
        </section>
    )
}
export default ArticleDetails