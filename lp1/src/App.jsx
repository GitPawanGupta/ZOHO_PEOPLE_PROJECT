import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainRoute from './Routes/MainRoute'; // Adjust path if needed

function App() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      localStorage.setItem('authToken', token);
      window.history.replaceState({}, document.title, '/');
    }
  }, []);

  return (
    <Routes>
      <Route path="/*" element={<MainRoute />} />
    </Routes>
  );
}

export default App;
