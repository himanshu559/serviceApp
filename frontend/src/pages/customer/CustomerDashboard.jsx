// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// import DashboardLayout from "../../components/DashboardLayout";
// import { Button } from "../../components/ui/button";
// import { Input } from "../../components/ui/input";
// import { Card, CardContent } from "../../components/ui/card";
// import { Badge } from "../../components/ui/badge";
// import { Icons, getCategoryIcon } from "../../components/icons";
// import { serviceCategories, providers } from "../../lib/data";
// import { cn } from "../../lib/utils";

// const customerNavItems = [
//   { label: "Home", href: "/customer", icon: "Home" },
//   { label: "Search", href: "/customer/search", icon: "Search" },
//   { label: "Bookings", href: "/customer/bookings", icon: "Calendar" },
//   { label: "Reviews", href: "/customer/reviews", icon: "Star" },
//   { label: "Settings", href: "/customer/settings", icon: "Settings" },
// ];

// function StarRating({ rating }) {
//   return (
//     <div className="flex gap-0.5">
//       {[1, 2, 3, 4, 5].map((star) => (
//         <Icons.Star
//           key={star}
//           className={cn(
//             "w-3 h-3",
//             star <= rating
//               ? "text-yellow-400 fill-yellow-400"
//               : "text-muted-foreground"
//           )}
//         />
//       ))}
//     </div>
//   );
// }

// export default function CustomerDashboard() {
//   const navigate = useNavigate();
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState(null);
//   const [view, setView] = useState("grid");

//   const filteredProviders = providers.filter((p) => {
//     const matchSearch =
//       p.name.toLowerCase().includes(search.toLowerCase()) ||
//       p.category.toLowerCase().includes(search.toLowerCase());
//     const matchCategory = !category || p.category === category;
//     return matchSearch && matchCategory;
//   });

//   return (
//     <DashboardLayout
//       title="Customer Panel"
//       navItems={customerNavItems}
//       currentPath="/customer"
//     >
//       <motion.div
//         className="p-6 lg:p-8 space-y-10"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//       >
//         {/* ================= HERO ================= */}
//         <div>
//           <h1 className="text-3xl font-bold tracking-tight">
//             Find Local Services
//           </h1>
//           <p className="text-muted-foreground mt-1">
//             Connect with trusted professionals near you
//           </p>

//           {/* SEARCH BAR */}
//           <div className="flex flex-col sm:flex-row gap-4 mt-6 max-w-2xl">
//             {/* Service Search */}
//             <div className="relative flex-1">
//               <Icons.Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
//               <Input
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="pl-14 h-11 rounded-lg leading-normal"
//               />
//             </div>

//             {/* Location */}
//             <div className="relative flex-1">
//               <Icons.MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
//               <Input
//                 className="pl-14 h-11 rounded-lg leading-normal"
//               />
//             </div>

//             {/* Button */}
//             <Button className="h-11 px-6 rounded-lg flex items-center gap-2">
//               <Icons.Search className="w-4 h-4" />
//               Search
//             </Button>
//           </div>
//         </div>

//         {/* ================= CATEGORIES ================= */}
//         <div>
//           <h2 className="text-lg font-semibold mb-3">Browse by Category</h2>
//           <div className="flex flex-wrap gap-3">
//             <motion.button
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setCategory(null)}
//               className={cn(
//                 "px-4 py-2 rounded-full text-sm transition",
//                 !category
//                   ? "bg-primary text-primary-foreground"
//                   : "bg-muted hover:bg-muted/80"
//               )}
//             >
//               All Services
//             </motion.button>

//             {serviceCategories.map((c) => {
//               const Icon = getCategoryIcon(c.icon);
//               return (
//                 <motion.button
//                   key={c.id}
//                   whileHover={{ y: -2 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setCategory(c.id)}
//                   className={cn(
//                     "px-4 py-2 rounded-full text-sm flex items-center gap-2 transition",
//                     category === c.id
//                       ? "bg-primary text-primary-foreground"
//                       : "bg-muted hover:bg-muted/80"
//                   )}
//                 >
//                   <Icon className="w-4 h-4" />
//                   {c.name}
//                 </motion.button>
//               );
//             })}
//           </div>
//         </div>

