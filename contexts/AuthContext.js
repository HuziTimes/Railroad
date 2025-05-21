import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      // Replace with your actual authentication logic
      const user = await mockAuthAPI(email, password);
      setCurrentUser(user);
      navigate('/account');
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setCurrentUser(null);
    navigate('/');
  };

  const register = async (userData) => {
    try {
      // Replace with your actual registration logic
      const user = await mockRegisterAPI(userData);
      setCurrentUser(user);
      navigate('/account');
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      login,
      logout,
      register,
      isAuthenticated: !!currentUser
    }}>
      {children}
    </AuthContext.Provider>
  );
}

// Mock API functions - replace with real API calls
async function mockAuthAPI(email, password) {
  return { id: 1, email, name: 'Test User' };
}

async function mockRegisterAPI(userData) {
  return { id: 1, ...userData };
}

export function useAuth() {
  return useContext(AuthContext);
} 