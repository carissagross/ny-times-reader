import React from 'react'
import { Link } from "react-router-dom";

import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/' style={{ textDecoration: 'none' }} >
                <h1>NEW YORK TIMES</h1>
                <h2>News Reader</h2>
                {/* <p className='date'>Date.now()</p> */}
            </Link>
        </div>
    )
}
export default Header