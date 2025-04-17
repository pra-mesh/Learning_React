import { useState, createContext } from "react";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Pramesh Pradhan",
    roles: ["admin", "user"],
  });
  const changeName = (value) => {
    setUser((prev) => {
      return { ...prev, name: value };
    });
  };
  return (
    <AuthContext.Provider value={{ user, changeName, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
