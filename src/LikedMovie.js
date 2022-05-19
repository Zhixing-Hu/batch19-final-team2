import React from 'react'
import LikedMovieDetail from './LikedMovieDetail'
export default function LikedMovie({likedMoviesInfo, setLikedMoviesInfo, blockMoviesInfo, setBlockMoviesInfo, likedMovie, setLikedMovie}) {
  return (
    <>
        <p>Liked Movie</p>
        <div className='movie-details'>
        {likedMoviesInfo && likedMoviesInfo.map(likedInfo => {
            if(likedMovie.includes(likedInfo.id)){
              
              return (
              <LikedMovieDetail
                  key={likedInfo.id}
                  {...likedInfo}
                  setBlockMoviesInfo={setBlockMoviesInfo}
                  blockMoviesInfo = {blockMoviesInfo}
                  likedMoviesInfo = {likedMoviesInfo}
                  setLikedMoviesInfo = {setLikedMoviesInfo}
                  likedMovie = {likedMovie}
                  setLikedMovie = {setLikedMovie}
              />
            )}else {
              return null
            }
        })}
        </div>
        
    </>
  )
}
