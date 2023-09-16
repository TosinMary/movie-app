import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Home from './component/Home';
import Nav from './component/Nav';
import Cardapi from './component/Cardapi';
import Movie from './component/Movie';

function App() {
    return (
        <div className=''>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='Nav' element={<Nav />} />
                    <Route path='Cardapi' element={<Cardapi />} />
                    <Route path='/Movie/:id' element={<Movie />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
