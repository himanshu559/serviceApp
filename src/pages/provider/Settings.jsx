import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { providerNavItems } from "./providerNavItems";

export default function Settings() {
  const [saving, setSaving] = useState(false);

  const save = async () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 1000);
  };

  return (
    <DashboardLayout navItems={providerNavItems} currentPath="/provider/settings">
      <div className="p-6 max-w-xl">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>

        <Card>
          <CardContent className="p-4 space-y-4">
            <input className="w-full border p-2 rounded" placeholder="Business Name" />
            <input className="w-full border p-2 rounded" placeholder="Email" />
            <Button onClick={save}>{saving ? "Saving..." : "Save Changes"}</Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
