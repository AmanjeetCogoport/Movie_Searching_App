import './App.css';
import Showing_Movie from './Showing_Movie';
import Search from './Search'
import { useEffect, useState } from 'react';



function App() {
  
  let url = encodeURI("http://www.omdbapi.com/?s=love&apikey=fd57d86");

  const [movieSearchedList, setMovieSearchedList] = useState([]);
  let outputValue;
  

  useEffect( () => {
    fetch(url).then( (response) => response.json()).then( (data) => data.Search).then( (search) => {
      setMovieSearchedList(search);
    })
  },[])


  return (

    <>
      <Search />
    

      {/* show movie section will start from here  */}
      <section id="gallery">
        <div className="container">
          <div className="row">

            {movieSearchedList.length > 0 && movieSearchedList.map( (movie) => <Showing_Movie movie={movie}/>)}
    
          </div>
        </div>
      </section>

    </>
  );
}

export default App;
