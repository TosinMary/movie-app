import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Home from './component/Home';
import Nav from './component/Nav';
import Cardapi from './component/Cardapi';
import Details from './component/Details';

function App() {
    return (
        <div className=''>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='Nav' element={<Nav />} />
                    <Route path='Cardapi' element={<Cardapi />} />
                    <Route path='/Details/:id' element={<Details />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
