// // // // import { useState } from "react";
// // // // import DashboardLayout from "../../components/DashboardLayout";
// // // // import { Card, CardContent } from "../../components/ui/card";
// // // // import { Button } from "../../components/ui/button";
// // // // import { providerNavItems } from "./providerNavItems";

// // // // const initialListings = [
// // // //   { id: 1, name: "Pipe Repair", price: "₹500-1000", status: "active" },
// // // //   { id: 2, name: "Drain Cleaning", price: "₹700-1200", status: "inactive" },
// // // // ];

// // // // export default function Listings() {
// // // //   const [listings, setListings] = useState(initialListings);

// // // //   return (
// // // //     <DashboardLayout navItems={providerNavItems} currentPath="/provider/listings">
// // // //       <div className="p-6">
// // // //         <h1 className="text-3xl font-bold mb-6">Listings</h1>

// // // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // //           {listings.map((l) => (
// // // //             <Card key={l.id}>
// // // //               <CardContent className="p-4">
// // // //                 <h3 className="font-semibold">{l.name}</h3>
// // // //                 <p className="text-sm text-muted-foreground">{l.price}</p>
// // // //                 <Button size="sm" className="mt-3">
// // // //                   {l.status === "active" ? "Deactivate" : "Activate"}
// // // //                 </Button>
// // // //               </CardContent>
// // // //             </Card>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </DashboardLayout>
// // // //   );
// // // // }

// // // import { useState } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // import DashboardLayout from "../../components/DashboardLayout";
// // // import { Button } from "../../components/ui/button";
// // // import { Card, CardContent } from "../../components/ui/card";
// // // import { Input } from "../../components/ui/input";
// // // import { Label } from "../../components/ui/label";
// // // import { Textarea } from "../../components/ui/textarea";
// // // import { Badge } from "../../components/ui/badge";
// // // import {
// // //   Dialog,
// // //   DialogContent,
// // //   DialogHeader,
// // //   DialogTitle,
// // //   DialogDescription,
// // //   DialogFooter,
// // //   DialogTrigger,
// // // } from "../../components/ui/dialog";
// // // import { Icons } from "../../components/icons";
// // // import { providerNavItems } from "./providerNavItems";

// // // const initialListings = [
// // //   {
// // //     id: "1",
// // //     name: "Pipe Repair",
// // //     description: "Fix leaky pipes and replace damaged sections.",
// // //     price: "₹500-1050",
// // //     timeSlots: ["9:00 AM", "11:00 AM", "2:00 PM"],
// // //     image: "/pip_Repair.jpg",
// // //     status: "active",
// // //   },
// // //   {
// // //     id: "2",
// // //     name: "Drain Cleaning",
// // //     description: "Professional drain cleaning service.",
// // //     price: "₹700-1000",
// // //     timeSlots: ["10:00 AM", "1:00 PM"],
// // //     image: "/drain_cleaning.jpg",
// // //     status: "inactive",
// // //   },
// // //   {
// // //     id: "3",
// // //     name: "Water Heater Installation",
// // //     description: "Complete water heater installation and setup.",
// // //     price: "₹900-1200",
// // //     timeSlots: ["9:00 AM", "2:00 PM"],
// // //     image: "/Water_Heater_Installation.png",
// // //     status: "inactive",
// // //   },
// // // ];

// // // export default function Listings() {
// // //   const [listings, setListings] = useState(initialListings);
// // //   const [open, setOpen] = useState(false);
// // //   const [editing, setEditing] = useState(null);

// // //   const [form, setForm] = useState({
// // //     name: "",
// // //     description: "",
// // //     price: "",
// // //     timeSlots: "",
// // //   });

// // //   const openCreate = () => {
// // //     setEditing(null);
// // //     setForm({ name: "", description: "", price: "", timeSlots: "" });
// // //     setOpen(true);
// // //   };

// // //   const openEdit = (item) => {
// // //     setEditing(item);
// // //     setForm({
// // //       name: item.name,
// // //       description: item.description,
// // //       price: item.price,
// // //       timeSlots: item.timeSlots.join(", "),
// // //     });
// // //     setOpen(true);
// // //   };

// // //   const saveListing = () => {
// // //     if (editing) {
// // //       setListings(
// // //         listings.map((l) =>
// // //           l.id === editing.id
// // //             ? {
// // //                 ...l,
// // //                 ...form,
// // //                 timeSlots: form.timeSlots.split(",").map((t) => t.trim()),
// // //               }
// // //             : l
// // //         )
// // //       );
// // //     } else {
// // //       setListings([
// // //         ...listings,
// // //         {
// // //           id: Date.now().toString(),
// // //           ...form,
// // //           timeSlots: form.timeSlots.split(",").map((t) => t.trim()),
// // //           image: "/placeholder.svg",
// // //           status: "active",
// // //         },
// // //       ]);
// // //     }
// // //     setOpen(false);
// // //   };

