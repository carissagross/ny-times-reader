import React, { Component } from 'react'
import './App.css';
import Header from '../Header/Header'
import { getNews } from '../../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      news: []
    }
  }

  componentDidMount = () => {
    getNews()
    .then(data => this.setState({news: data}))
    .catch(error => this.setState({error: 'Error loading news articles, please try again!'}))
  }
  render() {
    console.log(this.state.news)
    return (
      <main className='news-reader'>
        <Header />
      </main>
    )
  }
}
export default App;
