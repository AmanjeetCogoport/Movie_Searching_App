import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import "./App.css";

let DetailedListOfMovies = () => {
  const params = useParams();
  const navigate = useNavigate();
    // console.log(params.id)

  const key = "fd57d86";
  const [movie, setMovie] = useState([]);
  const [errorMsg, seterrorMsg] = useState("");
  const [id, setId] = useState(params.id);

  useEffect(() => {
    const getMovies = async () => {
    //   const response = await fetch(
    //     `http://www.omdbapi.com/?i=tt3896198&apikey=fd57d86`
    //   );

    const response = await fetch(
        `http://www.omdbapi.com/?i=${params.id}&apikey=fd57d86`
      );
      const result = await response.json();
      if (response.ok) {
        setMovie(result);
      } else {
        seterrorMsg(result.massage);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      <div className="container detail-movie-list my-2">
        <div className="">
            <h1 id="heading-h" className="mt-5">
            <strong>{movie.Title}</strong>
          </h1>
          <hr />
          <div className="row mt-3">
          <p>
              <img id="mainImg" src={movie.Poster} alt="movie poster" />
            </p>

            <div className="mx-5 mt-5">
            <h3>
            <strong><strong>Movie Name :</strong> {movie.Title}</strong>
          </h3>
              <h3><strong>Directior :</strong> {movie.Director}</h3>
              <h3><strong>Writer : </strong>{movie.Writer}</h3>
              <h3><strong>Actors : </strong>{movie.Actors}</h3>

              <h2><strong>Relesee Year :</strong> {movie.Year}</h2>
              

              {/* <h2>Plot : {movie.Plot}</h2> */}
              <h2><strong>Imdb Ratings : </strong>{movie.imdbRating}</h2>
              <h2><strong>Imdb Votes : </strong>{movie.imdbVotes}</h2>
              <h3 className="my-4">
                <strong>Tags : <span>{movie.Genre}</span></strong>
              </h3>

              <h4><strong>Description : </strong></h4>
                <h5> {movie.Plot}</h5>
                <button onClick={() => navigate(-1)} type="button" className="btn btn-primary mt-2 px-5 py-2">Go Back</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedListOfMovies;