//         {/* ================= VIEW TOGGLE ================= */}
//         <div className="flex justify-between items-center">
//           <p className="text-muted-foreground">
//             {filteredProviders.length} providers found
//           </p>

//           <div className="flex gap-2">
//             <Button
//               size="icon"
//               variant={view === "grid" ? "default" : "outline"}
//               onClick={() => setView("grid")}
//             >
//               ⬛
//             </Button>
//             <Button
//               size="icon"
//               variant={view === "list" ? "default" : "outline"}
//               onClick={() => setView("list")}
//             >
//               ☰
//             </Button>
//           </div>
//         </div>

//         {/* ================= PROVIDERS ================= */}
//         <div
//           className={cn(
//             view === "grid"
//               ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
//               : "space-y-4"
//           )}
//         >
//           {filteredProviders.map((p) => (
//             <motion.div
//               key={p.id}
//               whileHover={{ y: -6 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <Card className="overflow-hidden">
//                 <div className="aspect-video bg-muted overflow-hidden">
//                   <motion.img
//                     src={p.image || "/plumbing.jpg"}
//                     alt={p.name}
//                     className="w-full h-full object-cover"
//                     whileHover={{ scale: 1.08 }}
//                     transition={{ duration: 0.4 }}
//                   />
//                 </div>

//                 <CardContent className="p-4 space-y-3">
//                   <div className="flex justify-between items-start">
//                     <h3 className="font-semibold text-lg">{p.name}</h3>
//                     <Badge variant="secondary">{p.category}</Badge>
//                   </div>

//                   <div className="flex items-center gap-2 text-sm">
//                     <StarRating rating={Math.floor(p.rating)} />
//                     <span className="font-medium">{p.rating}</span>
//                     <span className="text-muted-foreground">
//                       ({p.reviews})
//                     </span>
//                   </div>

//                   <p className="text-sm text-muted-foreground line-clamp-2">
//                     {p.bio}
//                   </p>

//                   <div className="flex justify-between items-center text-sm">
//                     <span className="text-muted-foreground">
//                       <Icons.MapPin className="w-4 h-4 inline mr-1" />
//                       {p.distance}
//                     </span>
//                     <span className="font-medium">{p.price}</span>
//                   </div>

//                   <Button
//                     className="w-full"
//                     onClick={() => navigate(`/customer/book/${p.id}`)}
//                   >
//                     Book Appointment
//                   </Button>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </DashboardLayout>
//   );
// }

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// import DashboardLayout from "../../components/DashboardLayout";
// import { Button } from "../../components/ui/button";
// import { Input } from "../../components/ui/input";
// import { Card, CardContent } from "../../components/ui/card";
// import { Badge } from "../../components/ui/badge";
// import { Icons } from "../../components/icons";
// import { cn } from "../../lib/utils";

// /* 🔗 BACKEND API */
// import {
//   getAllListings,
//   searchListings,
//   filterByCategory,
// } from "../../api/listings.api";

// const customerNavItems = [
//   { label: "Home", href: "/customer", icon: "Home" },
//   { label: "Bookings", href: "/customer/bookings", icon: "Calendar" },
//   { label: "Reviews", href: "/customer/reviews", icon: "Star" },
//   { label: "Settings", href: "/customer/settings", icon: "Settings" },
// ];

// export default function CustomerDashboard() {
//   const navigate = useNavigate();

//   const [listings, setListings] = useState([]);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("");
//   const [view, setView] = useState("grid");
//   const [loading, setLoading] = useState(false);

//   /* ================= LOAD ALL LISTINGS ================= */
//   useEffect(() => {
//     loadAll();
//   }, []);

