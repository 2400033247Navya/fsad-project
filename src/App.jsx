import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import VictimDashboard from "./pages/VictimDashboard.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import PoliceDashboard from "./pages/PoliceDashboard.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import TopBar from "./components/layout/TopBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import SupportPage from "./pages/SupportPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

function App() {
  return (
    <AuthProvider>
      <div className="app-root">
        <TopBar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route
              path="/dashboard/victim"
              element={
                <ProtectedRoute allowedRoles={["victim"]}>
                  <VictimDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/dashboard/user"
              element={
                <ProtectedRoute allowedRoles={["user"]}>
                  <UserDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/dashboard/police"
              element={
                <ProtectedRoute allowedRoles={["police"]}>
                  <PoliceDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/dashboard/admin"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;

