import React from 'react'
import BlockMovieDetail from './BlockMovieDetail'

export default function BlockMovie({blockMoviesInfo, setBlockMoviesInfo, likedMoviesInfo ,setLikedMoviesInfo, likedMovie,setLikedMovie}) {
    
  return (
    <div>
        <p>Blocked Movie</p>
      <div className='movie-details'>
        {blockMoviesInfo && blockMoviesInfo.map(blockInfo => {
          return (
            <BlockMovieDetail
              key={blockInfo.id}
              {...blockInfo}
              setLikedMoviesInfo={setLikedMoviesInfo}
              likedMoviesInfo = {likedMoviesInfo}
              setBlockMoviesInfo = {setBlockMoviesInfo}
              blockMoviesInfo = {blockMoviesInfo}
              likedMovie = {likedMovie}
              setLikedMovie = {setLikedMovie}
            />
          )
        })}
      </div>
    </div>
  )
}