//   const loadAll = async () => {
//     try {
//       setLoading(true);
//       const res = await getAllListings();
//       setListings(res.data);
//     } catch (e) {
//       console.log("Backend not responding");
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= SEARCH ================= */
//   const handleSearch = async () => {
//     if (!search) {
//       loadAll();
//       return;
//     }
//     const res = await searchListings(search);
//     setListings(res.data);
//   };

//   /* ================= CATEGORY FILTER ================= */
//   const handleCategory = async (cat) => {
//     setCategory(cat);
//     if (!cat) {
//       loadAll();
//       return;
//     }
//     const res = await filterByCategory(cat);
//     setListings(res.data);
//   };

//   return (
//     <DashboardLayout
//       title="Customer Panel"
//       navItems={customerNavItems}
//       currentPath="/customer"
//     >
//       <motion.div
//         className="p-6 lg:p-8 space-y-8"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         {/* ================= HEADER ================= */}
//         <div>
//           <h1 className="text-3xl font-bold">Find Local Services</h1>
//           <p className="text-muted-foreground">
//             Browse services provided by professionals
//           </p>

//           <div className="flex gap-3 mt-4 max-w-xl">
//             <Input
//               placeholder="Search service"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//             <Button onClick={handleSearch}>
//               <Icons.Search className="w-4 h-4 mr-1" />
//               Search
//             </Button>
//           </div>
//         </div>

//         {/* ================= CATEGORIES ================= */}
//         <div className="flex gap-3 flex-wrap">
//           <Button
//             variant={!category ? "default" : "outline"}
//             onClick={() => handleCategory("")}
//           >
//             All
//           </Button>
//           {["Plumbing", "Electrician", "Cleaning", "Carpenter"].map((c) => (
//             <Button
//               key={c}
//               variant={category === c ? "default" : "outline"}
//               onClick={() => handleCategory(c)}
//             >
//               {c}
//             </Button>
//           ))}
//         </div>

//         {/* ================= VIEW TOGGLE ================= */}
//         <div className="flex justify-between items-center">
//           <p className="text-muted-foreground">
//             {listings.length} services found
//           </p>

//           <div className="flex gap-2">
//             <Button
//               size="icon"
//               variant={view === "grid" ? "default" : "outline"}
//               onClick={() => setView("grid")}
//             >
//               ⬛
//             </Button>
//             <Button
//               size="icon"
//               variant={view === "list" ? "default" : "outline"}
//               onClick={() => setView("list")}
//             >
//               ☰
//             </Button>
//           </div>
//         </div>

//         {/* ================= LISTINGS ================= */}
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <div
//             className={cn(
//               view === "grid"
//                 ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
//                 : "space-y-4"
//             )}
//           >
//             {listings.map((l) => (
//               <motion.div key={l.id} whileHover={{ scale: 1.03 }}>
//                 <Card>
//                   <CardContent className="p-4 space-y-3">
//                     <h3 className="text-lg font-semibold">{l.title}</h3>

//                     <div className="flex gap-2">
//                       <Badge>{l.category}</Badge>
//                       <Badge variant="secondary">{l.location}</Badge>
//                     </div>

//                     <p className="text-sm text-muted-foreground">
//                       {l.description}
//                     </p>

//                     <div className="flex justify-between items-center">
//                       <span className="font-medium">₹{l.price}</span>
//                       <Button
//                         size="sm"
//                         onClick={() =>
//                           navigate(`/customer/book/${l.id}`)
//                         }
//                       >
//                         Book
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </motion.div>
//     </DashboardLayout>
//   );
// }

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import DashboardLayout from "../../components/DashboardLayout";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Icons } from "../../components/icons";
import { cn } from "../../lib/utils";

/* 🔗 BACKEND API */
import {
  getAllListings,
  searchListings,
  filterByCategory,
} from "../../api/listings.api";

