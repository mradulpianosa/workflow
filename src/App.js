import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';  // Assuming you have a Login component
import Dashboard from './Dashboard';  // Assuming you have a Dashboard component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define Routes with 'element' for rendering components */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
