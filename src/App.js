
import './App.css';
import 'animate.css';
import './assets/css/bootstrap.min.css';
import './assets/css/animate.css';
import './assets/css/magnific-popup.css';
import './assets/css/meanmenu.css';
import './assets/css/slick.css';
import './assets/css/style.css';
import Home1 from './Component/Home/Home1'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Component/pages/About';
import Services from './Component/pages/Services';
import Blog from './Component/pages/Blog';
import Contact from './Component/pages/Contact';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home1></Home1>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </Router>

  );
}

export default App;
