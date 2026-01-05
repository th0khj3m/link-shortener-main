import { validateSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ReactElement } from "react";
import { cn } from "@/lib/utils";

export default async function DashboardPage(): Promise<ReactElement> {
  const { user } = await validateSession();

  if (!user) {
    redirect("/login");
  }

  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center justify-center p-24"
      )}
    >
      <h1 className={cn("text-4xl font-bold")}>Dashboard</h1>
      <p className="mt-4">Welcome, {user.email}!</p>
    </main>
  );
}
