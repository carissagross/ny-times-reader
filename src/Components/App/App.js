import React, { Component } from 'react'
import './App.css';
import Header from '../Header/Header'
import ArticleContainer from '../ArticleContainer/ArticleContainer'
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
    // console.log(this.state.articles)
    return (
      <main className='app'>
        <p className='error'>{this.state.error}</p>
        <Header />
        <ArticleContainer articles={this.state.articles} />
      </main>
    )
  }
}
export default App;
