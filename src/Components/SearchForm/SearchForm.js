import React, { Component } from 'react'
import './SearchForm.css'

class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
    }

    handleChange = (event) => {
        const { value } = event.target
        this.setState({search: value})
        this.props.searchForArticle(value);
    }
    
   clearInput = () => {
        this.setState({searchInput: ''})
    }

    render() {
        return (
            <div className='search-container'>
               <form>
                    <input
                        type='text'
                        name='search'
                        value={this.state.search}
                        placeholder='Search Articles by Title'
                        onChange={this.handleChange}
                    />
                    {/* <button className='search-button'>Search</button> */}
                </form>
            </div>
        )
    }
}
export default SearchForm
