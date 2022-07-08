// import app from './app.scss'
import { Link } from 'react-router-dom';
import App from './App.css'
import movies from './movies.css'

function Showing_Movie(props) {
  return (
    <>
      

<div className="col-md-3">
                <div className="card-sl">
                    <div className="card-image">
                        <img
                            src={props.movie.Poster}/>
                    </div>

                    <a className="card-action" href="#"><i className="fa fa-heart"></i></a>
                    <div className="card-heading">
                        {props.movie.Genre}
                    </div>
                    
                    <div className="card-text">
                        <span>{props.movie.Genre}</span>
                    </div>

                    <Link to={`/${props.movie.imdbID}`} id={props.movie.imdbID} className="card-button"> View More</Link>

                    {/* onClick={(event) => props.movieDetail(event.target.id)} */}

                </div>
            </div>




	
    </>
  );
}

export default Showing_Movie;
