import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { ROLES } from "../auth/roles";
import ChartJSChart from "../components/ChartJSChart";
import BitcoinCard from "../components/BitcoinCard";
import { dashboardData } from "../data/dashboardData";

export default function Dashboard() {
  const [dark, setDark] = useState(false);
  const { user, logout } = useAuth();

  const theme = dark ? darkTheme : lightTheme;

  const cardStyle = {
    ...styles.card,
    background: theme.card,
    boxShadow: dark
      ? "0 6px 20px rgba(0,0,0,0.4)"
      : "0 6px 20px rgba(0,0,0,0.15)",
  };

  return (
    <div style={{ ...styles.container, background: theme.bg }}>
      {/* ===== HEADER ===== */}
      <header style={styles.header}>
        <h1 style={{ color: theme.text }}>
          Dashboard {user ? `- ${user.role}` : ""}
        </h1>

        <div style={styles.actions}>
          <button
            style={{ ...styles.toggle, background: theme.card, color: theme.text }}
            onClick={() => setDark(!dark)}
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>

          <button style={styles.logout} onClick={logout}>
            Logout
          </button>
        </div>
      </header>

      {/* ===== GRID ===== */}
      <div style={styles.grid}>
        {/* Bitcoin — somente ADMIN */}
        {user?.role === ROLES.ADMIN && (
          <div style={cardStyle}>
            <BitcoinCard />
          </div>
        )}

        {/* Gráficos */}
        {dashboardData.map((chart) => (
          <div key={chart.id} style={cardStyle}>
            <ChartJSChart
              type={chart.type}
              title={chart.title}
              labels={chart.labels}
              data={chart.data}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================== THEMES ================== */
const lightTheme = {
  bg: "#f5f6fa",
  card: "#ffffff",
  text: "#222",
};

const darkTheme = {
  bg: "#0f172a",
  card: "#1e293b",
  text: "#f1f5f9",
};

/* ================== STYLES ================== */
const styles = {
  container: {
    minHeight: "100vh",
    padding: 24,
    fontFamily: "Arial, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  actions: {
    display: "flex",
    gap: 12,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 24,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    height: 300,
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  toggle: {
    border: "none",
    borderRadius: 8,
    padding: "8px 16px",
    cursor: "pointer",
    fontSize: 14,
  },
  logout: {
    border: "none",
    borderRadius: 8,
    padding: "8px 16px",
    cursor: "pointer",
    fontSize: 14,
    background: "#ef4444",
    color: "#fff",
  },
};
