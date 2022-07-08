import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


let DetailedListOfMovies = () => {
    const params = useParams();
    
    const key = "fd57d86";
    const [movie, setMovie] = useState([]);
    const [errorMsg, seterrorMsg] = useState("");
    const [id, setId] = useState(params.id);

    useEffect( () => {
        const getMovies = async () => {
            const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=fd57d86`)
            const result = await response.json();
            if(response.ok){
                setMovie(result);
            }else{
                seterrorMsg(result.massage);
            }
        }
        getMovies();
    },[]);



    return (
        <>
            <h1>Movie Name : {movie.Title}</h1>
            <img src={movie.Poster} alt="movie poster" />
            <h3>Tags : </h3>
            <p>{movie.Genre}</p>
            <h2>Relesee Year : {movie.Year}</h2>
            <h2>Directior : {movie.Director}</h2>
            <h2>Writer : {movie.Writer}</h2>
            <h2>Actors : {movie.Actors}</h2>
            <h2>Plot : {movie.Plot}</h2>
            <h2>Imdb Ratings : {movie.imdbRating}</h2>
            <h2>Imdb Votes : {movie.imdbVotes}</h2>
        </>
    )
}

export default DetailedListOfMovies;