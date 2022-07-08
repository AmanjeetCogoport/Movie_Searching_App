import './App.css';
import { useEffect, useState } from 'react';
import HomePage from './HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailedListOfMovies from './DetailedListOfMovies';
// import {BrowserRoute, Routes, Route} from "react-router-dom";



function App() {
  
  


  return (
    <BrowserRouter>
          <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:id' element={<DetailedListOfMovies />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
