// import app from './app.scss'
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
                        {props.movie.Title}
                    </div>
                    
                    <div className="card-text">
                        
                    </div>
                    <a href="#" className="card-button"> More</a>
                </div>
            </div>




	
    </>
  );
}

export default Showing_Movie;
