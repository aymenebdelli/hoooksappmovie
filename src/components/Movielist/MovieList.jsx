import React from 'react'
import './MovieList.css'
import MovieCard from '../Moviecard/MovieCard'

function MovieList({ movies, titleSearch, ratingSearch }) {
    return (
        <div className='movie-list'>
            {movies
                .filter(movie => movie.title.toLowerCase().includes(titleSearch.toLowerCase()) && movie.rating >= ratingSearch)
                .map((movie, index) => <MovieCard movie={movie} key={index} />)}
        </div>
    )
}

export default MovieList
