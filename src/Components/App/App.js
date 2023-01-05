import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import Header from '../Header/Header'
import ArticleContainer from '../ArticleContainer/ArticleContainer'
import ArticleDetails from '../ArticleDetails/ArticleDetails'
import SearchForm from '../SearchForm/SearchForm'
import { getNews } from '../../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      searchForm: '',
      error: ''
    }
  }

  searchForArticle = (input) => {
    this.setState({searchForm: input})
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
        <Route exact path='/' component={SearchForm} searchForArticle={this.searchForArticle} />
        {/* <SearchForm searchForArticle={this.searchForArticle} /> */}
        <Route exact path='/' render={() => <ArticleContainer articles={this.state.articles} searchForm={this.state.searchForm} />} />
        <Route exact path='/:title' render={({ match }) => {
          const singleArticle = this.state.articles.find(article => article.title === match.params.title)
          return <ArticleDetails article={singleArticle} />
        }} />
      </main>
    )
  }
}
export default App;
