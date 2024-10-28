import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header  from './components/Header';
import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';

function App() {
  return (

    <Router>
     <div className="App">
       <Header />
       <Routes>
          <Route path="/" element={<ImageSlider />} />
      </Routes>
      <Footer />
    </div>

     </Router>
  )
}

export default App;
