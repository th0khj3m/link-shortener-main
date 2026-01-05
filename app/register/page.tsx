import { signUp } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className={cn("flex min-h-screen items-center justify-center")}>
      <div
        className={cn(
          "w-full max-w-md space-y-8 p-8 border rounded-lg shadow-sm"
        )}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold">Register</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Create a new account to get started
          </p>
        </div>
        <form action={signUp} className="space-y-6">
          <div>
            <label className="block text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black dark:border-zinc-700 dark:bg-zinc-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black dark:border-zinc-700 dark:bg-zinc-900"
            />
          </div>
          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="font-medium underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