const customerNavItems = [
  { label: "Home", href: "/customer", icon: "Home" },
  { label: "Bookings", href: "/customer/bookings", icon: "Calendar" },
  { label: "Reviews", href: "/customer/reviews", icon: "Star" },
  { label: "Settings", href: "/customer/settings", icon: "Settings" },
];

export default function CustomerDashboard() {
  const navigate = useNavigate();

  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [view, setView] = useState("grid");
  const [loading, setLoading] = useState(false);

  /* ================= LOAD ALL LISTINGS ================= */
  useEffect(() => {
    loadAll();
  }, []);

  const loadAll = async () => {
    try {
      setLoading(true);
      const res = await getAllListings();
      setListings(res.data);
    } catch (err) {
      console.log("❌ Backend not responding");
    } finally {
      setLoading(false);
    }
  };

  /* ================= SEARCH ================= */
  const handleSearch = async () => {
    const keyword = search.trim();

    if (!keyword) {
      loadAll();
      return;
    }

    try {
      setLoading(true);
      const res = await searchListings(keyword);
      setListings(res.data);
    } catch (err) {
      console.log("❌ Search failed");
    } finally {
      setLoading(false);
    }
  };

  /* ================= CATEGORY FILTER ================= */
  const handleCategory = async (cat) => {
    setCategory(cat);

    if (!cat) {
      loadAll();
      return;
    }

    try {
      setLoading(true);
      const res = await filterByCategory(cat.toLowerCase());
      setListings(res.data);
    } catch (err) {
      console.log("❌ Category filter failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout
      title="Customer Panel"
      navItems={customerNavItems}
      currentPath="/customer"
    >
      <motion.div
        className="p-6 lg:p-8 space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* ================= HEADER ================= */}
        <div>
          <h1 className="text-3xl font-bold">Find Local Services</h1>
          <p className="text-muted-foreground">
            Browse services provided by professionals
          </p>

          <div className="flex gap-3 mt-4 max-w-xl">
            <Input
              placeholder="Search service (e.g. plumbing)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />

            <Button onClick={handleSearch}>
              <Icons.Search className="w-4 h-4 mr-1" />
              Search
            </Button>
          </div>
        </div>

        {/* ================= CATEGORIES ================= */}
        <div className="flex gap-3 flex-wrap">
          <Button
            variant={!category ? "default" : "outline"}
            onClick={() => handleCategory("")}
          >
            All
          </Button>

          {["Plumbing", "Electrician", "Cleaning", "Carpenter"].map((c) => (
            <Button
              key={c}
              variant={category === c ? "default" : "outline"}
              onClick={() => handleCategory(c)}
            >
              {c}
            </Button>
          ))}
        </div>

        {/* ================= VIEW TOGGLE ================= */}
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground">
            {listings.length} services found
          </p>

          <div className="flex gap-2">
            <Button
              size="icon"
              variant={view === "grid" ? "default" : "outline"}
              onClick={() => setView("grid")}
            >
              ⬛
            </Button>
            <Button
              size="icon"
              variant={view === "list" ? "default" : "outline"}
              onClick={() => setView("list")}
            >
              ☰
            </Button>
          </div>
        </div>

        {/* ================= LISTINGS ================= */}
        {loading ? (
          <p className="text-center">Loading services...</p>
        ) : (
          <div
            className={cn(
              view === "grid"
                ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-4"
            )}
          >
            {listings.map((l) => (
              <motion.div key={l.id} whileHover={{ scale: 1.03 }}>
                <Card>
                  <CardContent className="p-4 space-y-3">
                    <h3 className="text-lg font-semibold">{l.title}</h3>

                    <div className="flex gap-2">
                      <Badge>{l.category}</Badge>
                      <Badge variant="secondary">{l.location}</Badge>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {l.description}
                    </p>

                    <div className="flex justify-between items-center">
                      <span className="font-medium">₹{l.price}</span>
                      <Button
                        size="sm"
                        onClick={() =>
                          navigate(`/customer/book/${l.id}`)
                        }
                      >
                        Book
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </DashboardLayout>
  );
}
