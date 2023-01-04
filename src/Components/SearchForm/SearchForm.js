import React, { Component } from 'react'
import './SearchForm.css'

class SearchForm extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className='search-container'>
                <form>
                    <input
                        type='text'
                        placeholder='Search Articles'
                    />
                    <button className='search-button'>Search</button>
                </form>
            </div>
        )
    }
}
export default SearchForm
