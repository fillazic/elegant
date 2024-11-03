import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header  from './components/Header';
import ImageSlider from './components/ImageSlider';
import Apartmani from './components/Apartmani';
import DetaljiStana from './components/DetaljiStana';
import Footer from './components/Footer';

function App() {

  return (

    <Router>
     <div className="App">
       <Header />
       <Routes>
          <Route path="/" element={<ImageSlider />} />
          <Route path="/stanovi" element={<Apartmani />} />
          <Route path="/:id" element={<DetaljiStana />} />
      </Routes>
      <Footer />
    </div>

     </Router>
  )
}

export default App;
