import React, { useMemo, useState } from "react";

const initialUsers = [
  { id: 1, name: "Anonymous Victim", username: "victim_demo", role: "victim" },
  { id: 2, name: "Concerned Citizen", username: "user_demo", role: "user" },
  { id: 3, name: "Officer A.", username: "police_demo", role: "police" },
  { id: 4, name: "System Admin", username: "admin_demo", role: "admin" }
];

const initialReports = [
  { id: "R-01", type: "Incident", status: "Open" },
  { id: "R-02", type: "System", status: "Resolved" },
  { id: "R-03", type: "Incident", status: "Under Review" }
];

function AdminDashboard() {
  const [users, setUsers] = useState(initialUsers);
  const [reports] = useState(initialReports);
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    role: "user"
  });

  const stats = useMemo(
    () => ({
      totalUsers: users.length,
      victims: users.filter((u) => u.role === "victim").length,
      police: users.filter((u) => u.role === "police").length,
      admins: users.filter((u) => u.role === "admin").length
    }),
    [users]
  );

  const handleNewUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!newUser.name.trim() || !newUser.username.trim()) return;
    setUsers((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: newUser.name.trim(),
        username: newUser.username.trim(),
        role: newUser.role
      }
    ]);
    setNewUser({ name: "", username: "", role: "user" });
  };

  return (
    <section className="dashboard">
      <header className="dashboard-header">
        <h1>Administration Dashboard</h1>
        <p>
          Oversee users, monitor reports, and ensure data security and privacy
          across the SafeHaven platform.
        </p>
      </header>

      <div className="dashboard-grid">
        <section className="card" aria-label="System statistics">
          <h2>System Overview</h2>
          <div className="stats-row">
            <div className="stat">
              <span className="stat-label">Total Users</span>
              <span className="stat-value">{stats.totalUsers}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Victims</span>
              <span className="stat-value">{stats.victims}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Police</span>
              <span className="stat-value">{stats.police}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Admins</span>
              <span className="stat-value">{stats.admins}</span>
            </div>
          </div>
        </section>

        <section className="card" aria-label="User management">
          <h2>User Management</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.name}</td>
                    <td>{u.username}</td>
                    <td>{u.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <form className="form-inline" onSubmit={handleAddUser}>
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={newUser.name}
              onChange={handleNewUserChange}
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={newUser.username}
              onChange={handleNewUserChange}
            />
            <select
              name="role"
              value={newUser.role}
              onChange={handleNewUserChange}
            >
              <option value="victim">Victim</option>
              <option value="user">User</option>
              <option value="police">Police</option>
              <option value="admin">Admin</option>
            </select>
            <button type="submit" className="btn btn-primary">
              Add User
            </button>
          </form>
          <p className="muted">
            In a production system, user creation would require strong
            authentication, auditing, and integration with a secure backend.
          </p>
        </section>

        <section className="card" aria-label="Reports">
          <h2>Reports</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Report ID</th>
                  <th>Type</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((r) => (
                  <tr key={r.id}>
                    <td>{r.id}</td>
                    <td>{r.type}</td>
                    <td>{r.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="muted">
            Connect this module to police case systems and anonymous reporting
            tools to track real incidents while preserving privacy.
          </p>
        </section>
      </div>
    </section>
  );
}

export default AdminDashboard;

