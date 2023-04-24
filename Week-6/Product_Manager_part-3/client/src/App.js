import React, { useState } from 'react';
import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Main from './views/MainView';
import ProductDisplayOne from './components/ProductDisplayOne';
import EditOneProduct from './components/EditOneProduct';

function App() {
  return (
      <div className='App'>
    <BrowserRouter>
    <h1 style={{color:"cyan"}}>Welcome to Project Manager!!</h1>
        <Routes>
          <Route  path='/' element={<Main />}  />
          <Route  path='/product/:id' element={<ProductDisplayOne />}  />
          <Route path='/edit/:id' element={<EditOneProduct />} />
        </Routes>
    </BrowserRouter>
      </div>
  );
}

export default App;
