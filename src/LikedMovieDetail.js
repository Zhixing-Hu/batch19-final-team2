import React from 'react'

const LOCAL_STORAGE_KEY = 'moviesInfoData'
export default function LikedMovieDetail(props) {
  const {
    id,
    overview,
    page,
    poster_path,
    release_date,
    title,
    vote_average,
    vote_count,
    setLikedMoviesInfo,
    likedMoviesInfo,
    blockMoviesInfo,
    setBlockMoviesInfo,
    likedMovie,
    setLikedMovie,
  } = props
  function handleMoveLikeToBlock() {
    let temp = {
      id,
      overview,
      page,
      poster_path,
      release_date,
      title,
      vote_average,
      vote_count
    }
    setBlockMoviesInfo([...blockMoviesInfo, temp])
    
    setLikedMoviesInfo(likedMoviesInfo.filter(movie => movie.id !== id))
    setLikedMovie(likedMovie.filter(movie=> movie !== id))
    let movieJSON = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY+page)).filter(movie => movie.id !== id)
    localStorage.setItem(LOCAL_STORAGE_KEY+page, JSON.stringify(movieJSON))
  }
  function handleUnlike() {
    setLikedMoviesInfo(likedMoviesInfo.filter(movie => movie.id !== id))
    
    setLikedMovie(likedMovie.filter(movie=> movie !== id))
    let movieJSON = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY+page))
    if (movieJSON.filter(movie => movie.id === id).length === 0) {
      let temp = {
        id,
        overview,
        page,
        poster_path,
        release_date,
        title,
        vote_average,
        vote_count
      }
      
      localStorage.setItem(LOCAL_STORAGE_KEY+page, JSON.stringify([...movieJSON, temp]))
    }
    
  }
    const IMG_URL = 'https://image.tmdb.org/t/p/w500'
  return (
    <div className='detail-movie'>
            <img src= {IMG_URL + poster_path} className='detail-pic' alt=''/>
            <div>
                <button onClick={handleMoveLikeToBlock}>Block</button>
                <button onClick={handleUnlike}>Unlike</button>
            </div>
        </div>
  )
}
