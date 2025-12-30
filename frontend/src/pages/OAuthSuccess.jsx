import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const OAuthSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (!token) {
      navigate("/login");
      return;
    }

    // 1️⃣ Save token
    localStorage.setItem("token", token);

    // 2️⃣ Set token for axios
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    // 3️⃣ Redirect (no extra API calls)
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-lg font-medium">Signing you in…</p>
    </div>
  );
};

export default OAuthSuccess;
