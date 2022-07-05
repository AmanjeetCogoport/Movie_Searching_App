// import App from './App'

let Search = (props) => {

// let searchMovies = () => {
//   let searchVal = document.getElementById("search-box");
  
// }

  return (
    <div className="container justify-content-center">
      <div className="row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              id="search-box"
              type="text"
              className="form-control input-text"
              placeholder="Search Movies..."
              onChange={(event) => props.updateParent(event.target.value)}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-warning btn-lg" type="button">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <h1>Hello {props.k}</h1> */}
    </div>
  );
};

export default Search;
