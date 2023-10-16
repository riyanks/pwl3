import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Beranda from './pages/Beranda';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Pagenotfound from './pages/Pagenotfound';

const App = () => {
  return (
    <>
        <BrowserRouter basename='/Restaurant-react-website'>
          <Routes>
            <Route path='/' element={<Beranda />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            {/* <Route path='/menu' element={<Menu />} /> */}
            <Route path='/*' element={<Pagenotfound />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;