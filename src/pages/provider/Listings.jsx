import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { providerNavItems } from "./providerNavItems";

const initialListings = [
  { id: 1, name: "Pipe Repair", price: "₹500-1000", status: "active" },
  { id: 2, name: "Drain Cleaning", price: "₹700-1200", status: "inactive" },
];

export default function Listings() {
  const [listings, setListings] = useState(initialListings);

  return (
    <DashboardLayout navItems={providerNavItems} currentPath="/provider/listings">
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Listings</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {listings.map((l) => (
            <Card key={l.id}>
              <CardContent className="p-4">
                <h3 className="font-semibold">{l.name}</h3>
                <p className="text-sm text-muted-foreground">{l.price}</p>
                <Button size="sm" className="mt-3">
                  {l.status === "active" ? "Deactivate" : "Activate"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
