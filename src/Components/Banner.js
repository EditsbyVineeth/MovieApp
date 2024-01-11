import React, { useEffect, useState } from "react";
import axios from "./Axios";
import requests from "./Requests";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [refreshBanner, setRefreshBanner] = useState(false);
  // const baseURL = 'https://api.themoviedb.org/';

  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
        );
        return request;
      }
      fetchData();
    }, [refreshBanner]);
    
    function handleArrowClick(){
      setRefreshBanner(!refreshBanner);
    }
    console.log("State of the movie:", movie);
  console.log("State of the image:");

  return (
    <header
      className="banner pt-32 text-white object-contain w-full flex flex-col items-stretch p-4  bg-gradient-to-b from-red-500 to-black"
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(to bottom ,transparent, #111), url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition:"top"
        // 
        
      }}
    >
      <div className=" mb-20 pt-10 md:pt-30 h-44 text-left text-sm font-semibold md:text-lg max-w-3xl">
        <h1 className=" text-2xl md:text-4xl font-extrabold">{movie?.title || movie?.original_name || movie?.name}</h1>
        <div>
          <button className=" bg-neutral-800 hover:bg-white text-white hover:text-black w-20 h-8 ">Play</button>
          <button className=" bg-neutral-800 hover:bg-white text-white hover:text-black w-20 h-8 ">My List</button>
        </div>
        <p className="banner_desc  bg-neutral-900 rounded-lg p-2 h-32  max-w-md opacity-80 bg-opacity-60 hover:bg-opacity-90">{(movie?.overview)?movie.overview.slice(0,160) : "Movie info not avaiable"}</p>
      </div>
      <div className="banner_fade  mt-8"/>
      <div className="  flex flex-row justify-between opacity-40 ">
        <span className=" text-6xl transition-all duration-700 hover:text-7xl" onClick={handleArrowClick}> <IoIosArrowBack />     </span>
        <span className=" text-6xl transition-all duration-700 hover:text-7xl" onClick={handleArrowClick}> <IoIosArrowForward /> </span>
        </div>
    </header>
  );
}

export default Banner;
