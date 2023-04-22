import React, { useState } from 'react';
import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Main from './views/MainView';
import ProductDisplayOne from './components/ProductDisplayOne';

function App() {
  return (
      <div className='App'>
    <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Main />}  />
          <Route  path='/product/:_id' element={<ProductDisplayOne />}  />
        </Routes>
    </BrowserRouter>
      </div>
  );
}

export default App;
