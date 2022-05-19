import React, { useContext, useEffect, useState } from 'react'
import { MovieContext } from './App'

// const LOCAL_STORAGE_KEY = 'moviesLikedData'
export default function MovieDetail(props) {
    const [disAbleLike, setDisAbleLike] = useState(false)
    const {handleMovieBlock, handleMovieLiked} = useContext(MovieContext)
    const {
        id,
        title,
        poster_path,
        release_date,
        vote_count,
        vote_average,
        overview,
        likedMovie,
        setLikedMovie
    } = props
    const IMG_URL = 'https://image.tmdb.org/t/p/w500'
    useEffect(() => {
        if(likedMovie.includes(id)) {
            setDisAbleLike(true)
        }else {
            setDisAbleLike(false)
        }
    }, [disAbleLike, id, likedMovie]);
    function handleLiked() {
        setLikedMovie([...likedMovie, id])
        
    }
    
  return (
    <>
        <div className='detail-movie'>
            <img src= {IMG_URL + poster_path} className='detail-pic' alt=''/>
            <div>
                <button disabled={disAbleLike} onClick={() => {handleMovieLiked(id); handleLiked();}}>Like</button>
                <button onClick={() => handleMovieBlock(id)}>Block</button>
            </div>
            <p>{title}</p>
            <p>Release Date: {release_date}</p>
            <p>Vote Count: {vote_count} | Average Score: {vote_average}</p>
            <div className='detail-overview'>
                <p>{overview}</p>
            </div>
        </div>
    </>
  )
}
