import { useState, useEffect } from 'react';
import {
  Navigate,
  Route,
  Routes,
  BrowserRouter as Router,
} from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/regis';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/regis" element={<Register />} />
      </Routes>
    </Router>
  );
};
export default App;
