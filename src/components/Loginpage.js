import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Loginpage() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ email: "", password: "" });
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const submitLogin = (e) => {
    e.preventDefault();

    if (role === "") {
      toast.error("Please select a role!");
      return;
    }

    toast.success("Login Successful!", { autoClose: 1500 });

    setTimeout(() => {
      if (role === "customer") navigate("/customer");
      else if (role === "provider") navigate("/provider");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-5">
      <ToastContainer />
      <div className="w-full max-w-md bg-white backdrop-blur-lg rounded-2xl p-10 shadow-xl border border-gray-200 animate-fadeIn">
        <h3 className="text-center mb-8 text-3xl font-extrabold text-gray-800">
          Welcome Back
        </h3>

        <form onSubmit={submitLogin} className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="text-gray-600 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none transition"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label htmlFor="password" className="text-gray-600 font-medium">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none transition"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bottom-12 text-gray-500 cursor-pointer select-none"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10a9.958 9.958 0 012.051-5.738m1.529 1.529A7.978 7.978 0 003 9c0 4.418 3.582 8 8 8a7.978 7.978 0 005.209-1.58M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </span>
          </div>

          {/* Role Selection */}
          <div>
            <label htmlFor="role" className="text-gray-600 font-medium">
              Select Role
            </label>
            <select
              id="role"
              onChange={(e) => setRole(e.target.value)}
              required
              className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none transition"
            >
              <option value="">-- Choose Role --</option>
              <option value="customer">Customer</option>
              <option value="provider">Service Provider</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Login
          </button>

          <p className="text-center text-gray-600 mt-2">
            Don't have an account?{" "}
            <span
              className="text-blue-500 font-medium cursor-pointer hover:underline"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>

      {/* Fade-in animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default Loginpage;
