import React, {useState} from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import App from './App'
import BlockMovie from './BlockMovie'
import LikedMovie from './LikedMovie'

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <img className='homepage-banner' src='https://cdn.vectorstock.com/i/1000x1000/00/30/cool-web-banner-design-element-on-movie-night-vector-33030030.webp' />
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
                <li>
                    <Link className='navigation-ele' to='/'>Home Page</Link>
                </li>
                <li>
                    <Link className='navigation-ele' to='/movie-list'>Movie List</Link>
                </li>
                <li>
                    <Link className='navigation-ele' to='/like-list'>Like List</Link>
                </li>
                <li>
                    <Link className='navigation-ele' to='/block-list'>Block List</Link>
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
