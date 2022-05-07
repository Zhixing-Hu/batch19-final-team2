import React, { useEffect, useState } from 'react';
import './App.css';
import MovieDetail from './MovieDetail';
import {v4 as uuidv4} from 'uuid';
export const MovieContext = React.createContext()

const LOCAL_STORAGE_KEY = 'moviesInfoData'

function App({blockMoviesInfo, setBlockMoviesInfo, likedMoviesInfo, setLikedMoviesInfo, likedMovie, setLikedMovie}) {
  
  const [disablePrev, setDisablePrev] = useState(false);
  const [page, setPage] = useState(1);
  const [dateSort, setDateSort] = useState(undefined);
  const [voteCntSort, setVoteCntSort] = useState(undefined);
  const [voteAvgSort, setVoteAvgSort] = useState(undefined);
  const [titleSort, setTitleSort] = useState(undefined);
  const api_key = '658de580e0bf5c7119c28f9e88c7a1d0'
  const [moviesInfo, setMoviesInfo] = useState(localStorage.getItem(LOCAL_STORAGE_KEY+page)? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY+page)):[]);
  const baseurl = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=`
  useEffect(() => {
    const movieJSON = localStorage.getItem(LOCAL_STORAGE_KEY+page)
    
    if (movieJSON !== null) {
      setMoviesInfo(JSON.parse(movieJSON))
      
    }
    
    else{
      fetch(baseurl + `${page}`)
      .then(response => response.json())
      .then(data => {
        showDetails(data.results);
      })
    }
  }, [page, baseurl])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY+page, JSON.stringify(moviesInfo))
  }, [moviesInfo, page])
  

  function showDetails(data) {
    const movie_list = []
    data.forEach(movie => {
      
      let {title, poster_path, release_date, vote_count, vote_average, overview, backdrop_path} = movie;

      if (!poster_path) {poster_path = backdrop_path}
      const newMovie = {
        id: uuidv4(),
        title: title,
        poster_path: poster_path,
        release_date: release_date,
        vote_count: vote_count,
        vote_average: vote_average,
        overview: overview,
        page: page
      }
      movie_list.push(newMovie)
    setMoviesInfo([...movie_list])
    })
  }

  function handleTitleSort() {
    const sortMovies = [...moviesInfo]
    
    if (titleSort === undefined || titleSort === false) {
      
      sortMovies.sort((a,b) => {return b.title.localeCompare(a.title);})
      setTitleSort(true)
    }
    else{
      sortMovies.sort((a,b) => {return a.title.localeCompare(b.title);})
      setTitleSort(false)
    }
    setMoviesInfo([...sortMovies])
  }

  function handleVoteAvgSort() {
    const sortMovies = [...moviesInfo]
    
    if (voteAvgSort === undefined || voteAvgSort === false) {
      sortMovies.sort((a,b) => {return b.vote_average - a.vote_average;})
      setVoteAvgSort(true)
    }
    else{
      sortMovies.sort((a,b) => {return a.vote_average - b.vote_average;})
      setVoteAvgSort(false)
    }
    setMoviesInfo([...sortMovies])
  }

  function handleVoteCntSort() {
    const sortMovies = [...moviesInfo]
    
    if (voteCntSort === undefined || voteCntSort === false) {
      sortMovies.sort((a,b) => {return b.vote_count - a.vote_count;})
      setVoteCntSort(true)
    }
    else{
      sortMovies.sort((a,b) => {return a.vote_count - b.vote_count;})
      setVoteCntSort(false)
    }
    setMoviesInfo([...sortMovies])
  }

  function handleDateSort() {
    let sortMovies = [...moviesInfo]
    
    if (dateSort === undefined || dateSort === false) {
      sortMovies.sort((a,b) => {return new Date(b.release_date) - new Date(a.release_date);})
      setDateSort(true)
    }
    else{
      sortMovies.sort((a,b) => {return new Date(a.release_date) - new Date(b.release_date);})
      setDateSort(false)
    }
    
    setMoviesInfo([...sortMovies])
  }

  
  function handlePageChange(difference) {
    if (page + difference < 1) {
      setDisablePrev(true)
    } 
    else {
      if (disablePrev === true) {
        setDisablePrev(false)
      }
      setPage(page + difference)
    }
  };


  function handleMovieBlock(id) {
    let tempMoviesInfo = [...moviesInfo]
    let toBlock = tempMoviesInfo.filter(movie => movie.id === id)
    setBlockMoviesInfo([...blockMoviesInfo, ...toBlock])
    
    setMoviesInfo(moviesInfo.filter(movie => movie.id !== id))
    let movieJSON = localStorage.getItem(LOCAL_STORAGE_KEY+page)
    
    if (movieJSON !== null) {
      movieJSON = JSON.parse(movieJSON)
    }
    movieJSON.filter((movie) => movie.id !== id)
    localStorage.setItem(LOCAL_STORAGE_KEY+page, JSON.stringify(movieJSON))
    setLikedMovie(likedMovie.filter(movie => movie!== id))
  }

  function handleMovieLiked(id) {
    let tempMoviesInfo = [...moviesInfo]
    let toLiked = tempMoviesInfo.filter(movie => movie.id === id)
    setLikedMoviesInfo([...likedMoviesInfo, ...toLiked])
  }
  const movieContextValue = {
    handleMovieBlock,
    handleMovieLiked
  }

  return (
    <div>
      <div className='sort-button'>
        <button onClick={() => handleTitleSort()}>Title</button>
        <button onClick={() => handleVoteCntSort()}>Vote Count</button>
        <button onClick={() => handleVoteAvgSort()}>Vote Average</button>
        <button onClick={() => handleDateSort()}>Release Date</button>
      </div>
      <div className='movies-list-button'>
        <button disabled={disablePrev} onClick={() => handlePageChange(-1)}>Prev</button>
        <span id='pages'>{page}/925</span>
        <button onClick={() => handlePageChange(1)}>Next</button>
      </div>
      <div className='movie-details'>
        
        {moviesInfo.map(moviesInfo => {
          
          return (
            <MovieContext.Provider value = {movieContextValue} key = {moviesInfo.id}>
              <MovieDetail 
                {...moviesInfo}
                likedMovie = {likedMovie}
                setLikedMovie = {setLikedMovie}
                
              />
              
            </MovieContext.Provider>
          )
        })}
      </div>
    </div>
  );
}

export default App;
