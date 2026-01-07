import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Link2,
  BarChart3,
  Shield,
  Zap,
  MousePointerClick,
  Users,
  Globe,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col items-center bg-gradient-to-b from-zinc-50 to-white font-sans dark:from-zinc-950 dark:to-black"
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

        {/* How It Works Section */}
        <div
          className={cn(
            "mt-32 flex w-full flex-col items-center text-center"
          )}
        >
          <h2
            className={cn(
              "text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl"
            )}
          >
            How It Works
          </h2>
          <p
            className={cn(
              "mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
            )}
          >
            Get started in three simple steps
          </p>
          <div
            className={cn(
              "mt-16 grid w-full gap-8 sm:grid-cols-3"
            )}
          >
            <div className={cn("flex flex-col items-center")}>
              <div
                className={cn(
                  "flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-2xl font-bold text-white shadow-lg"
                )}
              >
                1
              </div>
              <h3
                className={cn(
                  "mt-6 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
                )}
              >
                Paste Your Link
              </h3>
              <p
                className={cn(
                  "mt-3 text-base text-zinc-600 dark:text-zinc-400"
                )}
              >
                Copy your long URL and paste it into our shortener. No
                complicated setup required.
              </p>
            </div>
            <div className={cn("flex flex-col items-center")}>
              <div
                className={cn(
                  "flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-2xl font-bold text-white shadow-lg"
                )}
              >
                2
              </div>
              <h3
                className={cn(
                  "mt-6 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
                )}
              >
                Customize & Create
              </h3>
              <p
                className={cn(
                  "mt-3 text-base text-zinc-600 dark:text-zinc-400"
                )}
              >
                Personalize your short link with a custom alias and click
                generate. It&apos;s instant!
              </p>
            </div>
            <div className={cn("flex flex-col items-center")}>
              <div
                className={cn(
                  "flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-2xl font-bold text-white shadow-lg"
                )}
              >
                3
              </div>
              <h3
                className={cn(
                  "mt-6 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
                )}
              >
                Share & Track
              </h3>
              <p
                className={cn(
                  "mt-3 text-base text-zinc-600 dark:text-zinc-400"
                )}
              >
                Share your link anywhere and watch real-time analytics roll in.
                Make data-driven decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={cn(
            "mt-32 w-full rounded-2xl border border-zinc-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-12 dark:border-zinc-800 dark:from-blue-950/20 dark:to-cyan-950/20"
          )}
        >
          <div
            className={cn(
              "grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            )}
          >
            <div className={cn("flex flex-col items-center text-center")}>
              <MousePointerClick
                className={cn(
                  "h-10 w-10 text-blue-600 dark:text-blue-400"
                )}
              />
              <div
                className={cn(
                  "mt-4 text-4xl font-bold text-zinc-900 dark:text-zinc-50"
                )}
              >
                10M+
              </div>
              <div
                className={cn(
                  "mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400"
                )}
              >
                Links Created
              </div>
            </div>
            <div className={cn("flex flex-col items-center text-center")}>
              <Users
                className={cn(
                  "h-10 w-10 text-purple-600 dark:text-purple-400"
                )}
              />
              <div
                className={cn(
                  "mt-4 text-4xl font-bold text-zinc-900 dark:text-zinc-50"
                )}
              >
                50K+
              </div>
              <div
                className={cn(
                  "mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400"
                )}
              >
                Active Users
              </div>
            </div>
            <div className={cn("flex flex-col items-center text-center")}>
              <Globe
                className={cn(
                  "h-10 w-10 text-green-600 dark:text-green-400"
                )}
              />
              <div
                className={cn(
                  "mt-4 text-4xl font-bold text-zinc-900 dark:text-zinc-50"
                )}
              >
                150+
              </div>
              <div
                className={cn(
                  "mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400"
                )}
              >
                Countries Reached
              </div>
            </div>
            <div className={cn("flex flex-col items-center text-center")}>
              <TrendingUp
                className={cn(
                  "h-10 w-10 text-orange-600 dark:text-orange-400"
                )}
              />
              <div
                className={cn(
                  "mt-4 text-4xl font-bold text-zinc-900 dark:text-zinc-50"
                )}
              >
                99.9%
              </div>
              <div
                className={cn(
                  "mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400"
                )}
              >
                Uptime Guarantee
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div
          className={cn(
            "mt-32 flex w-full flex-col items-center text-center"
          )}
        >
          <h2
            className={cn(
              "text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl"
            )}
          >
            Perfect For Every Use Case
          </h2>
          <p
            className={cn(
              "mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
            )}
          >
            Whether you&apos;re a marketer, developer, or business owner, our
            platform adapts to your needs
          </p>
          <div
            className={cn(
              "mt-16 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3"
            )}
          >
            <div
              className={cn(
                "rounded-xl border border-zinc-200 bg-white p-8 text-left shadow-sm transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              )}
            >
              <Sparkles
                className={cn(
                  "h-8 w-8 text-yellow-600 dark:text-yellow-400"
                )}
              />
              <h3
                className={cn(
                  "mt-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
                )}
              >
                Social Media Marketing
              </h3>
              <p
                className={cn(
                  "mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                )}
              >
                Create branded short links for Instagram, Twitter, LinkedIn,
                and more. Track which platforms drive the most engagement.
              </p>
            </div>
            <div
              className={cn(
                "rounded-xl border border-zinc-200 bg-white p-8 text-left shadow-sm transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              )}
            >
              <BarChart3
                className={cn(
                  "h-8 w-8 text-blue-600 dark:text-blue-400"
                )}
              />
              <h3
                className={cn(
                  "mt-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
                )}
              >
                Email Campaigns
              </h3>
              <p
                className={cn(
                  "mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                )}
              >
                Keep your emails clean and professional with short links.
                Measure click-through rates and optimize your campaigns.
              </p>
            </div>
            <div
              className={cn(
                "rounded-xl border border-zinc-200 bg-white p-8 text-left shadow-sm transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              )}
            >
              <Users
                className={cn(
                  "h-8 w-8 text-green-600 dark:text-green-400"
                )}
              />
              <h3
                className={cn(
                  "mt-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
                )}
              >
                Team Collaboration
              </h3>
              <p
                className={cn(
                  "mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                )}
              >
                Share links across your team with organized workspaces. Monitor
                performance collectively and make better decisions.
              </p>
            </div>
            <div
              className={cn(
                "rounded-xl border border-zinc-200 bg-white p-8 text-left shadow-sm transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              )}
            >
              <Globe
                className={cn(
                  "h-8 w-8 text-purple-600 dark:text-purple-400"
                )}
              />
              <h3
                className={cn(
                  "mt-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
                )}
              >
                Global Campaigns
              </h3>
              <p
                className={cn(
                  "mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                )}
              >
                Run international campaigns with geo-tracking. Understand where
                your audience is and tailor content accordingly.
              </p>
            </div>
            <div
              className={cn(
                "rounded-xl border border-zinc-200 bg-white p-8 text-left shadow-sm transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              )}
            >
              <Shield
                className={cn(
                  "h-8 w-8 text-red-600 dark:text-red-400"
                )}
              />
              <h3
                className={cn(
                  "mt-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
                )}
              >
                Secure Sharing
              </h3>
              <p
                className={cn(
                  "mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                )}
              >
                Share sensitive documents and links with confidence. Our
                enterprise-grade security keeps your data protected.
              </p>
            </div>
            <div
              className={cn(
                "rounded-xl border border-zinc-200 bg-white p-8 text-left shadow-sm transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              )}
            >
              <TrendingUp
                className={cn(
                  "h-8 w-8 text-cyan-600 dark:text-cyan-400"
                )}
              />
              <h3
                className={cn(
                  "mt-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
                )}
              >
                Growth Analytics
              </h3>
              <p
                className={cn(
                  "mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                )}
              >
                Make data-driven decisions with detailed analytics. Track
                growth trends and optimize your marketing strategy.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div
          className={cn(
            "mt-32 w-full"
          )}
        >
          <div className={cn("grid gap-12 lg:grid-cols-2 lg:gap-16")}>
            <div className={cn("flex flex-col justify-center")}>
              <h2
                className={cn(
                  "text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl"
                )}
              >
                Why Choose Our Platform?
              </h2>
              <p
                className={cn(
                  "mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400"
                )}
              >
                We&apos;ve built the most comprehensive link management solution
                with features that help you succeed.
              </p>
              <div className={cn("mt-8 space-y-4")}>
                <div className={cn("flex items-start gap-4")}>
                  <CheckCircle2
                    className={cn(
                      "mt-1 h-6 w-6 flex-shrink-0 text-green-600 dark:text-green-400"
                    )}
                  />
                  <div>
                    <h4
                      className={cn(
                        "font-semibold text-zinc-900 dark:text-zinc-50"
                      )}
                    >
                      Real-Time Analytics Dashboard
                    </h4>
                    <p
                      className={cn(
                        "mt-1 text-sm text-zinc-600 dark:text-zinc-400"
                      )}
                    >
                      Monitor clicks, geographic data, and referral sources as
                      they happen. No delays, no waiting.
                    </p>
                  </div>
                </div>
                <div className={cn("flex items-start gap-4")}>
                  <CheckCircle2
                    className={cn(
                      "mt-1 h-6 w-6 flex-shrink-0 text-green-600 dark:text-green-400"
                    )}
                  />
                  <div>
                    <h4
                      className={cn(
                        "font-semibold text-zinc-900 dark:text-zinc-50"
                      )}
                    >
                      Custom Branded Links
                    </h4>
                    <p
                      className={cn(
                        "mt-1 text-sm text-zinc-600 dark:text-zinc-400"
                      )}
                    >
                      Create memorable, branded short links that build trust and
                      increase click-through rates.
                    </p>
                  </div>
                </div>
                <div className={cn("flex items-start gap-4")}>
                  <CheckCircle2
                    className={cn(
                      "mt-1 h-6 w-6 flex-shrink-0 text-green-600 dark:text-green-400"
                    )}
                  />
                  <div>
                    <h4
                      className={cn(
                        "font-semibold text-zinc-900 dark:text-zinc-50"
                      )}
                    >
                      Unlimited Link Creation
                    </h4>
                    <p
                      className={cn(
                        "mt-1 text-sm text-zinc-600 dark:text-zinc-400"
                      )}
                    >
                      No artificial limits. Create as many short links as you
                      need for all your campaigns and projects.
                    </p>
                  </div>
                </div>
                <div className={cn("flex items-start gap-4")}>
                  <CheckCircle2
                    className={cn(
                      "mt-1 h-6 w-6 flex-shrink-0 text-green-600 dark:text-green-400"
                    )}
                  />
                  <div>
                    <h4
                      className={cn(
                        "font-semibold text-zinc-900 dark:text-zinc-50"
                      )}
                    >
                      API Access for Developers
                    </h4>
                    <p
                      className={cn(
                        "mt-1 text-sm text-zinc-600 dark:text-zinc-400"
                      )}
                    >
                      Integrate our link shortening service into your apps with
                      our robust and well-documented API.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={cn(
                "flex items-center justify-center rounded-2xl border border-zinc-200 bg-gradient-to-br from-blue-50 to-purple-50 p-12 dark:border-zinc-800 dark:from-blue-950/20 dark:to-purple-950/20"
              )}
            >
              <div className={cn("space-y-8 text-center")}>
                <div
                  className={cn(
                    "mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-xl"
                  )}
                >
                  <Link2 className={cn("h-10 w-10 text-white")} />
                </div>
                <div>
                  <div
                    className={cn(
                      "text-5xl font-bold text-zinc-900 dark:text-zinc-50"
                    )}
                  >
                    100% Free
                  </div>
                  <p
                    className={cn(
                      "mt-3 text-lg text-zinc-600 dark:text-zinc-400"
                    )}
                  >
                    Start creating short links today
                  </p>
                </div>
                <Link href="/register">
                  <Button
                    size="lg"
                    className={cn(
                      "h-14 rounded-full px-8 text-lg font-semibold shadow-lg hover:shadow-xl"
                    )}
                  >
                    Get Started Now
                    <ArrowRight
                      className={cn("ml-2 h-5 w-5")}
                    />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div
          className={cn(
            "mt-32 mb-16 w-full rounded-2xl border border-zinc-200 bg-gradient-to-r from-blue-600 to-cyan-600 p-12 text-center shadow-xl dark:border-zinc-800 dark:from-blue-700 dark:to-cyan-700"
          )}
        >
          <h2
            className={cn(
              "text-3xl font-bold tracking-tight text-white sm:text-4xl"
            )}
          >
            Ready to Transform Your Links?
          </h2>
          <p className={cn("mt-4 text-lg text-blue-50")}>
            Join thousands of users who trust us for their link management
            needs.
          </p>
          <div className={cn("mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6")}>
            <Link href="/register">
              <Button
                size="lg"
                variant="outline"
                className={cn(
                  "h-12 rounded-full border-2 border-white bg-white px-8 text-base font-semibold text-blue-600 hover:bg-blue-50"
                )}
              >
                Start Free Today
              </Button>
            </Link>
            <Link href="/login">
              <Button
                size="lg"
                className={cn(
                  "h-12 rounded-full border-2 border-white bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10"
                )}
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
