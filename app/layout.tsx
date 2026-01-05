import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { validateSession } from "@/lib/auth";
import { logout } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Link Shortener - Shorten URLs & Track Performance",
  description: "Create short, memorable links in seconds. Monitor clicks, analyze traffic, and gain insights with our powerful link management platform.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await validateSession();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(geistSans.variable, geistMono.variable, "antialiased")}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="flex justify-end p-4 gap-4 items-center">
            <ModeToggle />
            {!user ? (
              <>
                <Link href="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link href="/register">
                  <Button>Register</Button>
                </Link>
              </>
            ) : (
              <form action={logout}>
                <Button variant="outline" type="submit">
                  Logout
                </Button>
              </form>
            )}
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
