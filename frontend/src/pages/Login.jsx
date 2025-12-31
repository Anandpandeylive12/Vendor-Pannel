import { useState } from "react";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";



const Login = () => {
  const [form, setForm] = useState({});
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const res = await api.post("/vendor/login", form);
    login(res.data.vendor, res.data.token);
    navigate("/dashboard");
  };
useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    navigate("/dashboard");
  }
}, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={submit} className="card w-full max-w-md space-y-4">
  <h2 className="text-2xl font-semibold text-center">
    Vendor Login
  </h2>

  <input
    className="input"
    placeholder="Email"
    onChange={e=>setForm({...form,email:e.target.value})}
  />

  <input
    className="input"
    type="password"
    placeholder="Password"
    onChange={e=>setForm({...form,password:e.target.value})}
  />

  <button className="btn-primary w-full">
    Login
  </button>

  {/* 👇 NEW LINK */}
  <p className="text-sm text-center text-gray-600">
    Don’t have an account?{" "}
    <Link
      to="/"
      className="text-indigo-600 font-medium hover:underline"
    >
      Sign up
    </Link>
  </p>
  <a
  href="http://localhost:5000/api/vendor/google"
  className="w-full flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-100 transition"
>
  <img
    src="https://developers.google.com/identity/images/g-logo.png"
    alt="Google"
    className="w-5 h-5"
  />
  Continue with Google
</a>

</form>

    </div>
  );
};

export default Login;
