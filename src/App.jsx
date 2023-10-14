import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { Navbar } from './components/header/header'; 
import About from './Pages/About/about';
import Home from './Pages/Home/Home'; 
import CustomError from './Pages/Error/error';
import CustomFooter from './components/footer/footer';
import CustomLocation from './Pages/Location/location';
import "./Style.css"


function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="location/:id" element={<CustomLocation />} />
        <Route path="*" element={<CustomError />} />
      </Routes>
      <CustomFooter />
    </Router>
  );
}

export default App;
