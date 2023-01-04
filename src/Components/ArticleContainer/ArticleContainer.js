import React from 'react'
import './ArticleContainer.css'
import ArticleCard from '../ArticleCard/ArticleCard'

const ArticleContainer = ({ articles }) => {
    console.log(articles)
    const cards = articles.map(article => {
        return (
            <ArticleCard
                title={article.title}
                image={article.multimedia[0].url}
                date={article.published_date}
                key={article.url}
            />
        )
    })

    if (articles === undefined) {
        return <p className='loading'>Articles are loading!</p>
    } else {
        return (
            <div className='wrapper'>
                <div className='search-container'>
                    <form>
                        <input
                            type='text'
                            placeholder='Search Articles'
                        />
                        <button className='search-button'>Search</button>
                    </form>
                </div>
                <div className='article-container'>
                    {cards}
                </div>
            </div>
        )
    }
}
export default ArticleContainer