// // //   const toggleStatus = (id) => {
// // //     setListings(
// // //       listings.map((l) =>
// // //         l.id === id
// // //           ? { ...l, status: l.status === "active" ? "inactive" : "active" }
// // //           : l
// // //       )
// // //     );
// // //   };

// // //   const removeListing = (id) => {
// // //     setListings(listings.filter((l) => l.id !== id));
// // //   };

// // //   return (
// // //     <DashboardLayout navItems={providerNavItems} currentPath="/provider/listings">
// // //       <motion.div
// // //         className="p-6 lg:p-8 space-y-8"
// // //         initial={{ opacity: 0, y: 20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ duration: 0.4 }}
// // //       >
// // //         {/* Header */}
// // //         <div className="flex items-center justify-between">
// // //           <div>
// // //             <h1 className="text-3xl font-bold">Service Listings</h1>
// // //             <p className="text-muted-foreground">
// // //               Manage your service offerings
// // //             </p>
// // //           </div>

// // //           <Dialog open={open} onOpenChange={setOpen}>
// // //             <DialogTrigger asChild>
// // //               <Button onClick={openCreate}>
// // //                 <Icons.Plus className="w-4 h-4 mr-2" />
// // //                 New Listing
// // //               </Button>
// // //             </DialogTrigger>

// // //             <DialogContent>
// // //               <DialogHeader>
// // //                 <DialogTitle>
// // //                   {editing ? "Edit Listing" : "Create Listing"}
// // //                 </DialogTitle>
// // //                 <DialogDescription>
// // //                   Add or update your service details
// // //                 </DialogDescription>
// // //               </DialogHeader>

// // //               <div className="space-y-4 py-4">
// // //                 <div>
// // //                   <Label>Service Name</Label>
// // //                   <Input
// // //                     value={form.name}
// // //                     onChange={(e) =>
// // //                       setForm({ ...form, name: e.target.value })
// // //                     }
// // //                   />
// // //                 </div>

// // //                 <div>
// // //                   <Label>Description</Label>
// // //                   <Textarea
// // //                     value={form.description}
// // //                     onChange={(e) =>
// // //                       setForm({ ...form, description: e.target.value })
// // //                     }
// // //                   />
// // //                 </div>

// // //                 <div>
// // //                   <Label>Price Range</Label>
// // //                   <Input
// // //                     value={form.price}
// // //                     onChange={(e) =>
// // //                       setForm({ ...form, price: e.target.value })
// // //                     }
// // //                   />
// // //                 </div>

// // //                 <div>
// // //                   <Label>Time Slots</Label>
// // //                   <Input
// // //                     value={form.timeSlots}
// // //                     onChange={(e) =>
// // //                       setForm({ ...form, timeSlots: e.target.value })
// // //                     }
// // //                     placeholder="9:00 AM, 11:00 AM"
// // //                   />
// // //                 </div>
// // //               </div>

// // //               <DialogFooter>
// // //                 <Button variant="outline" onClick={() => setOpen(false)}>
// // //                   Cancel
// // //                 </Button>
// // //                 <Button onClick={saveListing}>
// // //                   {editing ? "Save Changes" : "Create"}
// // //                 </Button>
// // //               </DialogFooter>
// // //             </DialogContent>
// // //           </Dialog>
// // //         </div>

// // //         {/* Listings Grid */}
// // //         <motion.div
// // //           className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
// // //           initial="hidden"
// // //           animate="visible"
// // //           variants={{
// // //             hidden: { opacity: 0 },
// // //             visible: {
// // //               opacity: 1,
// // //               transition: { staggerChildren: 0.12 },
// // //             },
// // //           }}
// // //         >
// // //           <AnimatePresence>
// // //             {listings.map((l) => (
// // //               <motion.div
// // //                 key={l.id}
// // //                 variants={{
// // //                   hidden: { opacity: 0, y: 20, scale: 0.95 },
// // //                   visible: { opacity: 1, y: 0, scale: 1 },
// // //                 }}
// // //                 whileHover={{ scale: 1.03 }}
// // //                 exit={{ opacity: 0, scale: 0.9 }}
// // //                 transition={{ type: "spring", stiffness: 120 }}
// // //               >
// // //                 <Card className="overflow-hidden hover:shadow-xl transition-shadow">
// // //                   <div className="relative aspect-video bg-muted">
// // //                     <img
// // //                       src={l.image}
// // //                       alt={l.name}
// // //                       className="w-full h-full object-cover"
// // //                     />
// // //                     <Badge className="absolute top-3 right-3">
// // //                       {l.status}
// // //                     </Badge>
// // //                   </div>

// // //                   <CardContent className="p-4 space-y-3">
// // //                     <h3 className="font-semibold text-lg">{l.name}</h3>

// // //                     <p className="text-sm text-muted-foreground line-clamp-2">
// // //                       {l.description}
// // //                     </p>

// // //                     <div className="flex items-center gap-2 text-sm">
// // //                       <Icons.DollarSign className="w-4 h-4" />
// // //                       {l.price}
// // //                     </div>

