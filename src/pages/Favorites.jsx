import React from 'react'
import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'
import { useNavigate } from 'react-router-dom'

function Favorites() {
    const { favorites } = useMovieContext()
    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }


    if (favorites && favorites.length > 0) {
        return (
            <div className='favorites'>
                <h2>Your Favorites</h2>
                <div className='movies-grid'>
                    {favorites.map((movie, index) => (
                        <MovieCard movie={movie} key={index} />
                    ))}
                </div>
            </div>
        )
    }
    return (
        <div className='favorites-empty'>
            <h2>No Favorite Movies Yet</h2>
            <p>Start adding movies to your favorites and they will appear here</p>
            <button className='search-button' onClick={goToHome}>Go to Home</button>
        </div>
    )
}

export default Favorites