// src/AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); // Access the navigate function

  const login = () => {
    setIsAuthenticated(true);
    navigate('/upload'); // Redirect to upload page on login
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate('/login'); // Redirect to login page on logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
