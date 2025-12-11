import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function Loginpage() {
  const navigate = useNavigate();

  // State for email, password
  const [login, setLogin] = useState({ email: "", password: "" });

  // State for role (customer or provider)
  const [role, setRole] = useState("");

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const submitLogin = (e) => {
    e.preventDefault();

    // Check role and redirect
    if (role === "customer") {
      navigate("/customer");
    } else if (role === "provider") {
      navigate("/provider");
    } else {
      alert("Please select a role");
      return;
    }

    alert("Login Successful!");
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <h3 className="text-center mb-3 login-title">Login</h3>

        <form onSubmit={submitLogin}>
          <input
            type="email"
            name="email"
            className="form-control login-input mb-3"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            className="form-control login-input mb-3"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          {/* ROLE SELECTION DROPDOWN */}
          <select
            className="form-control login-input mb-3"
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="customer">Customer</option>
            <option value="provider">Service Provider</option>
          </select>

          <button className="btn login-btn w-100">Login</button>

          <p className="text-center mt-2 login-text">
            Don't have an account?{" "}
            <span
              className="signup-link"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Loginpage;
