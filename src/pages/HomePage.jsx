import React from "react";

function HomePage() {
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
    hero: {
      textAlign: "center",
      marginBottom: "70px"
    },
    title: {
      fontSize: "42px",
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
      gap: "30px",
      marginBottom: "70px"
    },
    card: {
      backgroundColor: "#111827",
      padding: "32px",
      borderRadius: "6px",
      border: "1px solid #1f2937"
    },
    cardTitle: {
      fontSize: "20px",
      marginBottom: "14px",
      color: "#ffffff"
    },
    cardText: {
      fontSize: "15px",
      color: "#9ca3af",
      lineHeight: 1.6,
      marginBottom: "22px"
    },
    btn: {
      padding: "10px 20px",
      backgroundColor: "#ffffff",
      color: "#000000",
      border: "none",
      borderRadius: "4px",
      fontSize: "14px",
      cursor: "pointer",
      fontWeight: 500
    },
    info: {
      textAlign: "center",
      marginBottom: "60px"
    },
    infoTitle: {
      fontSize: "26px",
      marginBottom: "16px",
      color: "#ffffff"
    },
    infoText: {
      maxWidth: "820px",
      margin: "0 auto",
      fontSize: "16px",
      color: "#9ca3af",
      lineHeight: 1.8
    },
    cta: {
      backgroundColor: "#111827",
      padding: "45px",
      borderRadius: "6px",
      border: "1px solid #1f2937",
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
        <header style={styles.hero}>
          <h1 style={styles.title}>SafeHaven</h1>
          <p style={styles.subtitle}>
            A secure digital platform providing legal guidance, emergency
            resources, and role-based access for victims, communities, and
            authorities addressing domestic violence.
          </p>
        </header>

        <section style={styles.grid}>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Victims & Survivors</h2>
            <p style={styles.cardText}>
              Confidential reporting, verified support services, legal
              protections, and emergency assistance access.
            </p>
            <button style={styles.btn}>View Services</button>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Allies & Community</h2>
            <p style={styles.cardText}>
              Awareness resources, prevention strategies, and responsible
              guidance for community intervention.
            </p>
            <button style={styles.btn}>Learn More</button>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Police & Administration</h2>
            <p style={styles.cardText}>
              Secure case tracking, structured reporting, compliance monitoring,
              and administrative dashboards.
            </p>
            <button style={styles.btn}>Access Portal</button>
          </div>
        </section>

        <section style={styles.info}>
          <h2 style={styles.infoTitle}>Platform Objectives</h2>
          <p style={styles.infoText}>
            SafeHaven prioritises privacy, accountability, and equitable access
            to justice through secure workflows, authentication controls, and
            survivor-centric system design.
          </p>
        </section>

        <section style={styles.cta}>
          <h3 style={styles.ctaText}>
            If you are in immediate danger, contact emergency services.
          </h3>
          <button style={styles.dangerBtn}>Emergency Assistance</button>
        </section>
      </div>
    </div>
  );
}

export default HomePage;