// // //                     <div className="flex items-center gap-2 text-sm">
// // //                       <Icons.Clock className="w-4 h-4" />
// // //                       {l.timeSlots.length} time slots
// // //                     </div>

// // //                     <div className="flex gap-2 pt-2">
// // //                       <Button
// // //                         size="sm"
// // //                         variant="outline"
// // //                         onClick={() => openEdit(l)}
// // //                       >
// // //                         <Icons.Edit className="w-4 h-4 mr-1" />
// // //                         Edit
// // //                       </Button>

// // //                       <Button
// // //                         size="sm"
// // //                         variant="outline"
// // //                         onClick={() => toggleStatus(l.id)}
// // //                       >
// // //                         {l.status === "active" ? "Deactivate" : "Activate"}
// // //                       </Button>

// // //                       <Button
// // //                         size="sm"
// // //                         variant="ghost"
// // //                         className="text-destructive"
// // //                         onClick={() => removeListing(l.id)}
// // //                       >
// // //                         <Icons.Trash2 className="w-4 h-4" />
// // //                       </Button>
// // //                     </div>
// // //                   </CardContent>
// // //                 </Card>
// // //               </motion.div>
// // //             ))}
// // //           </AnimatePresence>
// // //         </motion.div>
// // //       </motion.div>
// // //     </DashboardLayout>
// // //   );
// // // }

// // import { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { motion } from "framer-motion";

// // import DashboardLayout from "../../components/DashboardLayout";
// // import { Button } from "../../components/ui/button";
// // import { Input } from "../../components/ui/input";
// // import { Card, CardContent } from "../../components/ui/card";
// // import { Badge } from "../../components/ui/badge";
// // import { Icons } from "../../components/icons";
// // import { cn } from "../../lib/utils";

// // import {
// //   getAllListings,
// //   searchListings,
// //   filterByCategory,
// // } from "../../api/listings.api";

// // const customerNavItems = [
// //   { label: "Home", href: "/customer", icon: "Home" },
// //   { label: "Search", href: "/customer/search", icon: "Search" },
// //   { label: "Bookings", href: "/customer/bookings", icon: "Calendar" },
// //   { label: "Reviews", href: "/customer/reviews", icon: "Star" },
// //   { label: "Settings", href: "/customer/settings", icon: "Settings" },
// // ];

// // function StarRating({ rating }) {
// //   return (
// //     <div className="flex gap-0.5">
// //       {[1, 2, 3, 4, 5].map((star) => (
// //         <Icons.Star
// //           key={star}
// //           className={cn(
// //             "w-3 h-3",
// //             star <= rating
// //               ? "text-yellow-400 fill-yellow-400"
// //               : "text-muted-foreground"
// //           )}
// //         />
// //       ))}
// //     </div>
// //   );
// // }

// // export default function CustomerDashboard() {
// //   const navigate = useNavigate();
// //   const [search, setSearch] = useState("");
// //   const [providers, setProviders] = useState([]);
// //   const [view, setView] = useState("grid");

// //   // 🔹 LOAD ALL LISTINGS
// //   useEffect(() => {
// //     getAllListings()
// //       .then((res) => setProviders(res.data))
// //       .catch(() => console.log("Backend not running"));
// //   }, []);

// //   // 🔹 SEARCH
// //   const handleSearch = async () => {
// //     const res = await searchListings(search);
// //     setProviders(res.data);
// //   };

// //   return (
// //     <DashboardLayout
// //       title="Customer Panel"
// //       navItems={customerNavItems}
// //       currentPath="/customer"
// //     >
// //       <motion.div className="p-6 lg:p-8 space-y-10">
// //         {/* HERO */}
// //         <div>
// //           <h1 className="text-3xl font-bold">Find Local Services</h1>
// //           <p className="text-muted-foreground">
// //             Connect with trusted professionals near you
// //           </p>

// //           <div className="flex flex-col sm:flex-row gap-4 mt-6 max-w-2xl">
// //             <div className="relative flex-1">
// //               <Icons.Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
// //               <Input
// //                 value={search}
// //                 onChange={(e) => setSearch(e.target.value)}
// //                 className="pl-14 h-11"
// //                 placeholder="Service name"
// //               />
// //             </div>

// //             <Button onClick={handleSearch} className="h-11 px-6">
// //               Search
// //             </Button>
// //           </div>
// //         </div>

// //         {/* PROVIDERS */}
// //         <div
// //           className={cn(
// //             view === "grid"
// //               ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
// //               : "space-y-4"
// //           )}
// //         >
// //           {providers.map((p) => (
// //             <Card key={p.id}>
// //               <CardContent className="p-4 space-y-3">
// //                 <h3 className="font-semibold text-lg">{p.name}</h3>
// //                 <Badge>{p.category}</Badge>

// //                 <StarRating rating={Math.floor(p.rating || 4)} />

// //                 <p className="text-sm text-muted-foreground">
// //                   {p.description}
// //                 </p>

