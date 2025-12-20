import React from 'react'
import MovieList from '../components/MovieList'

function Home() {
  return (
    <div className="home">
          <form>
            <input className="searchInput" placeholder="Search for a movie..." />
            <button type="submit">Search 🔎</button>
          </form>
          <MovieList />
        </div>
  )
}

export default Home