import React, {useState} from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import App from './App'
import BlockMovie from './BlockMovie'
import LikedMovie from './LikedMovie'

function Home() {
    return (
        <div>
            Home Page
        </div>
    )
}

export default function AppRouter() {
    const [likedMovie, setLikedMovie] = useState([]);
    const [likedMoviesInfo, setLikedMoviesInfo] = useState([]);
    const [blockMoviesInfo, setBlockMoviesInfo] = useState([]);
  return (
    <div>
        
        <BrowserRouter>
        <ul className='navigation-bar'>
                <li className='navigation-ele'>
                    <Link className='navigation-ele' to='/'>Home Page</Link>
                </li>
                <li className='navigation-ele'>
                    <Link className='navigation-ele' to='/movie-list'>MovieList</Link>
                </li>
                <li className='navigation-ele'>
                    <Link className='navigation-ele' to='/like-list'>LikeList</Link>
                </li>
                <li className='navigation-ele'>
                    <Link className='navigation-ele' to='/block-list'>BlockList</Link>
                </li>
            </ul>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route exact path="/movie-list" element={<App 
                blockMoviesInfo={blockMoviesInfo}
                setBlockMoviesInfo={setBlockMoviesInfo}
                likedMoviesInfo={likedMoviesInfo}
                setLikedMoviesInfo={setLikedMoviesInfo}
                likedMovie = {likedMovie}
                setLikedMovie = {setLikedMovie}
                />}></Route>
                <Route exact path="/like-list" element={<LikedMovie 
                likedMoviesInfo={likedMoviesInfo}
                setLikedMoviesInfo={setLikedMoviesInfo}
                blockMoviesInfo={blockMoviesInfo}
                setBlockMoviesInfo={setBlockMoviesInfo}
                likedMovie = {likedMovie}
                setLikedMovie = {setLikedMovie}
                />}></Route>
                <Route exact path="/block-list" element={<BlockMovie
                blockMoviesInfo={blockMoviesInfo}
                setBlockMoviesInfo={setBlockMoviesInfo}
                likedMoviesInfo={likedMoviesInfo}
                setLikedMoviesInfo={setLikedMoviesInfo}
                likedMovie = {likedMovie}
                setLikedMovie = {setLikedMovie}
                />}></Route>

            </Routes>
        </BrowserRouter>
    </div>
  )
}
