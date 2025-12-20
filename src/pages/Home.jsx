import React, { useEffect, useRef, useState } from 'react'
import MovieList from '../components/MovieList'



function Home() {

   const [movies, setMovies] = useState([])
   const searchRef = useRef(null)

    const fetchMovies = async (query) => {

      try {

        const response = await fetch(`http://www.omdbapi.com/?apikey=6959523f&s=${query}`)

        const data = await response.json()
        
        setMovies(data.Search)
        
      } catch (error) {

        console.error(error)

      }

    }

    const handleSubmit = (e) => {
      e.preventDefault()
      const query = searchRef.current.value // ✅ get value
      if(query) fetchMovies(query)
    }

  useEffect(() => {
    fetchMovies('Mission Impossible')
  }, [])

  useEffect(() => {
    console.log('movies updated:', movies)
  }, [movies])


  return (
    <div className="home">
          <form onSubmit={handleSubmit}>
            <input ref={searchRef} className="searchInput" placeholder="Search for a movie..." />
            <button type="submit">Search 🔎</button>
          </form>
          <MovieList movies={movies} />
        </div>
  )
}

export default Home