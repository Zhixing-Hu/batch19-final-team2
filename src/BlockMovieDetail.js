import React from 'react'

const LOCAL_STORAGE_KEY = 'moviesInfoData'
export default function BlockMovieDetail(props) {
  
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
    } = props
    function handleMoveToLike() {
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
      // console.log(temp)
      setLikedMoviesInfo([...likedMoviesInfo, temp])
      setBlockMoviesInfo(blockMoviesInfo.filter(movie => movie.id !== id))
    }
    function handleMoveBackToMovieList() {
      
      let toRemove = blockMoviesInfo.filter(movie => movie.id === id)
      setBlockMoviesInfo(blockMoviesInfo.filter(movie => movie.id !== id))
      let movieJSON = localStorage.getItem(LOCAL_STORAGE_KEY+page)
      if (movieJSON !== null) {
        movieJSON = JSON.parse(movieJSON)
      }
      localStorage.setItem(LOCAL_STORAGE_KEY+page, JSON.stringify([...movieJSON, ...toRemove]))
    }
    
    const IMG_URL = 'https://image.tmdb.org/t/p/w500'
  return (
    <div className='detail-movie'>
        <img src= {IMG_URL + poster_path} className='detail-pic' alt=''/>
        <div>
            <button onClick={handleMoveToLike}>Like</button>
            <button onClick={handleMoveBackToMovieList}>remove</button>
        </div>
    </div>
  )
}
