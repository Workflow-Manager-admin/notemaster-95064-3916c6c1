import React, { createContext, useState, useCallback } from "react";

/**
 * Context for managing user authentication state and logic.
 * This demo uses simple local state; replace with proper backend auth as needed.
 */

export const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
});

// PUBLIC_INTERFACE
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // PUBLIC_INTERFACE
  const login = useCallback((username, password) => {
    // Stub: Accept any username/password
    setUser({ username });
  }, []);

  // PUBLIC_INTERFACE
  const logout = useCallback(() => setUser(null), []);

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
