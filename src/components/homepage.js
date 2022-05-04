import React from "react";
import { Link } from "react-router-dom";
//import { MovieList } from "./MovieList";
export const HomePage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link exact to="/homepage">
            Home Page
          </Link>
        </li>
        <li>
          <Link exact to="/MovieList">
            Movies List
          </Link>
        </li>
        <li>
          {" "}
          <Link exact to="/MoviesLiked">
            Movies List of Liked
          </Link>
        </li>
        <li>
          <Link exact to="/MoviesBlocked">
            Movies List of Blocked
          </Link>
        </li>
      </ul>
      <h1 className="topRated">Our top Rated Movies List</h1>
      <h2 class="home-page">This is the home page</h2>
      <div className="background">
        <img
          src="https://media.istockphoto.com/photos/pop-corn-and-on-red-armchair-cinema-
        picture-id1271522601?k=20&m=1271522601&s=612x612&w=0&h=y3NLBCVMWO8wHGwjEcXIuGOSL_0K6iFTvySCM-X5TxM="
          alt="movie"
        ></img>
      </div>
    </div>
  );
};
