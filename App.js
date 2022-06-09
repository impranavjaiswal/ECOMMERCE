import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    //BEM 
    <div className="app">
      <Router>
        <Routes>
          <Route path = "/" element={ <Home />} />
          {/* <Route path="/checkout" element={<Header />, <Checkout />} /> */}
          {/* <Route path = "/login" element={<Login />} /> */}
        </Routes>
      </Router>
    </div>
    

  );
}

export default App;
