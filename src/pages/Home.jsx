import React from 'react'

function Home() {
  return (
    <div className="home">
          <form>
            <input className="searchInput" placeholder="Search for a movie..." />
            <button type="submit">Search 🔎</button>
          </form>
          <div className="movie-list">
            <div className="movie-card">
              <img alt="The Avengers" src="https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_SX300.jpg" />
              <h3>The Avengers</h3>
              <p>2012</p>
              <a href="movie-detail.html" data-discover="true">Details</a>
            </div>
            <div className="movie-card">
              <img alt="The Avengers" src="https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_SX300.jpg" />
              <h3>The Avengers</h3>
              <p>2012</p>
              <a href="movie-detail.html" data-discover="true">Details</a>
            </div>
            <div className="movie-card">
              <img alt="The Avengers" src="https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_SX300.jpg" />
              <h3>The Avengers</h3>
              <p>2012</p>
              <a href="movie-detail.html" data-discover="true">Details</a>
            </div>
          </div>
        </div>
  )
}

export default Home