import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import Header from '../Header/Header'
import ArticleContainer from '../ArticleContainer/ArticleContainer'
import ArticleDetails from '../ArticleDetails/ArticleDetails'
import { getNews } from '../../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      error: ''
    }
  }
  componentDidMount = () => {
    getNews()
      .then(data => this.setState({ articles: data.results }))
      .catch(error => this.setState({ error: 'Error loading news articles, please try again!' }))
  }
  render() {
    return (
      <main className='app'>
        <p className='error'>{this.state.error}</p>
        <Header />
        <ArticleContainer articles={this.state.articles} />
        <Route exact path='/:date' render={({ match }) => {
          const singleArticle = this.state.articles.find(article => article.published_date === match.params.date)
          return <ArticleDetails article={singleArticle} />
        }} />
      </main>
    )
  }
}
export default App;
