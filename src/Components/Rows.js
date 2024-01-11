import React, { useEffect, useState } from 'react';
import axios from './Axios';
import Loading from './Loading';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { AiFillLike } from "react-icons/ai";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdLocalMovies } from "react-icons/md";


const base_url = "https://image.tmdb.org/t/p/original/";

export default function Rows({ title, fetchUrl,isLargeRow, handleNotification}) {
  const [movies, setMovies] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [loadedImages, setLoadedImages] = useState([]);
  const [likeBtn , setLikeBtn]= useState({})
  

  const handleImageLoad = (movieId) => {
    setLoadedImages((prevLoadedImages) => [...prevLoadedImages, movieId]);
  };

   const handleRating = (movieId,movieName) => {
     setLikeBtn((prevLikedMovies) => ({
       ...prevLikedMovies,
       [movieId]: !likeBtn[movieId], // Toggle like status for the specific movie ID
     }));
     !likeBtn[movieId] && handleNotification(movieId, movieName)
   };


  useEffect(() => {
    let timeoutId;
  
    async function fetchData() {
      try {
        timeoutId = setTimeout(() => {
          setIsLoading(true); // Show the loading state
        }, 3000); // Set timeout for 3 seconds (3000 milliseconds)
  
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        clearTimeout(timeoutId); // Clear the timeout if the data fetching finishes before 3 seconds
        setIsLoading(false); // Hide the loading state
      }
    }
  
    fetchData();
  
    return () => clearTimeout(timeoutId); // Clear the timeout on component unmount
  }, [fetchUrl]);
  
 
  // Movie Trailer pop-ups
  const opts = {
    height:"400px",
    width : "80%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters/,
      autoplay: 1,
    },
  }

  const handleClick=(movie)=>{                                             
     if(trailerUrl){
      setTrailerUrl("");
     }else{
      movieTrailer(movie?.title|| movie?.name|| movie?.original_name ||"")
      .then(url =>{
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v')); 
        // 'v' stores video ids in youtube
        //Example => https://www.youtube.com/watch?v=XtMThy8QKqUhKH46t
      })
      .catch((error)=> {
      alert('Trailer of this movie not available');
      console.log('Trailer of this movie not available');
     })
     }
     console.log('Movie',movie)
  }

  return (
    <div className=' text-white'>
      <>
        <h2 className='text-2xl ml-6 tracking-widest font-extrabold text-left pl-4 hover:text-red-600'>{title}</h2>
        <div className='row_posters p-4 flex flex-row overflow-x-scroll overflow-y-hidden transition-transform duration-500'>
          {isLoading ? ( <Loading/> ):(
            
           movies.map((movie) => (
            <div className=" h-auto relative" key={movie.id}>
             
                <img
                  onClick={() => handleClick(movie)}
                  src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                  alt={movie.name}
                  onLoad={() => handleImageLoad(movie.id)}
                  className={`row_poster ${isLargeRow && 'row_posterLarge'} max-w-60 object-contain p-2 max-h-auto transition-transform duration-300 hover:scale-110`}
                />
            
              {loadedImages.includes(movie.id) && (
                <>
                   
                   <div className="absolute top-2 right-2">
                    <span className={`${likeBtn[movie.id]?' text-green-600':'text-white'} md:hover:text-green-600 text-2xl hover:text-4xl `} 
                    onClick={()=>handleRating(movie.id,movie.name||movie.title||movie.original_name)}><AiFillLike /></span>  {/* Like button */}
                  </div>
                
                       <div className=' absolute bottom-16 left-3 flex flex-row'>
                        <span className=' text-white hover:text-red-700' ><MdOutlineStarPurple500 size={20}/></span>
                        &nbsp;&nbsp;{movie.vote_average}</div>
                      
                          <div className=' flex flex-row justify-start m-1 '>
                            <span className=' font-semibold hover:opacity-60'>{movie.name||movie.title||movie.original_name} </span>
                          </div>

               </>
              )} 
            </div>
          ))
        )}
          
        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </>
    </div>
  )
}