import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login';

const RoutesComponent: React.FC = () => {
  
    return (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
    );
  };
  
  export default RoutesComponent;

