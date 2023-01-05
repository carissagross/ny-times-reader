import React from 'react'
import './ArticleContainer.css'
import ArticleCard from '../ArticleCard/ArticleCard'

const ArticleContainer = ({ articles, searchForm }) => {
    let articleCards;

    if (!searchForm) {
        articleCards = articles.map((article) => {
            return (
                <ArticleCard
                title={article.title}
                image={article.multimedia[0].url}
                date={article.published_date}
                key={article.title}
            />
            )
        })
    } else {
        articleCards = articles.reduce((acc, article) => {
            if (article.title.toLowerCase().includes(searchForm.toLowerCase())) {
                acc.push (
                    <ArticleCard
                    title={article.title}
                    image={article.multimedia[0].url}
                    date={article.published_date}
                    key={article.title}
                />
                )
            }
            return acc
        }, [])
    }

    return (
        <div className='article-container'>
            {/* {cardData.length ? cardData : <p className='search-error'>Oops! Nothing matches!</p>} */}
            {articleCards}
        </div>
    )
}
export default ArticleContainer