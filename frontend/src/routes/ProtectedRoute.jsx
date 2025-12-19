// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function ProtectedRoute({ children, role }) {
//   const { user } = useAuth();

//   // user hi nahi hai
//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   // role match nahi
//   if (role && user.role !== role) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// }

// // import { Navigate } from "react-router-dom";
// // import { useAuth } from "../context/AuthContext";

// // export default function ProtectedRoute({ children, role }) {
// //   const { user } = useAuth();

// //   // ❌ not logged in
// //   if (!user) {
// //     return <Navigate to="/login" replace />;
// //   }

// //   // ❌ role mismatch
// //   if (role && user.role !== role) {
// //     return <Navigate to="/login" replace />;
// //   }

// //   // ✅ allowed
// //   return children;
// // }

export default function ProtectedRoute({ children }) {
  return children;
}
