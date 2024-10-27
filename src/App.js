import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header  from './components/Header';
import ImageSlider from './components/ImageSlider';

function App() {
  return (

    <Router>
     <div className="App">
       <Header />
       <Routes>
          <Route path="/" element={<ImageSlider />} />
      </Routes>
    </div>

     </Router>
  )
}

export default App;
