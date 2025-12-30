import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/vendor/signup", form);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
     <form onSubmit={submit} className="card w-full max-w-md space-y-4">
  <h2 className="text-2xl font-semibold text-center">
    Vendor Signup
  </h2>

  <input className="input" placeholder="Name"
    onChange={e=>setForm({...form,name:e.target.value})}/>

  <input className="input" placeholder="Email"
    onChange={e=>setForm({...form,email:e.target.value})}/>

  <input className="input" type="password" placeholder="Password"
    onChange={e=>setForm({...form,password:e.target.value})}/>

  <input className="input" placeholder="Phone"
    onChange={e=>setForm({...form,phone:e.target.value})}/>

  <button className="btn-primary w-full">
    Create Account
  </button>

  {/* 👇 NEW LINK */}
  <p className="text-sm text-center text-gray-600">
    Already have an account?{" "}
    <Link
      to="/login"
      className="text-indigo-600 font-medium hover:underline"
    >
      Login
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

export default Signup;
