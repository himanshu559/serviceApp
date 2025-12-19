// import React from "react";
// import "./CustomerDashboard.css";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function CustomerPage() {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         // token remove (optional)
//         localStorage.removeItem("token");

//         // show toast
//         toast.success("Logout Successful!", {
//             autoClose: 1200,
//         });

//         // redirect after toast delay
//         setTimeout(() => {
//             navigate("/");
//         }, 1200);
//     };

//     return (
//         <div className="layout">

//             {/* Toast Container */}
//             <ToastContainer />

//             {/* LEFT SIDEBAR */}
//             <div className="sidebar">
//                 <div className="logo-container">
//                     <h1 className="logo-main">QUICKSERVE</h1>
//                     <p className="logo-tagline">Trusted Local Services</p>
//                 </div>

//                 <div className="menu">
//                     <p className="menu-item active">Dashboard</p>
//                     <p className="menu-item">Bookings</p>
//                     <p className="menu-item">Profile</p>
//                 </div>

//                 {/* LOGOUT Button */}
//                 <button className="logout-btn" onClick={handleLogout}>
//                     Logout
//                 </button>
//             </div>

//             {/* MAIN CONTENT */}
//             <div className="content">
//                 <h2 className="title">Customer Dashboard</h2>

//                 <input
//                     type="text"
//                     className="search"
//                     placeholder="Search for services…"
//                 />

//                 <h3 className="section-title">Categories</h3>
//                 <div className="categories">
//                     <div className="category-card">Cleaning</div>
//                     <div className="category-card">Electrician</div>
//                     <div className="category-card">Plumber</div>
//                     <div className="category-card">Painter</div>
//                 </div>

//                 <h3 className="section-title">Available Providers</h3>
//                 <div className="providers">
//                     <div className="provider-card">
//                         <h4>Rahul (Electrician)</h4>
//                         <p>⭐ 4.5 | 3 yrs experience</p>
//                         <button className="book-btn">Book Now</button>
//                     </div>

//                     <div className="provider-card">
//                         <h4>Sunita (Cleaner)</h4>
//                         <p>⭐ 4.8 | 5 yrs experience</p>
//                         <button className="book-btn">Book Now</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CustomerPage;


import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CustomerPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    toast.success("Logout Successful!", { autoClose: 1200 });

    setTimeout(() => {
      navigate("/");
    }, 1200);
  };

  return (
    <div className="flex h-screen font-sans">
      {/* Toast */}
      <ToastContainer />

      {/* SIDEBAR */}
      <aside className="w-64 bg-[#2b2b52] text-white p-6 flex flex-col justify-between">
        <div>
          <div className="text-center mb-6">
            {/* logo gradient text */}
            <h1 className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-white to-[#dcdcdc] bg-clip-text text-transparent">
              QUICKSERVE
            </h1>
            <p className="text-xs mt-[-4px] text-[#cfcfcf]">Trusted Local Services</p>
          </div>

          <nav className="mt-4">
            <p className="px-3 py-2 rounded-md bg-[#474787] cursor-pointer text-lg">Dashboard</p>
            <p className="px-3 py-2 rounded-md hover:bg-[#474787] mt-2 cursor-pointer text-lg">Bookings</p>
            <p className="px-3 py-2 rounded-md hover:bg-[#474787] mt-2 cursor-pointer text-lg">Profile</p>
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="bg-[#ff4d4d] text-white py-2 rounded-md text-lg hover:opacity-95"
        >
          Logout
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 bg-[#f5f6fa] p-8 overflow-y-auto">
        <h2 className="text-2xl mb-5 font-semibold">Customer Dashboard</h2>

        {/* SEARCH */}
        <div className="mb-6">
          <input
            type="text"
            className="w-72 h-12 px-4 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#fca311]/40 focus:border-[#fca311] transition"
            placeholder="Search for services…"
          />
        </div>

        {/* CATEGORIES */}
        <h3 className="text-lg font-semibold mb-3">Categories</h3>
        <div className="flex gap-4 mb-6">
          <div className="w-36 bg-white p-4 rounded-lg shadow-md text-center font-semibold cursor-pointer hover:bg-[#ececec]">
            Cleaning
          </div>
          <div className="w-36 bg-white p-4 rounded-lg shadow-md text-center font-semibold cursor-pointer hover:bg-[#ececec]">
            Electrician
          </div>
          <div className="w-36 bg-white p-4 rounded-lg shadow-md text-center font-semibold cursor-pointer hover:bg-[#ececec]">
            Plumber
          </div>
          <div className="w-36 bg-white p-4 rounded-lg shadow-md text-center font-semibold cursor-pointer hover:bg-[#ececec]">
            Painter
          </div>
        </div>

        {/* PROVIDERS */}
        <h3 className="text-lg font-semibold mb-3">Available Providers</h3>
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">Rahul (Electrician)</h4>
            <p className="text-sm text-gray-600 mt-1">⭐ 4.5 | 3 yrs experience</p>
            <button className="mt-3 bg-[#007bff] text-white px-4 py-2 rounded-md hover:opacity-95">Book Now</button>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">Sunita (Cleaner)</h4>
            <p className="text-sm text-gray-600 mt-1">⭐ 4.8 | 5 yrs experience</p>
            <button className="mt-3 bg-[#007bff] text-white px-4 py-2 rounded-md hover:opacity-95">Book Now</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CustomerPage;
