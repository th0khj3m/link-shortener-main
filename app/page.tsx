import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link2, BarChart3, Shield, Zap } from "lucide-react";

export default function Home() {
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col items-center bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black"
      )}
    >
      {/* Hero Section */}
      <main
        className={cn(
          "flex w-full max-w-6xl flex-col items-center px-6 py-16 sm:py-24"
        )}
      >
        <div className={cn("flex flex-col items-center text-center")}>
          <h1
            className={cn(
              "max-w-4xl text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl"
            )}
          >
            Shorten Links.{" "}
            <span
              className={cn(
                "bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400"
              )}
            >
              Track Performance.
            </span>
          </h1>
          <p
            className={cn(
              "mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400"
            )}
          >
            Create short, memorable links in seconds. Monitor clicks, analyze
            traffic, and gain insights with our powerful link management
            platform.
          </p>
          <div
            className={cn(
              "mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6"
            )}
          >
            <Link href="/register">
              <Button
                size="lg"
                className={cn(
                  "h-12 rounded-full px-8 text-base font-semibold"
                )}
              >
                Get Started Free
              </Button>
            </Link>
            <Link href="/login">
              <Button
                variant="outline"
                size="lg"
                className={cn(
                  "h-12 rounded-full px-8 text-base font-semibold"
                )}
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div
          className={cn(
            "mt-24 grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-4"
          )}
        >
          <div
            className={cn(
              "flex flex-col items-center rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            )}
          >
            <div
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30"
              )}
            >
              <Link2
                className={cn("h-6 w-6 text-blue-600 dark:text-blue-400")}
              />
            </div>
            <h3
              className={cn(
                "mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50"
              )}
            >
              Quick Shortening
            </h3>
            <p
              className={cn(
                "mt-2 text-sm text-zinc-600 dark:text-zinc-400"
              )}
            >
              Transform long URLs into short, shareable links instantly with
              just one click.
            </p>
          </div>

          <div
            className={cn(
              "flex flex-col items-center rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            )}
          >
            <div
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30"
              )}
            >
              <BarChart3
                className={cn("h-6 w-6 text-green-600 dark:text-green-400")}
              />
            </div>
            <h3
              className={cn(
                "mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50"
              )}
            >
              Analytics
            </h3>
            <p
              className={cn(
                "mt-2 text-sm text-zinc-600 dark:text-zinc-400"
              )}
            >
              Track clicks, monitor traffic sources, and analyze link
              performance in real-time.
            </p>
          </div>

          <div
            className={cn(
              "flex flex-col items-center rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            )}
          >
            <div
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30"
              )}
            >
              <Shield
                className={cn("h-6 w-6 text-purple-600 dark:text-purple-400")}
              />
            </div>
            <h3
              className={cn(
                "mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50"
              )}
            >
              Secure & Reliable
            </h3>
            <p
              className={cn(
                "mt-2 text-sm text-zinc-600 dark:text-zinc-400"
              )}
            >
              Your links are protected with enterprise-grade security and
              99.9% uptime guarantee.
            </p>
          </div>

          <div
            className={cn(
              "flex flex-col items-center rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            )}
          >
            <div
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30"
              )}
            >
              <Zap
                className={cn("h-6 w-6 text-orange-600 dark:text-orange-400")}
              />
            </div>
            <h3
              className={cn(
                "mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50"
              )}
            >
              Lightning Fast
            </h3>
            <p
              className={cn(
                "mt-2 text-sm text-zinc-600 dark:text-zinc-400"
              )}
            >
              Experience blazing fast redirects with our optimized
              infrastructure worldwide.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
