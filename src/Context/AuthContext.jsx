import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = sessionStorage.getItem("clutchUser");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  const isAuthenticated = Boolean(user);

  useEffect(() => {
    if (user) {
      sessionStorage.setItem("clutchUser", JSON.stringify(user));
    } else {
      sessionStorage.removeItem("clutchUser");
    }
  }, [user]);

  const login = (userData) => {
    setUser(userData);
  };

  const signup = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}