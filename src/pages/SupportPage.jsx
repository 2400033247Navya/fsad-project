import React from "react";

function SupportPage() {
  const styles = {
    wrapper: {
      backgroundColor: "#000000",
      minHeight: "100vh",
      padding: "60px 20px",
      fontFamily: "Segoe UI, Roboto, sans-serif",
      color: "#e5e7eb"
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto"
    },
    header: {
      textAlign: "center",
      marginBottom: "60px"
    },
    title: {
      fontSize: "38px",
      fontWeight: 600,
      color: "#ffffff",
      marginBottom: "18px"
    },
    subtitle: {
      fontSize: "16px",
      color: "#9ca3af",
      maxWidth: "760px",
      margin: "0 auto",
      lineHeight: 1.7
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "30px"
    },
    card: {
      backgroundColor: "#111827",
      padding: "30px",
      borderRadius: "6px",
      border: "1px solid #1f2937"
    },
    cardTitle: {
      fontSize: "20px",
      marginBottom: "16px",
      color: "#ffffff"
    },
    text: {
      fontSize: "15px",
      color: "#9ca3af",
      lineHeight: 1.6,
      marginBottom: "12px"
    },
    link: {
      color: "#ffffff",
      textDecoration: "none",
      fontWeight: 500
    },
    list: {
      paddingLeft: "18px",
      color: "#9ca3af",
      lineHeight: 1.6
    },
    cta: {
      marginTop: "60px",
      padding: "40px",
      backgroundColor: "#111827",
      border: "1px solid #1f2937",
      borderRadius: "6px",
      textAlign: "center"
    },
    ctaText: {
      fontSize: "18px",
      marginBottom: "20px",
      color: "#ffffff"
    },
    dangerBtn: {
      padding: "12px 26px",
      backgroundColor: "#dc2626",
      color: "#ffffff",
      border: "none",
      borderRadius: "4px",
      fontSize: "14px",
      fontWeight: 500,
      cursor: "pointer"
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Support & Resources</h1>
          <p style={styles.subtitle}>
            Access emergency contacts, counselling services, and digital safety
            guidance. Prioritise your safety at all times.
          </p>
        </header>

        <section style={styles.grid}>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Emergency Contacts</h2>
            <p style={styles.text}>
              Emergency Services: <a href="tel:112" style={styles.link}>112</a>
            </p>
            <p style={styles.text}>
              Local Police: Use non-emergency numbers when safe.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Counselling & Shelters</h2>
            <p style={styles.text}>
              Reach licensed counsellors, crisis shelters, and community
              organisations specialising in gender-based violence.
            </p>
            <p style={styles.text}>
              Use official NGO or government directories for verified services.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Digital Safety</h2>
            <ul style={styles.list}>
              <li>Use private browsing.</li>
              <li>Clear history and call logs.</li>
              <li>Enable two-factor authentication.</li>
              <li>Log out from shared devices.</li>
            </ul>
          </div>
        </section>

        <section style={styles.cta}>
          <h3 style={styles.ctaText}>
            If you are at risk, contact emergency services immediately.
          </h3>
          <button style={styles.dangerBtn}>Contact Emergency</button>
        </section>
      </div>
    </div>
  );
}

export default SupportPage;