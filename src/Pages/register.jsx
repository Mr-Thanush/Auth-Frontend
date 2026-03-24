import { useState } from "react";
import api from "../api";
import "../Styles/auth.css"
import { useNavigate, Link } from "react-router-dom";


function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await api.post("/register", {
      name,
      email,
      password
    });

    if (res.data.success) {
      navigate("/");
    } else {
      alert(res.data.message);
    }
  };

  return (
    <div className="page-container">
      <form className="card" onSubmit={handleRegister}>
        <h2 className="title">Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
          required
        />

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

        <button className="btn">Register</button>

        <p className="link-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;