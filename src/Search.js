let Search = (props) => {
  return (
    <div className="container justify-content-center">
      <div className="row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control input-text"
              placeholder="Search Movies..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
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
