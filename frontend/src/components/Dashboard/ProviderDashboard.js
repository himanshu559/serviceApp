// // import React from "react";
// // import "./ProviderDashboard.css";

// // function ServiceProviderPage() {
// //   return (
// //     <div>

// //       {/* TOP NAVBAR */}
// //       <nav className="navbar">
// //         <div className="nav-left">
// //           <h2 className="logo-main">QUICKSERVE</h2>
// //         </div>

// //         <div className="nav-center">
// //           <p className="nav-item active">Dashboard</p>
// //           <p className="nav-item">Jobs</p>
// //           <p className="nav-item">Earnings</p>
// //           <p className="nav-item">Profile</p>
// //         </div>

// //         <div className="nav-right">
// //           <button className="logout-btn">Logout</button>
// //         </div>
// //       </nav>

// //       {/* MAIN CONTENT */}
// //       <div className="content">

// //         <h2 className="page-title">Service Provider Dashboard</h2>

// //         {/* NEW REQUESTS */}
// //         <h3 className="section-title">New Requests</h3>

// //         <div className="request-card">
// //           <div className="request-details">
// //             <p><b>Customer:</b> Priya</p>
// //             <p><b>Service:</b> Cleaning</p>
// //             <p><b>Time:</b> 4:00 PM</p>
// //           </div>

// //           <div className="actions">
// //             <button className="accept-btn">Accept</button>
// //             <button className="reject-btn">Reject</button>
// //           </div>
// //         </div>

// //         {/* EARNINGS */}
// //         <h3 className="section-title">Earnings</h3>

// //         <div className="earnings-card">
// //           <p><b>Today:</b> ₹500</p>
// //           <p><b>This Month:</b> ₹8200</p>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// // export default ServiceProviderPage;

// import React from "react";
// import "./ProviderDashboard.css";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function ServiceProviderPage() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Remove token (optional)
//     localStorage.removeItem("token");

//     // Show logout toast
//     toast.success("Logout Successful!", {
//       autoClose: 1200,
//     });

//     // Redirect after toast
//     setTimeout(() => {
//       navigate("/");
//     }, 1200);
//   };

//   return (
//     <div>
//       {/* Toast Container */}
//       <ToastContainer />

//       {/* TOP NAVBAR */}
//       <nav className="navbar">
//         <div className="nav-left">
//           <h2 className="logo-main">QUICKSERVE</h2>
//         </div>

//         <div className="nav-center">
//           <p className="nav-item active">Dashboard</p>
//           <p className="nav-item">Jobs</p>
//           <p className="nav-item">Earnings</p>
//           <p className="nav-item">Profile</p>
//         </div>

//         <div className="nav-right">
//           <button className="logout-btn" onClick={handleLogout}>
//             Logout
//           </button>
//         </div>
//       </nav>

//       {/* MAIN CONTENT */}
//       <div className="content">
//         <h2 className="page-title">Service Provider Dashboard</h2>

//         {/* NEW REQUESTS */}
//         <h3 className="section-title">New Requests</h3>

//         <div className="request-card">
//           <div className="request-details">
//             <p><b>Customer:</b> Priya</p>
//             <p><b>Service:</b> Cleaning</p>
//             <p><b>Time:</b> 4:00 PM</p>
//           </div>

//           <div className="actions">
//             <button className="accept-btn">Accept</button>
//             <button className="reject-btn">Reject</button>
//           </div>
//         </div>

//         {/* EARNINGS */}
//         <h3 className="section-title">Earnings</h3>

//         <div className="earnings-card">
//           <p><b>Today:</b> ₹500</p>
//           <p><b>This Month:</b> ₹8200</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ServiceProviderPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ServiceProviderPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // optional cleanup
    localStorage.removeItem("token");

    // toast
    toast.success("Logout Successful!", { autoClose: 1200 });

    // redirect after toast
    setTimeout(() => navigate("/"), 1200);
  };

  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      {/* Toast */}
      <ToastContainer />

      {/* NAVBAR */}
      <header className="flex items-center justify-between bg-[#142850] text-white px-6 py-4">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-extrabold tracking-wide">QUICKSERVE</h2>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <p className="text-base font-medium opacity-100">Dashboard</p>
          <p className="text-base font-medium opacity-80 hover:opacity-100 cursor-pointer">Jobs</p>
          <p className="text-base font-medium opacity-80 hover:opacity-100 cursor-pointer">Earnings</p>
          <p className="text-base font-medium opacity-80 hover:opacity-100 cursor-pointer">Profile</p>
        </nav>

        <div className="flex items-center">
          <button
            onClick={handleLogout}
            className="bg-[#ff4d4d] text-white px-4 py-2 rounded-md hover:opacity-95"
          >
            Logout
          </button>
        </div>
      </header>

      {/* MAIN */}
      <main className="px-6 md:px-10 lg:px-16 py-8">
        <h1 className="text-2xl md:text-3xl font-semibold mb-6">Service Provider Dashboard</h1>

        {/* NEW REQUESTS */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">New Requests</h2>

          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="request-details mb-4 md:mb-0">
              <p className="text-sm"><span className="font-semibold">Customer:</span> Priya</p>
              <p className="text-sm"><span className="font-semibold">Service:</span> Cleaning</p>
              <p className="text-sm"><span className="font-semibold">Time:</span> 4:00 PM</p>
            </div>

            <div className="actions flex gap-3">
              <button className="bg-[#28a745] text-white px-4 py-2 rounded-md hover:opacity-95">Accept</button>
              <button className="bg-[#dc3545] text-white px-4 py-2 rounded-md hover:opacity-95">Reject</button>
            </div>
          </div>
        </section>

        {/* EARNINGS */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Earnings</h2>

          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
            <p className="text-sm"><span className="font-semibold">Today:</span> ₹500</p>
            <p className="text-sm mt-2"><span className="font-semibold">This Month:</span> ₹8200</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ServiceProviderPage;
