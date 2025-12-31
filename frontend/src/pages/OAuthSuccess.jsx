import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";
import { jwtDecode } from "jwt-decode";

const OAuthSuccess = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (!token) {
      navigate("/login");
      return;
    }

    // ✅ Decode token to get user data
    const decoded = jwtDecode(token);

    const user = {
      _id: decoded.id,
      role: decoded.role
    };

    // ✅ Persist BOTH user + token (THIS WAS MISSING)
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    // ✅ Update context
    login(user, token);

    navigate("/dashboard");
  }, [navigate, login]);

  return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-lg font-medium">Signing you in…</p>
    </div>
  );
};

export default OAuthSuccess;
