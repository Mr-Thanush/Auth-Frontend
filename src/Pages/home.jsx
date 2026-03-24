import api from "../api";
import "../Styles/auth.css"
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

function Home() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await api.post("/logout");
    navigate("/login");
  };

  return (
    <div className="page-container">
      <div className="card">
        <h1 className="title">Dashboard</h1>
        <p className="subtitle">Welcome back 👋</p>

        <button className="btn logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;