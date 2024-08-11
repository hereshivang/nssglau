import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8080/api/admin/login', { email, password });
      if (response.status === 201) {
        setIsAuthenticated(true);
        setError(null);
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