// //                 <div className="flex justify-between text-sm">
// //                   <span>
// //                     <Icons.MapPin className="inline w-4 h-4 mr-1" />
// //                     {p.location}
// //                   </span>
// //                   <span className="font-medium">₹{p.price}</span>
// //                 </div>

// //                 <Button
// //                   className="w-full"
// //                   onClick={() => navigate(`/customer/book/${p.id}`)}
// //                 >
// //                   Book Appointment
// //                 </Button>
// //               </CardContent>
// //             </Card>
// //           ))}
// //         </div>
// //       </motion.div>
// //     </DashboardLayout>
// //   );
// // }
// import {} from "../../api/listings.api"
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import DashboardLayout from "../../components/DashboardLayout";
// import { Button } from "../../components/ui/button";
// import { Card, CardContent } from "../../components/ui/card";
// import { Input } from "../../components/ui/input";
// import { Label } from "../../components/ui/label";
// import { Textarea } from "../../components/ui/textarea";
// import { Badge } from "../../components/ui/badge";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogFooter,
//   DialogTrigger,
// } from "../../components/ui/dialog";
// import { Icons } from "../../components/icons";
// import { providerNavItems } from "./providerNavItems";

// import {
//   getProviderListings,
//   createListing,
//   updateListing,
//   deleteListing,
//   toggleAvailability,
// } from "../../api/listings.api";

// export default function Listings() {
//   const providerId = localStorage.getItem("userId");

//   const [listings, setListings] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [editing, setEditing] = useState(null);

//   const [form, setForm] = useState({
//     name: "",
//     description: "",
//     price: "",
//     timeSlots: "",
//   });

//   /* ================= LOAD LISTINGS ================= */
//   useEffect(() => {
//     loadListings();
//   }, []);

//   const loadListings = async () => {
//     try {
//       const res = await getProviderListings(providerId);
//       setListings(res.data);
//     } catch (err) {
//       console.log("Listings load nahi hui");
//     }
//   };

//   /* ================= DIALOG HANDLERS ================= */
//   const openCreate = () => {
//     setEditing(null);
//     setForm({ name: "", description: "", price: "", timeSlots: "" });
//     setOpen(true);
//   };

//   const openEdit = (item) => {
//     setEditing(item);
//     setForm({
//       name: item.name,
//       description: item.description,
//       price: item.price,
//       timeSlots: item.timeSlots?.join(", "),
//     });
//     setOpen(true);
//   };

//   /* ================= SAVE LISTING ================= */
//   const saveListing = async () => {
//     try {
//       const payload = {
//         name: form.name,
//         description: form.description,
//         price: form.price,
//         timeSlots: form.timeSlots.split(",").map((t) => t.trim()),
//       };

//       if (editing) {
//         await updateListing(editing.id, payload);
//       } else {
//         await createListing(providerId, payload);
//       }

//       await loadListings();
//       setOpen(false);
//     } catch (err) {
//       alert("Listing save nahi hui");
//     }
//   };

//   /* ================= TOGGLE STATUS ================= */
//   const toggleStatus = async (listing) => {
//     try {
//       await toggleAvailability(listing.id, listing.status !== "active");
//       loadListings();
//     } catch {
//       alert("Status update fail");
//     }
//   };

//   /* ================= DELETE ================= */
//   const removeListing = async (id) => {
//     if (!window.confirm("Delete karna hai?")) return;

//     try {
//       await deleteListing(id);
//       setListings(listings.filter((l) => l.id !== id));
//     } catch {
//       alert("Delete fail");
//     }
//   };

//   return (
//     <DashboardLayout navItems={providerNavItems} currentPath="/provider/listings">
//       <motion.div
//         className="p-6 lg:p-8 space-y-8"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         {/* ================= HEADER ================= */}
//         <div className="flex items-center justify-between">
//           <div>
//             <h1 className="text-3xl font-bold">Service Listings</h1>
//             <p className="text-muted-foreground">
//               Manage your services
//             </p>
//           </div>

//           <Dialog open={open} onOpenChange={setOpen}>
//             <DialogTrigger asChild>
//               <Button onClick={openCreate}>
//                 <Icons.Plus className="w-4 h-4 mr-2" />
//                 New Listing
//               </Button>
//             </DialogTrigger>

//             <DialogContent>
//               <DialogHeader>
//                 <DialogTitle>
//                   {editing ? "Edit Listing" : "Create Listing"}
//                 </DialogTitle>
//                 <DialogDescription>
//                   Service details bharo
//                 </DialogDescription>
//               </DialogHeader>

//               <div className="space-y-4 py-4">
//                 <div>
//                   <Label>Service Name</Label>
//                   <Input
//                     value={form.name}
//                     onChange={(e) =>
//                       setForm({ ...form, name: e.target.value })
//                     }
//                   />
//                 </div>

//                 <div>
//                   <Label>Description</Label>
//                   <Textarea
//                     value={form.description}
//                     onChange={(e) =>
//                       setForm({ ...form, description: e.target.value })
//                     }
//                   />
//                 </div>

