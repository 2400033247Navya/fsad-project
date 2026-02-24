import React from "react";

function AboutPage() {
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
      fontSize: "40px",
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
    list: {
      paddingLeft: "18px",
      color: "#9ca3af",
      lineHeight: 1.7
    },
    paragraph: {
      fontSize: "15px",
      color: "#9ca3af",
      lineHeight: 1.6,
      marginBottom: "14px"
    },
    muted: {
      fontSize: "14px",
      color: "#6b7280"
    },
    footerNote: {
      marginTop: "60px",
      padding: "40px",
      backgroundColor: "#111827",
      border: "1px solid #1f2937",
      borderRadius: "6px",
      textAlign: "center"
    },
    footerText: {
      fontSize: "16px",
      color: "#9ca3af",
      lineHeight: 1.7
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Header */}
        <header style={styles.header}>
          <h1 style={styles.title}>About SafeHaven</h1>
          <p style={styles.subtitle}>
            SafeHaven is an academic project demonstrating how digital
            platforms can support survivors of domestic violence, empower
            communities, and promote gender equality through structured,
            role-based systems.
          </p>
        </header>

        {/* Content Grid */}
        <section style={styles.grid}>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Our Goals</h2>
            <ul style={styles.list}>
              <li>
                Provide a secure environment to access essential information
                and support resources.
              </li>
              <li>
                Demonstrate structured dashboards for victims, allies, police,
                and administrative authorities.
              </li>
              <li>
                Increase awareness of the social and psychological impact of
                gender-based violence.
              </li>
              <li>
                Promote accountability, privacy, and equitable access to justice.
              </li>
            </ul>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Important Disclaimer</h2>
            <p style={styles.paragraph}>
              This implementation of SafeHaven is a front-end demonstration
              project created for educational purposes. It does not provide
              real-time emergency response, verified counselling services,
              or secure backend data storage.
            </p>
            <p style={styles.muted}>
              If you or someone you know is in immediate danger, contact local
              emergency services or trusted support organisations immediately.
            </p>
          </div>
        </section>

        {/* Closing Section */}
        <section style={styles.footerNote}>
          <p style={styles.footerText}>
            SafeHaven reflects how technology can be structured to support
            safety, awareness, and responsible intervention in cases of
            domestic violence.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;