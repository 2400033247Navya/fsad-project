import React, { useMemo, useState } from "react";

const initialCases = [
  {
    id: "SH-001",
    priority: "High",
    status: "Open",
    victimAlias: "Case A",
    assignedTo: "Officer A.",
    createdAt: "2026-02-20"
  },
  {
    id: "SH-002",
    priority: "Medium",
    status: "Under Investigation",
    victimAlias: "Case B",
    assignedTo: "Officer B.",
    createdAt: "2026-02-21"
  },
  {
    id: "SH-003",
    priority: "Low",
    status: "Closed",
    victimAlias: "Case C",
    assignedTo: "Officer A.",
    createdAt: "2026-02-18"
  }
];

function PoliceDashboard() {
  const [cases, setCases] = useState(initialCases);
  const [filter, setFilter] = useState("All");

  const filteredCases = useMemo(() => {
    if (filter === "All") return cases;
    return cases.filter((c) => c.status === filter);
  }, [cases, filter]);

  const handleStatusChange = (id, status) => {
    setCases((prev) => prev.map((c) => (c.id === id ? { ...c, status } : c)));
  };

  return (
    <section className="dashboard">
      <header className="dashboard-header">
        <h1>Police Dashboard</h1>
        <p>
          Manage domestic violence cases, prioritise high-risk situations, and
          ensure victim safety and confidentiality.
        </p>
      </header>

      <div className="dashboard-grid">
        <section className="card" aria-label="Case overview">
          <h2>Case Overview</h2>
          <div className="stats-row">
            <div className="stat">
              <span className="stat-label">Total</span>
              <span className="stat-value">{cases.length}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Open</span>
              <span className="stat-value">
                {cases.filter((c) => c.status === "Open").length}
              </span>
            </div>
            <div className="stat">
              <span className="stat-label">Under Investigation</span>
              <span className="stat-value">
                {cases.filter((c) => c.status === "Under Investigation").length}
              </span>
            </div>
            <div className="stat">
              <span className="stat-label">Closed</span>
              <span className="stat-value">
                {cases.filter((c) => c.status === "Closed").length}
              </span>
            </div>
          </div>
        </section>

        <section className="card" aria-label="Case list and management">
          <div className="card-header-row">
            <h2>Manage Cases</h2>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              aria-label="Filter by status"
            >
              <option value="All">All statuses</option>
              <option value="Open">Open</option>
              <option value="Under Investigation">Under Investigation</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Case ID</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Victim (Alias)</th>
                  <th>Assigned To</th>
                  <th>Opened</th>
                </tr>
              </thead>
              <tbody>
                {filteredCases.map((c) => (
                  <tr key={c.id}>
                    <td>{c.id}</td>
                    <td>{c.priority}</td>
                    <td>
                      <select
                        value={c.status}
                        onChange={(e) =>
                          handleStatusChange(c.id, e.target.value)
                        }
                        aria-label={`Change status for ${c.id}`}
                      >
                        <option value="Open">Open</option>
                        <option value="Under Investigation">
                          Under Investigation
                        </option>
                        <option value="Closed">Closed</option>
                      </select>
                    </td>
                    <td>{c.victimAlias}</td>
                    <td>{c.assignedTo}</td>
                    <td>{c.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="muted">
            Use victim-safe aliases instead of real names. Store identifying
            information securely in a protected law-enforcement system.
          </p>
        </section>
      </div>
    </section>
  );
}

export default PoliceDashboard;

