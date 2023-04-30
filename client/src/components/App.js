import React, { useState, useEffect } from 'react';
import LoginScreen from '../routes/LoginScreen';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';


const App = () => {
  return (
    <div className="font-lato">
      <Nav />
      <Routes>
        <Route path="/" element={<LoginScreen />} />
      </Routes>
    </div>
  );
};

export default App;