//                 <div>
//                   <Label>Price</Label>
//                   <Input
//                     value={form.price}
//                     onChange={(e) =>
//                       setForm({ ...form, price: e.target.value })
//                     }
//                   />
//                 </div>

//                 <div>
//                   <Label>Time Slots</Label>
//                   <Input
//                     placeholder="9:00 AM, 11:00 AM"
//                     value={form.timeSlots}
//                     onChange={(e) =>
//                       setForm({ ...form, timeSlots: e.target.value })
//                     }
//                   />
//                 </div>
//               </div>

//               <DialogFooter>
//                 <Button variant="outline" onClick={() => setOpen(false)}>
//                   Cancel
//                 </Button>
//                 <Button onClick={saveListing}>
//                   {editing ? "Save" : "Create"}
//                 </Button>
//               </DialogFooter>
//             </DialogContent>
//           </Dialog>
//         </div>

//         {/* ================= LISTINGS ================= */}
//         <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <AnimatePresence>
//             {listings.map((l) => (
//               <motion.div
//                 key={l.id}
//                 whileHover={{ scale: 1.03 }}
//                 exit={{ opacity: 0 }}
//               >
//                 <Card className="overflow-hidden">
//                   <div className="relative aspect-video bg-muted">
//                     <img
//                       src={l.image || "/placeholder.svg"}
//                       alt={l.name}
//                       className="w-full h-full object-cover"
//                     />
//                     <Badge className="absolute top-3 right-3">
//                       {l.status}
//                     </Badge>
//                   </div>

//                   <CardContent className="p-4 space-y-3">
//                     <h3 className="font-semibold text-lg">{l.name}</h3>

//                     <p className="text-sm text-muted-foreground line-clamp-2">
//                       {l.description}
//                     </p>

//                     <div className="flex items-center gap-2 text-sm">
//                       ₹ {l.price}
//                     </div>

//                     <div className="flex gap-2 pt-2">
//                       <Button
//                         size="sm"
//                         variant="outline"
//                         onClick={() => openEdit(l)}
//                       >
//                         <Icons.Edit className="w-4 h-4 mr-1" />
//                         Edit
//                       </Button>

//                       <Button
//                         size="sm"
//                         variant="outline"
//                         onClick={() => toggleStatus(l)}
//                       >
//                         {l.status === "active" ? "Deactivate" : "Activate"}
//                       </Button>

//                       <Button
//                         size="sm"
//                         variant="ghost"
//                         className="text-destructive"
//                         onClick={() => removeListing(l.id)}
//                       >
//                         <Icons.Trash2 className="w-4 h-4" />
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>
//       </motion.div>
//     </DashboardLayout>
//   );
// }

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import DashboardLayout from "../../components/DashboardLayout";
// import { Button } from "../../components/ui/button";
// import { Card, CardContent } from "../../components/ui/card";
// import { Input } from "../../components/ui/input";
// import { Label } from "../../components/ui/label";
// import { Textarea } from "../../components/ui/textarea";
// import { Badge } from "../../components/ui/badge";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogFooter,
//   DialogTrigger,
// } from "../../components/ui/dialog";
// import { Icons } from "../../components/icons";
// import { providerNavItems } from "./providerNavItems";

// /* 🔗 API */
// import {
//   getProviderListings,
//   createListing,
//   updateListing,
//   deleteListing,
//   toggleAvailability,
// } from "../../api/listings.api";

// /* 🔐 AUTH CONTEXT */
// import { useAuth } from "../../context/AuthContext";

// export default function ProviderListings() {
//   const { user } = useAuth(); // 👈 provider id yahin se
//   const providerId = user?.id;

//   const [listings, setListings] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [editing, setEditing] = useState(null);

//   const [form, setForm] = useState({
//     name: "",
//     description: "",
//     price: "",
//     timeSlots: "",
//   });

//   /* ================= LOAD LISTINGS ================= */
//   useEffect(() => {
//     if (providerId) {
//       loadListings();
//     }
//   }, [providerId]);

//   const loadListings = async () => {
//     try {
//       const res = await getProviderListings(providerId);
//       setListings(res.data);
//     } catch {
//       alert("Listings load nahi hui");
//     }
//   };

//   /* ================= DIALOG ================= */
//   const openCreate = () => {
//     setEditing(null);
//     setForm({ name: "", description: "", price: "", timeSlots: "" });
//     setOpen(true);
//   };

//   const openEdit = (item) => {
//     setEditing(item);
//     setForm({
//       name: item.name,
//       description: item.description,
//       price: item.price,
//       timeSlots: item.timeSlots?.join(", "),
//     });
//     setOpen(true);
//   };

//   /* ================= SAVE ================= */
//   const saveListing = async () => {
//     try {
//       const payload = {
//         name: form.name,
//         description: form.description,
//         price: form.price,
//         timeSlots: form.timeSlots.split(",").map((t) => t.trim()),
//       };

//       if (editing) {
//         await updateListing(editing.id, payload);
//       } else {
//         await createListing(providerId, payload);
//       }

