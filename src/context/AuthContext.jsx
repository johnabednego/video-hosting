import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const response = await axios.post('https://videohostingplatform.vercel.app/api/auth/login', { email, password });
    setUser(response.data);
  };

  const signup = async (name, email, password) => {
    await axios.post('https://videohostingplatform.vercel.app/api/auth/register', { name, email, password });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
