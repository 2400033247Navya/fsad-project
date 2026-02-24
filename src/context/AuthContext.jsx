import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest, logoutRequest, getStoredAuth } from "../services/authService.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => getStoredAuth());
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth || !auth.user) return;
  }, [auth]);

  const handleLogin = async ({ username, password, role }) => {
    const result = await loginRequest({ username, password, role });
    setAuth(result);

    if (result.user.role === "victim") navigate("/dashboard/victim", { replace: true });
    if (result.user.role === "user") navigate("/dashboard/user", { replace: true });
    if (result.user.role === "police") navigate("/dashboard/police", { replace: true });
    if (result.user.role === "admin") navigate("/dashboard/admin", { replace: true });
  };

  const handleLogout = () => {
    logoutRequest();
    setAuth(null);
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      auth,
      user: auth?.user || null,
      token: auth?.token || null,
      isAuthenticated: Boolean(auth?.token),
      login: handleLogin,
      logout: handleLogout
    }),
    [auth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}

