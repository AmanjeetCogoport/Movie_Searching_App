import './App.css';
import Showing_Movie from './Showing_Movie';
import Search from './Search'
import { useEffect, useState } from 'react';




function App() {
  
  let url = encodeURI("http://www.omdbapi.com/?s=love&apikey=fd57d86");

  const [movieSearchedList, setMovieSearchedList] = useState([]);
  

  useEffect( () => {
    fetch(url).then( (response) => response.json()).then( (data) => data.Search).then( (search) => {
      setMovieSearchedList(search);
    })
  },[])

  let updateAppformSearch = (val) =>{
    if(val.length > 2) {
      url = encodeURI(`http://www.omdbapi.com/?s=${val}&apikey=fd57d86`);
    // console.log(url);
    // setMovieSearchedList(url);
    fetch(url).then( (response) => response.json()).then( (data) => data.Search).then( (search) => {
      if(search) setMovieSearchedList(search);
      else console.log("searching");
    })
    }
  }


  let searchMovies = () =>{
    console.log("ram");
  }


  return (

    <>
      <Search updateParent={(val) => updateAppformSearch(val)}/>
    

      {/* show movie section will start from here  */}
      <section id="gallery">
        <div className="container">
          <div className="row">
            {/* {alert(movieSearchedList)} */}
            {movieSearchedList.length > 2 && movieSearchedList.map( (movie) => <Showing_Movie movie={movie}/>)}
    
          </div>
        </div>
      </section>

    </>
  );
}

export default App;
