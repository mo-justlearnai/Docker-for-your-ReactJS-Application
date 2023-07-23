// ==================================================
// Title: App
// Author: Mattithyahu
// Created Date: 24/06/2023
// ==================================================


// Imports
// ==================================================
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, NotFound } from './pages';
import { Footer } from './components';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <div className=''>
        <Routes>
            <Route>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='*' element={<NotFound/>} />
                
            </Route>
        </Routes>
    </div>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App