import { useEffect } from "react";
import axios from "axios";

function Dashboard() {
  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("http://localhost:8000/api/LoggedIN/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }, []);

  return <h2>Admin Dashboard</h2>;
}

export default Dashboard;
