import React, { useState } from "react";

const awarenessTopics = [
  {
    title: "Recognising Signs of Abuse",
    body:
      "Unexplained injuries, fearfulness, isolation, controlling behaviour by a partner, and sudden changes in behaviour can all be warning signs."
  },
  {
    title: "How to Support a Survivor",
    body:
      "Listen without judgment, believe them, respect their choices, and help them connect with professional services when they are ready."
  },
  {
    title: "Promoting Gender Equality",
    body:
      "Challenge harmful stereotypes, speak up against sexist language, and support equal opportunities in education, work, and leadership."
  }
];

function UserDashboard() {
  const [report, setReport] = useState("");
  const [submittedReports, setSubmittedReports] = useState([]);

  const handleSubmitReport = (e) => {
    e.preventDefault();
    if (!report.trim()) return;
    setSubmittedReports((prev) => [
      ...prev,
      { id: prev.length + 1, text: report.trim(), createdAt: new Date() }
    ]);
    setReport("");
  };

  return (
    <section className="dashboard">
      <header className="dashboard-header">
        <h1>Community User Dashboard</h1>
        <p>
          Learn how to prevent violence, support survivors, and promote gender
          equality in your community.
        </p>
      </header>

      <div className="dashboard-grid">
        <section className="card" aria-label="Awareness topics">
          <h2>Awareness & Education</h2>
          <div className="card-columns">
            {awarenessTopics.map((topic) => (
              <article key={topic.title} className="mini-card">
                <h3>{topic.title}</h3>
                <p>{topic.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="card" aria-label="Submit anonymous concern">
          <h2>Submit Anonymous Concern</h2>
          <p>
            If you are worried about someone&apos;s safety, you can submit an
            anonymous concern. This demo stores your report only in this browser
            session.
          </p>
          <form onSubmit={handleSubmitReport} className="form-vertical">
            <textarea
              rows={4}
              placeholder="Share what you observed (avoid using names if possible)..."
              value={report}
              onChange={(e) => setReport(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Submit Concern
            </button>
          </form>
          {submittedReports.length > 0 && (
            <div className="report-list">
              <h3>Your Submitted Concerns (Local Only)</h3>
              <ul>
                {submittedReports.map((r) => (
                  <li key={r.id}>
                    <p>{r.text}</p>
                    <span className="report-meta">
                      {r.createdAt.toLocaleString()}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </div>
    </section>
  );
}

export default UserDashboard;

