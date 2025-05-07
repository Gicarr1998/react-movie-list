import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import '../css/Fanta.css'

function NavBar() {
    return (
        <nav className='navbar'>
            <div className='navbar-brand'>
                <h1>
                    <Link to='/' className='text-gradient'>123Movies</Link>
                </h1>
            </div>
            <div className='navbar-links'>
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/favorites' className='nav-link'>Favorites</Link>
            </div>
        </nav>
    )
}

export default NavBar