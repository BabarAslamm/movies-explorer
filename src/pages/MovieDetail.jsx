import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function MovieDetail() {
    const { id } = useParams()
    const [movie, setMovie] = useState([])

    const movieDetails = async (id) => {
        
        const response = await fetch(`http://www.omdbapi.com/?apikey=6959523f&i=${id}`)
        const data = await response.json()
        setMovie(data)

        console.log('data', data)

    }

    useEffect(() => {
        movieDetails(id);
    },['id'])

    if(!movie) return <p>Loading...</p>

  return (
    <div className="movie-detail">
		<h2>{movie.Title}</h2>
		<img alt="Avengers: Infinity War" src={movie.Poster} />
		<p><strong>Genre:</strong> {movie.Genre}</p>
		<p><strong>Released:</strong> {movie.Released}</p>
		<p><strong>Plot:</strong>{movie.Plot}</p>
	</div>
  )
}

export default MovieDetail
