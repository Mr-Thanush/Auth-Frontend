import { useState } from "react";
import api from "../api";
import "../Styles/auth.css"
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await api.post("/login", { email, password });

    if (res.data.success) {
      navigate("/");
    } else {
      alert(res.data.message);
    }
  };

  return (
    <div className="page-container">
      <form className="card" onSubmit={handleLogin}>
        <h2 className="title">Login</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="btn">Login</button>

        <p className="link-text">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;