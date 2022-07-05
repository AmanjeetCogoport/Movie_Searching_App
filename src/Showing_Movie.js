// import app from './app.scss'
import App from './App.css'

function Showing_Movie(props) {
  return (
    <>
      <div className="col-lg-4 mb-4 img_gallery">
        <div className="card">
          <img
            src={props.movie.Poster}
            alt="movie_image"
            className="card-img-top"
          />
          <div className="card-body" >
            <h5 className="card-title">{props.movie.Title}</h5>
            <p className="card-text"></p>
            <a href="" className="btn btn-outline-success btn-sm">
              Read More
            </a>
            <a href="" className="btn btn-outline-danger btn-sm">
              <i className="far fa-heart"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Showing_Movie;
