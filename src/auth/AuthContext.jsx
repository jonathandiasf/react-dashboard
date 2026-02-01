import { createContext, useContext, useState } from "react";
import { ROLES } from "./roles";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username) => {
    // simulação de login
    const role = username === "admin" ? ROLES.ADMIN : ROLES.USER;
    setUser({ name: username, role });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
