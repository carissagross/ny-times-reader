import React from 'react'
import './ArticleContainer.css'

const ArticleContainer = ({ articles }) => {
    const articleCards = articles.map(article => {
        return (
            <ArticleCards
            title={article.title}
            image={article.multimedia[0]}
            date={article.published_date}
            key={article.uri}
            />
        )
    })
    return (
        <div className = 'article-container'>
            {articleCards}
        </div>
    )
}
export default ArticleContainer