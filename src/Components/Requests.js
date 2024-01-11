// db8825942c4b70796815d7fd4d94eb0e

// https://api.themoviedb.org/3/movie/157336?api_key=db8825942c4b70796815d7fd4d94eb0e;

// baseURL:'https://api.themoviedb.org/3//trending/all/week?api_key=db8825942c4b70796815d7fd4d94eb0e&language=en-US


const API_KEY='db8825942c4b70796815d7fd4d94eb0e'

const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,

}

export default requests;