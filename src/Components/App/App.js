import React, { Component } from 'react'
import './App.css';
import Header from '../Header/Header'
import ArticleContainer from '../ArticleContainer/ArticleContainer'
import { getNews } from '../../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      articles: []
    }
  }
  componentDidMount = () => {
    getNews()
    .then(data => this.setState({articles: data.results}))
    .catch(error => this.setState({error: 'Error loading news articles, please try again!'}))
  }
  render() {
    // console.log(this.state.articles)
    return (
      <main className='news-container'>
        <Header />
        <ArticleContainer articles={this.state.articles} />
      </main>
    )
  }
}
export default App;
