import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username);
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.card}>
        <h2>Login</h2>

        <input
          placeholder="Digite admin ou user"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />

        <button style={styles.button}>Entrar</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
  },
  card: {
    background: "#1e293b",
    padding: 32,
    borderRadius: 12,
    width: 320,
    color: "#f1f5f9",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },
  input: {
    width: "100%",
    padding: 10,
    marginTop: 12,
    marginBottom: 16,
    borderRadius: 6,
    border: "none",
  },
  button: {
    width: "100%",
    padding: 10,
    borderRadius: 6,
    border: "none",
    cursor: "pointer",
    background: "#3b82f6",
    color: "#fff",
    fontWeight: "bold",
  },
};
