/* eslint-disable import/no-cycle */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Categories from '../pages/Categories';
import Books from '../pages/Books';
import './styles/Pro.css';

function Pro() {
  return (
    <>
      <div className="container">
        <div className="main-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Pro;