//       setOpen(false);
//       loadListings();
//     } catch {
//       alert("Listing save nahi hui");
//     }
//   };

//   /* ================= TOGGLE STATUS ================= */
//   const toggleStatus = async (listing) => {
//     try {
//       await toggleAvailability(listing.id, {
//         isAvailable: listing.status !== "active",
//       });
//       loadListings();
//     } catch {
//       alert("Status update fail");
//     }
//   };

//   /* ================= DELETE ================= */
//   const removeListing = async (id) => {
//     if (!window.confirm("Delete karna hai?")) return;

//     try {
//       await deleteListing(id);
//       setListings(listings.filter((l) => l.id !== id));
//     } catch {
//       alert("Delete fail");
//     }
//   };

//   return (
//     <DashboardLayout
//       title="Provider Panel"
//       navItems={providerNavItems}
//       currentPath="/provider/listings"
//     >
//       <motion.div
//         className="p-6 lg:p-8 space-y-8"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         {/* ================= HEADER ================= */}
//         <div className="flex items-center justify-between">
//           <div>
//             <h1 className="text-3xl font-bold">Provider Listings</h1>
//             <p className="text-muted-foreground">
//               Apni services manage karo
//             </p>
//           </div>

//           <Dialog open={open} onOpenChange={setOpen}>
//             <DialogTrigger asChild>
//               <Button onClick={openCreate}>
//                 <Icons.Plus className="w-4 h-4 mr-2" />
//                 New Listing
//               </Button>
//             </DialogTrigger>

//             <DialogContent>
//               <DialogHeader>
//                 <DialogTitle>
//                   {editing ? "Edit Listing" : "Create Listing"}
//                 </DialogTitle>
//                 <DialogDescription>
//                   Service details fill karo
//                 </DialogDescription>
//               </DialogHeader>

//               <div className="space-y-4 py-4">
//                 <div>
//                   <Label>Service Name</Label>
//                   <Input
//                     value={form.name}
//                     onChange={(e) =>
//                       setForm({ ...form, name: e.target.value })
//                     }
//                   />
//                 </div>

//                 <div>
//                   <Label>Description</Label>
//                   <Textarea
//                     value={form.description}
//                     onChange={(e) =>
//                       setForm({ ...form, description: e.target.value })
//                     }
//                   />
//                 </div>

//                 <div>
//                   <Label>Price (₹)</Label>
//                   <Input
//                     value={form.price}
//                     onChange={(e) =>
//                       setForm({ ...form, price: e.target.value })
//                     }
//                   />
//                 </div>

//                 <div>
//                   <Label>Time Slots</Label>
//                   <Input
//                     placeholder="9:00 AM, 11:00 AM"
//                     value={form.timeSlots}
//                     onChange={(e) =>
//                       setForm({ ...form, timeSlots: e.target.value })
//                     }
//                   />
//                 </div>
//               </div>

//               <DialogFooter>
//                 <Button variant="outline" onClick={() => setOpen(false)}>
//                   Cancel
//                 </Button>
//                 <Button onClick={saveListing}>
//                   {editing ? "Save" : "Create"}
//                 </Button>
//               </DialogFooter>
//             </DialogContent>
//           </Dialog>
//         </div>

//         {/* ================= LISTINGS ================= */}
//         <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <AnimatePresence>
//             {listings.map((l) => (
//               <motion.div
//                 key={l.id}
//                 whileHover={{ scale: 1.03 }}
//                 exit={{ opacity: 0 }}
//               >
//                 <Card>
//                   <CardContent className="p-4 space-y-3">
//                     <div className="flex justify-between">
//                       <h3 className="font-semibold text-lg">{l.name}</h3>
//                       <Badge>{l.status}</Badge>
//                     </div>

//                     <p className="text-sm text-muted-foreground">
//                       {l.description}
//                     </p>

//                     <p className="font-medium">₹ {l.price}</p>

//                     <div className="flex gap-2 pt-2">
//                       <Button
//                         size="sm"
//                         variant="outline"
//                         onClick={() => openEdit(l)}
//                       >
//                         <Icons.Edit className="w-4 h-4 mr-1" />
//                         Edit
//                       </Button>

//                       <Button
//                         size="sm"
//                         variant="outline"
//                         onClick={() => toggleStatus(l)}
//                       >
//                         {l.status === "active" ? "Deactivate" : "Activate"}
//                       </Button>

//                       <Button
//                         size="sm"
//                         variant="ghost"
//                         className="text-destructive"
//                         onClick={() => removeListing(l.id)}
//                       >
//                         <Icons.Trash2 className="w-4 h-4" />
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>
//       </motion.div>
//     </DashboardLayout>
//   );
// }

// import { useEffect, useState } from "react";
// import DashboardLayout from "../../components/DashboardLayout";
// import { providerNavItems } from "./providerNavItems";
// import { Button } from "../../components/ui/button";
// import { Input } from "../../components/ui/input";
// import { Textarea } from "../../components/ui/textarea";

// import {
//   getProviderListings,
//   createListing,
//   deleteListing,
//   toggleAvailability,
// } from "../../api/listings.api";

