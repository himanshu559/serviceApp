import DashboardLayout from "../../components/DashboardLayout";
import { Card, CardContent } from "../../components/ui/card";
import { providerNavItems } from "./providerNavItems";

const reviews = [
  { id: 1, customer: "Anjali", rating: 5, comment: "Excellent work!" },
  { id: 2, customer: "Varun", rating: 4, comment: "Good service" },
];

export default function Reviews() {
  return (
    <DashboardLayout navItems={providerNavItems} currentPath="/provider/reviews">
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Reviews</h1>

        {reviews.map((r) => (
          <Card key={r.id} className="mb-4">
            <CardContent className="p-4">
              <p className="font-medium">{r.customer}</p>
              <p className="text-sm text-muted-foreground">{r.comment}</p>
              <p>⭐ {r.rating}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
}
