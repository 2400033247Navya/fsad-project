import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

function TopBar() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const dashboardPath =
    user?.role === "victim"
      ? "/dashboard/victim"
      : user?.role === "user"
      ? "/dashboard/user"
      : user?.role === "police"
      ? "/dashboard/police"
      : user?.role === "admin"
      ? "/dashboard/admin"
      : "/login";

  const handleQuickExit = () => {
    try {
      navigate("/", { replace: true });
    } finally {
      window.location.href = "https://www.google.com";
    }
  };

  return (
    <header className="topbar" aria-label="SafeHaven main navigation">
      <nav className="nav-links" aria-label="Primary">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `nav-link${isActive ? " nav-link-active" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/support"
          className={({ isActive }) =>
            `nav-link${isActive ? " nav-link-active" : ""}`
          }
        >
          Support
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `nav-link${isActive ? " nav-link-active" : ""}`
          }
        >
          About
        </NavLink>
        <NavLink
          to={isAuthenticated ? dashboardPath : "/login"}
          className={({ isActive }) =>
            `nav-link${isActive ? " nav-link-active" : ""}`
          }
        >
          {isAuthenticated ? "Dashboard" : "Login"}
        </NavLink>
      </nav>

      <div className="topbar-center">
        <span className="brand brand-center">SAFEHAVEN</span>
      </div>

      <div className="topbar-right">
        {isAuthenticated && user && (
          <span className="user-pill">
            <span className="user-role">{user.role.toUpperCase()}</span>
            <span className="user-name">{user.name}</span>
          </span>
        )}
        {isAuthenticated && (
          <button
            type="button"
            className="btn btn-ghost"
            onClick={logout}
            aria-label="Logout"
          >
            Logout
          </button>
        )}
        <button
          type="button"
          className="btn btn-ghost quick-exit"
          onClick={handleQuickExit}
        >
          Quick Exit
        </button>
      </div>
    </header>
  );
}

export default TopBar;


