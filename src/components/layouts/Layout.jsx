import React from 'react'
import NavBar from '../NavBar'
import Favorites from '../../pages/Favorites'
import Home from '../../pages/Home'
import { Routes, Route } from 'react-router-dom'
import { MovieProvider } from '../../contexts/MovieContext'

export default function Layout() {
    return (
        <div>
            <MovieProvider>
                <NavBar />
                <main className='main-content'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/favorites' element={<Favorites />} />
                    </Routes>
                </main>
            </MovieProvider>
        </div>
    )
}
