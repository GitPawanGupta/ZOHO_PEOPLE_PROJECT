import React, { useEffect, useState } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Sidebar from '../components/Sidebar';

const MainRoute = () => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("authToken") !== null;
  const [role, setRole] = useState(localStorage.getItem("userRole"));

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const roleFromQuery = params.get("role");
    if (roleFromQuery) {
      localStorage.setItem("userRole", roleFromQuery);
      setRole(roleFromQuery);
    }
  }, [location]);

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = "http://localhost:3000"; // Redirect if not authenticated
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) return null;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sidebar" element={<Sidebar />} />
      {/* Add other routes here */}
    </Routes>
  );
};

export default MainRoute;
