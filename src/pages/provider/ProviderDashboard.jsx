import DashboardLayout from "../../components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Icons } from "../../components/icons";
import { providerNavItems } from "./providerNavItems";

const stats = [
  { label: "Total Bookings", value: "47", icon: Icons.Calendar },
  { label: "Revenue", value: "₹2,450", icon: Icons.DollarSign },
  { label: "Rating", value: "4.8", icon: Icons.Star },
  { label: "Customers", value: "32", icon: Icons.Users },
];

const upcomingBookings = [
  { id: 1, customer: "Suraj Rajput", service: "Pipe Repair", date: "Today", time: "2:00 PM", status: "confirmed" },
  { id: 2, customer: "Saurav Yadav", service: "Drain Cleaning", date: "Tomorrow", time: "10:00 AM", status: "pending" },
];

export default function ProviderDashboard() {
  return (
    <DashboardLayout navItems={providerNavItems} currentPath="/provider">
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <Card key={s.label}>
              <CardContent className="p-6">
                <s.icon className="w-5 h-5 mb-2 text-muted-foreground" />
                <p className="text-2xl font-bold">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Bookings</CardTitle>
            <CardDescription>Your scheduled appointments</CardDescription>
          </CardHeader>
          <CardContent>
            {upcomingBookings.map((b) => (
              <div key={b.id} className="flex justify-between p-4 bg-muted/50 rounded mb-3">
                <div>
                  <p className="font-medium">{b.customer}</p>
                  <p className="text-sm text-muted-foreground">{b.service}</p>
                </div>
                <Badge>{b.status}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
