import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs";
import { providerNavItems } from "./providerNavItems";

const data = [
  { id: 1, customer: "Amit Sharma", service: "Pipe Repair", status: "upcoming" },
  { id: 2, customer: "Sneha Verma", service: "Drain Cleaning", status: "completed" },
];

export default function Bookings() {
  const [bookings] = useState(data);

  const filter = (s) => (s === "all" ? bookings : bookings.filter(b => b.status === s));

  return (
    <DashboardLayout navItems={providerNavItems} currentPath="/provider/bookings">
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Bookings</h1>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          {["all", "upcoming", "completed"].map((tab) => (
            <TabsContent key={tab} value={tab}>
              <Card>
                <CardContent>
                  {filter(tab).map((b) => (
                    <div key={b.id} className="flex justify-between py-3 border-b">
                      <div>
                        <p className="font-medium">{b.customer}</p>
                        <p className="text-sm text-muted-foreground">{b.service}</p>
                      </div>
                      <Badge>{b.status}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </DashboardLayout>
  );
}