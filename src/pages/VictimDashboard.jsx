import React, { useState } from "react";

const supportContacts = [
  {
    name: "National Domestic Violence Helpline",
    phone: "112",
    type: "Emergency"
  },
  {
    name: "Women & Child Support Centre",
    phone: "+1-800-000-000",
    type: "Counselling"
  },
  {
    name: "Legal Aid Clinic",
    phone: "+1-800-111-222",
    type: "Legal Support"
  }
];

const legalRights = [
  "You have the right to live free from violence and abuse.",
  "You can file a confidential complaint with the police or protection officer.",
  "You are entitled to medical care and documentation of injuries.",
  "You may access free or subsidised legal aid in many jurisdictions.",
  "You have the right to emergency shelter and protection orders in many countries."
];

const healthRisks = [
  "Physical injuries (bruises, fractures, chronic pain).",
  "Mental health impacts (anxiety, depression, PTSD).",
  "Sexual and reproductive health issues.",
  "Risk of escalation of violence over time.",
  "Impact on children who witness violence."
];

function VictimDashboard() {
  const [messages, setMessages] = useState([
    {
      from: "support",
      text: "You are not alone. This space is for you.",
      at: new Date().toLocaleTimeString()
    }
  ]);
  const [draft, setDraft] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!draft.trim()) return;
    const time = new Date().toLocaleTimeString();
    const userMsg = { from: "you", text: draft.trim(), at: time };
    const reply = {
      from: "support",
      text:
        "Thank you for reaching out. If you are in immediate danger, please use the emergency call above or contact local authorities.",
      at: time
    };
    setMessages((prev) => [...prev, userMsg, reply]);
    setDraft("");
  };

  return (
    <section className="dashboard">
      <header className="dashboard-header">
        <h1>Victim / Survivor Dashboard</h1>
        <p>
          Access emergency help, know your rights, and connect with support in a
          safer digital space.
        </p>
      </header>

      <div className="dashboard-grid">
        <section className="card emergency-card" aria-label="Emergency help">
          <h2>Emergency Help</h2>
          <p>If you are in immediate danger, please leave this page and call:</p>
          <a className="emergency-button" href="tel:112">
            Call 112 (Emergency Services)
          </a>
          <p className="muted">
            Use a safe device and network whenever possible. Clear your browser
            history after use if it is safe to do so.
          </p>
        </section>

        <section className="card" aria-label="Support services">
          <h2>Support Services</h2>
          <ul className="contact-list">
            {supportContacts.map((c) => (
              <li key={c.name}>
                <p className="contact-name">{c.name}</p>
                <p className="contact-meta">
                  {c.type} &middot;{" "}
                  <a href={`tel:${c.phone.replace(/[^0-9+]/g, "")}`}>{c.phone}</a>
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="card" aria-label="Legal rights information">
          <h2>Your Legal Rights</h2>
          <ul className="bullet-list">
            {legalRights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="muted">
            Laws differ by country. Please consult local legal aid or
            organisations for specific guidance in your area.
          </p>
        </section>

        <section className="card" aria-label="Health risks awareness">
          <h2>Health & Safety Awareness</h2>
          <ul className="bullet-list">
            {healthRisks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="muted">
            Consider speaking with a trusted healthcare professional to
            confidentially document any injuries or health concerns.
          </p>
        </section>

        <section className="card chat-card" aria-label="Secure chat">
          <h2>Support Chat (Demo Only)</h2>
          <div className="chat-window" role="log" aria-live="polite">
            {messages.map((m, idx) => (
              <div
                key={`${m.at}-${idx}`}
                className={`chat-message chat-${m.from}`}
              >
                <div className="chat-bubble">
                  <p>{m.text}</p>
                  <span className="chat-meta">{m.at}</span>
                </div>
              </div>
            ))}
          </div>
          <form className="chat-input-row" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Write a message (do not share names or exact locations)..."
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
          <p className="muted">
            This is a demonstration chat only. For real support, contact official
            hotlines and verified organisations.
          </p>
        </section>
      </div>
    </section>
  );
}

export default VictimDashboard;

