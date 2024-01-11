// MyList component
import React, { useState, useEffect } from "react";

function MyList({ handleMylist, likedMovieName }) {
  const [myList, setMyList] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    if (likedMovieName.length > 0) {
      setName(likedMovieName[likedMovieName.length - 1].name);
    }
  }, [likedMovieName]);

  console.log("Liked Movies:", likedMovieName); // Add this line for debugging

  const handleAddToList = (movieId, movieName) => {
    setMyList([...myList, movieId]);
    setName(movieName);
    console.log("Movie added to your list:", movieId);
    console.log("Movie name:", movieName);
    handleMylist(movieId, movieName);
  };

  return (
    <div className="w-full p-44  bg-gradient-to-b from-red-600 to-black">
      <div className="top-10 bottom-1 bg-green-500 w-8/12 h-72 p-10 rounded-2xl border-2">
        This is my list. Here you can see movies that you liked:
        <ul>
          {likedMovieName.map((movie) => (
            <li key={movie.id}>{movie.name || movie.title || movie.original_name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyList;