// export default function ProviderListings() {
//   const providerId = 1; // 👉 login ke baad AuthContext se lena

//   const [listings, setListings] = useState([]);
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     price: "",
//     category: "",
//     location: "",
//   });

//   useEffect(() => {
//     loadListings();
//   }, []);

//   const loadListings = async () => {
//     const res = await getProviderListings(providerId);
//     setListings(res.data);
//   };

//   const submitListing = async () => {
//     await createListing(providerId, form);
//     setForm({
//       title: "",
//       description: "",
//       price: "",
//       category: "",
//       location: "",
//     });
//     loadListings();
//   };

//   return (
//     <DashboardLayout navItems={providerNavItems} currentPath="/provider/listings">
//       <h1 className="text-2xl font-bold mb-4">My Listings</h1>

//       {/* CREATE */}
//       <div className="space-y-2 mb-6">
//         {/* <input placeholder="Title" onChange={e=>setForm({...form,title:e.target.value})}/>
//         <input placeholder="Category" onChange={e=>setForm({...form,category:e.target.value})}/>
//         <input placeholder="Location" onChange={e=>setForm({...form,location:e.target.value})}/>
//         <input placeholder="Price" onChange={e=>setForm({...form,price:e.target.value})}/>
//         <textarea placeholder="Description" onChange={e=>setForm({...form,description:e.target.value})}/> */}
//         <Input
//   placeholder="Service Title"
//   value={form.title}
//   onChange={(e) => setForm({ ...form, title: e.target.value })}
// />

// <Input
//   placeholder="Category (Plumbing, Electrician)"
//   value={form.category}
//   onChange={(e) => setForm({ ...form, category: e.target.value })}
// />

// <Input
//   placeholder="Location (Delhi, Meerut)"
//   value={form.location}
//   onChange={(e) => setForm({ ...form, location: e.target.value })}
// />

// <Input
//   placeholder="Price"
//   value={form.price}
//   onChange={(e) => setForm({ ...form, price: e.target.value })}
// />

// <Textarea
//   placeholder="Description"
//   value={form.description}
//   onChange={(e) =>
//     setForm({ ...form, description: e.target.value })
//   }
// />

//         <Button onClick={submitListing}>Add Listing</Button>
//       </div>

//       {/* LIST */}
//       {listings.map(l => (
//         <div key={l.id} className="border p-3 mb-3">
//           <h3>{l.title}</h3>
//           <p>{l.category} | {l.location}</p>
//           <p>₹{l.price}</p>

//           <Button onClick={() => toggleAvailability(l.id, !l.isAvailable)}>
//             {l.isAvailable ? "Deactivate" : "Activate"}
//           </Button>

//           <Button variant="destructive" onClick={() => deleteListing(l.id)}>
//             Delete
//           </Button>
//         </div>
//       ))}
//     </DashboardLayout>
//   );
// }

// import { useEffect, useState } from "react";
// import DashboardLayout from "../../components/DashboardLayout";
// import { providerNavItems } from "./providerNavItems";

// import { Button } from "../../components/ui/button";
// import { Input } from "../../components/ui/input";
// import { Textarea } from "../../components/ui/textarea";
// import { Card, CardContent } from "../../components/ui/card";
// import { Badge } from "../../components/ui/badge";

// import {
//   getProviderListings,
//   createListing,
//   deleteListing,
//   toggleAvailability,
// } from "../../api/listings.api";

// export default function ProviderListings() {
//   const providerId = 1; // 🔴 later AuthContext se lena

//   const [listings, setListings] = useState([]);
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     price: "",
//     category: "",
//     location: "",
//   });

//   useEffect(() => {
//     loadListings();
//   }, []);

//   const loadListings = async () => {
//     const res = await getProviderListings(providerId);
//     setListings(res.data);
//   };

//   const submitListing = async () => {
//     await createListing(providerId, form);
//     setForm({
//       title: "",
//       description: "",
//       price: "",
//       category: "",
//       location: "",
//     });
//     loadListings();
//   };

//   return (
//     <DashboardLayout
//       navItems={providerNavItems}
//       currentPath="/provider/listings"
//       title="My Listings"
//     >
//       {/* ================= CREATE LISTING ================= */}
//       <Card className="mb-8">
//         <CardContent className="p-6 space-y-6">
//           <h2 className="text-xl font-semibold">Create New Service</h2>

//           <div className="grid md:grid-cols-2 gap-4">
//             <Input
//               placeholder="Service Title"
//               value={form.title}
//               onChange={(e) =>
//                 setForm({ ...form, title: e.target.value })
//               }
//             />

//             <Input
//               placeholder="Category (Plumbing, Electrician)"
//               value={form.category}
//               onChange={(e) =>
//                 setForm({ ...form, category: e.target.value })
//               }
//             />

//             <Input
//               placeholder="Location (Meerut, Delhi)"
//               value={form.location}
//               onChange={(e) =>
//                 setForm({ ...form, location: e.target.value })
//               }
//             />

