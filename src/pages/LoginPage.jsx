import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { registerUser } from "../services/authService.js";

const ROLES = [
  { value: "victim", label: "Victim / Survivor" },
  { value: "user", label: "Ally / Community User" },
  { value: "police", label: "Police Officer" },
  { value: "admin", label: "Administrator" }
];

function LoginPage() {
  const { login } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname;

  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "victim",
    name: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [mode, setMode] = useState("login"); // "login" | "signup"

  const isSignUp = mode === "signup";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (isSignUp) {
        registerUser({
          username: form.username,
          password: form.password,
          role: form.role,
          name: form.name
        });
        await login({
          username: form.username,
          password: form.password,
          role: form.role
        });
      } else {
        await login({
          username: form.username,
          password: form.password,
          role: form.role
        });
      }
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-section">
      <div className="auth-hero">
        <h1>Welcome to SafeHaven</h1>
        <p>
          A safe, confidential space to seek help, report abuse, and support
          survivors. Your safety and privacy are our priority.
        </p>
        <ul className="auth-highlights">
          <li>Emergency help & safety planning</li>
          <li>Legal rights & support services</li>
          <li>Secure case management for police & admin</li>
          <li>Gender equality & awareness resources</li>
        </ul>
      </div>

      <div className="auth-card" aria-label="Login form">
        {from && (
          <p className="info-text">
            Please login to access: <strong>{from}</strong>
          </p>
        )}
        <h2>{isSignUp ? "Create a SafeHaven account" : "Login"}</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          {isSignUp && (
            <label>
              Display name (optional)
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="How should we address you?"
              />
            </label>
          )}

          <label>
            Username
            <input
              name="username"
              type="text"
              autoComplete="username"
              required
              value={form.username}
              onChange={handleChange}
              placeholder="Choose a username"
            />
          </label>

          <label>
            Password
            <input
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={form.password}
              onChange={handleChange}
              placeholder={isSignUp ? "Create a password" : "Enter your password"}
            />
          </label>

          <label>
            Role
            <select
              name="role"
              required
              value={form.role}
              onChange={handleChange}
            >
              {ROLES.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
          </label>

          {error && <p className="error-text">{error}</p>}

          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
          >
            {loading
              ? isSignUp
                ? "Creating account..."
                : "Signing in..."
              : isSignUp
              ? "Sign up securely"
              : "Sign in securely"}
          </button>

          <div className="auth-switch">
            {isSignUp ? (
              <p>
                Already have an account?{" "}
                <button
                  type="button"
                  className="link-button"
                  onClick={() => setMode("login")}
                >
                  Log in
                </button>
              </p>
            ) : (
              <p>
                New to SafeHaven?{" "}
                <button
                  type="button"
                  className="link-button"
                  onClick={() => setMode("signup")}
                >
                  Sign up
                </button>
              </p>
            )}
          </div>

          {!isSignUp && (
            <div className="demo-hint">
              <p>Demo accounts (no sign-up needed):</p>
              <ul>
                <li>`victim_demo` as Victim</li>
                <li>`user_demo` as Ally / User</li>
                <li>`police_demo` as Police</li>
                <li>`admin_demo` as Administrator</li>
              </ul>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default LoginPage;

