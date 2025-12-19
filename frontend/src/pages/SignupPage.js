// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function SignupPage() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//     role: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const submitForm = (e) => {
//     e.preventDefault();

//     if (form.password !== form.confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     if (!form.role) {
//       alert("Please select a role");
//       return;
//     }

//     alert("Signup Successful!");
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-50 to-purple-50 p-5">
//       <div className="w-full max-w-md bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-gray-200 animate-slideIn">
//         <h3 className="text-center mb-6 text-3xl font-extrabold text-gray-800">
//           Create Your Account
//         </h3>

//         <form onSubmit={submitForm} className="space-y-5">
//           {/* Email */}
//           <div className="flex flex-col">
//             <label htmlFor="email" className="mb-1 font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               onChange={handleChange}
//               required
//               className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 outline-none transition"
//             />
//           </div>

//           {/* Password */}
//           <div className="flex flex-col">
//             <label htmlFor="password" className="mb-1 font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               onChange={handleChange}
//               required
//               className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 outline-none transition"
//             />
//           </div>

//           {/* Confirm Password */}
//           <div className="flex flex-col">
//             <label htmlFor="confirmPassword" className="mb-1 font-medium text-gray-700">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               placeholder="Confirm your password"
//               onChange={handleChange}
//               required
//               className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 outline-none transition"
//             />
//           </div>

//           {/* Role Selection */}
//           <p className="font-semibold text-gray-700">Choose Role</p>
//           <div className="flex gap-3 mb-4">
//             {["provider", "customer"].map((r) => (
//               <button
//                 key={r}
//                 type="button"
//                 onClick={() => setForm({ ...form, role: r })}
//                 className={`flex-1 h-12 rounded-xl font-medium border transition ${
//                   form.role === r
//                     ? "bg-gradient-to-r from-indigo-400 to-purple-400 text-white shadow-md border-transparent"
//                     : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-white hover:border-gray-400"
//                 }`}
//               >
//                 {r === "provider" ? "Service Provider" : "Customer"}
//               </button>
//             ))}
//           </div>

//           <button
//             type="submit"
//             className="w-full h-12 bg-indigo-500 text-white font-bold rounded-xl hover:bg-indigo-600 shadow-md transition transform hover:-translate-y-1"
//           >
//             Sign Up
//           </button>

//           <p className="text-center text-gray-600 mt-3">
//             Already have an account?{" "}
//             <span
//               onClick={() => navigate("/login")}
//               className="text-indigo-600 font-semibold cursor-pointer hover:underline"
//             >
//               Login
//             </span>
//           </p>
//         </form>
//       </div>

//       <style>{`
//         @keyframes slideIn {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-slideIn {
//           animation: slideIn 0.8s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default SignupPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupApi } from "../api/auth.api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignupPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!form.username.trim()) {
      toast.error("Name is required");
      return;
    }

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!form.role) {
      toast.error("Please select a role");
      return;
    }

    try {
      setLoading(true);

      await signupApi({
        username: form.username,
        email: form.email,
        password: form.password,
        role: form.role.toUpperCase(), // CUSTOMER / PROVIDER
      });

      toast.success("Signup Successful! Please login");

      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Signup failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-50 to-purple-50 p-5">
      <ToastContainer />

      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-lg border">
        <h3 className="text-center mb-6 text-3xl font-extrabold">
          Create Account
        </h3>

        <form onSubmit={submitForm} className="space-y-4">
          {/* Name */}
          <input
            type="text"
            name="username"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="w-full h-12 px-4 rounded-xl border"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full h-12 px-4 rounded-xl border"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full h-12 px-4 rounded-xl border"
          />

          {/* Confirm Password */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
            className="w-full h-12 px-4 rounded-xl border"
          />

          {/* Role */}
          <div className="flex gap-3">
            {["customer", "provider"].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setForm({ ...form, role: r })}
                className={`flex-1 h-12 rounded-xl border font-medium ${
                  form.role === r
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100"
                }`}
              >
                {r === "provider" ? "Service Provider" : "Customer"}
              </button>
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-indigo-600 text-white rounded-xl"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>

          <p className="text-center">
            Already have account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-indigo-600 cursor-pointer"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