//             <Input
//               placeholder="Price (₹)"
//               type="number"
//               value={form.price}
//               onChange={(e) =>
//                 setForm({ ...form, price: e.target.value })
//               }
//             />
//           </div>

//           <Textarea
//             placeholder="Describe your service in detail..."
//             rows={4}
//             value={form.description}
//             onChange={(e) =>
//               setForm({ ...form, description: e.target.value })
//             }
//           />

//           <Button className="w-full md:w-fit" onClick={submitListing}>
//             Add Listing
//           </Button>
//         </CardContent>
//       </Card>

//       {/* ================= LISTINGS ================= */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {listings.map((l) => (
//           <Card key={l.id} className="hover:shadow-lg transition">
//             <CardContent className="p-5 space-y-4">
//               <div className="flex justify-between items-start">
//                 <h3 className="text-lg font-semibold">{l.title}</h3>
//                 <Badge
//                   variant={l.isAvailable ? "default" : "secondary"}
//                 >
//                   {l.isAvailable ? "Active" : "Inactive"}
//                 </Badge>
//               </div>

//               <p className="text-sm text-muted-foreground">
//                 {l.category} • {l.location}
//               </p>

//               <p className="text-sm line-clamp-3">
//                 {l.description}
//               </p>

//               <div className="flex justify-between items-center">
//                 <span className="font-semibold text-lg">
//                   ₹{l.price}
//                 </span>
//               </div>

//               <div className="flex gap-2">
//                 <Button
//                   size="sm"
//                   variant={l.isAvailable ? "outline" : "default"}
//                   onClick={() =>
//                     toggleAvailability(l.id, !l.isAvailable).then(loadListings)
//                   }
//                 >
//                   {l.isAvailable ? "Deactivate" : "Activate"}
//                 </Button>

//                 <Button
//                   size="sm"
//                   variant="destructive"
//                   onClick={() =>
//                     deleteListing(l.id).then(loadListings)
//                   }
//                 >
//                   Delete
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </DashboardLayout>
//   );
// }

import { useEffect, useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { providerNavItems } from "./providerNavItems";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";

import {
  getProviderListings,
  createListing,
  deleteListing,
  toggleAvailability,
} from "../../api/listings.api";

export default function ProviderListings() {
  const providerId = 1; // 🔴 later AuthContext se lena

  const [listings, setListings] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    location: "",
  });

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    const res = await getProviderListings(providerId);
    setListings(res.data);
  };

  const submitListing = async () => {
    await createListing(providerId, form);
    setForm({
      title: "",
      description: "",
      price: "",
      category: "",
      location: "",
    });
    loadListings();
  };

  return (
    <DashboardLayout
      navItems={providerNavItems}
      currentPath="/provider/listings"
      title="My Listings"
    >
      {/* ================= CREATE LISTING ================= */}
      <Card className="mb-8">
        <CardContent className="p-6 space-y-6">
          <h2 className="text-xl font-semibold">
            Create New Service Listing
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {/* TITLE */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Service Title
              </label>
              <Input
                placeholder="e.g. Home Plumbing Repair"
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
              />
            </div>

            {/* CATEGORY */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Category
              </label>
              <Input
                placeholder="Plumbing / Electrician"
                value={form.category}
                onChange={(e) =>
                  setForm({ ...form, category: e.target.value })
                }
              />
            </div>

            {/* LOCATION */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Location
              </label>
              <Input
                placeholder="Meerut / Delhi"
                value={form.location}
                onChange={(e) =>
                  setForm({ ...form, location: e.target.value })
                }
              />
            </div>

            {/* PRICE */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Price (₹)
              </label>
              <Input
                type="number"
                placeholder="500"
                value={form.price}
                onChange={(e) =>
                  setForm({ ...form, price: e.target.value })
                }
              />
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Service Description
            </label>
            <Textarea
              rows={4}
              placeholder="Describe your service, experience, and what you offer..."
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
          </div>

          <Button className="w-full md:w-fit">
            Add Listing
          </Button>
        </CardContent>
      </Card>

      {/* ================= LISTINGS ================= */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((l) => (
          <Card key={l.id} className="hover:shadow-lg transition">
            <CardContent className="p-5 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold">{l.title}</h3>
                <Badge
                  variant={l.isAvailable ? "default" : "secondary"}
                >
                  {l.isAvailable ? "Active" : "Inactive"}
                </Badge>
              </div>

              <p className="text-sm text-muted-foreground">
                {l.category} • {l.location}
              </p>

              <p className="text-sm line-clamp-3">
                {l.description}
              </p>

              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg">
                  ₹{l.price}
                </span>
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant={l.isAvailable ? "outline" : "default"}
                  onClick={() =>
                    toggleAvailability(l.id, !l.isAvailable).then(loadListings)
                  }
                >
                  {l.isAvailable ? "Deactivate" : "Activate"}
                </Button>

                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() =>
                    deleteListing(l.id).then(loadListings)
                  }
                >
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
}
