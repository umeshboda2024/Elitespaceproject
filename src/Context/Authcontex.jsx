import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    role: "admin", // admin | agent | user
    permissions: [
      "view_dashboard",
      "add_property",
      "delete_property",
      "view_inquiries",
      "view_settings",
    ],
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
