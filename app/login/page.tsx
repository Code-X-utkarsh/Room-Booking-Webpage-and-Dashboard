"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Space_Mono } from "next/font/google";
import { useEffect } from "react";

const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });

export default function LoginPage() {
  const { login, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/dashboard");
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated) {
    return null;
  }

  // Mock handler for Google/Apple
  const handleSocialLogin = () => {
    login("Demo User", "demo@example.com");
    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-screen bg-[#F4F4F5]">
      {/* Left Column */}
      <div className="flex w-full flex-col p-8 pt-10 sm:p-12 lg:w-1/2 lg:pl-16 lg:pr-12 xl:pl-24 relative">

        {/* Top left Logo linking to homepage */}
        <div className="absolute left-8 top-8 sm:left-12 sm:top-10 lg:left-16 xl:left-24">
          <Link href="/" className={`inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm transition-all hover:bg-gray-50 hover:shadow ${spaceMono.className}`} aria-label="Go to homepage">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Home Page
          </Link>
        </div>

        {/* Center Content Form Area */}
        <div className="mx-auto w-full max-w-[400px] mt-24 flex-1 flex flex-col justify-center">
          {/* Headline - Using a wide dotted style look. For highest compatibility, using Space Mono with dotted tracking. */}
          <h1
            className={`text-center text-[1.75rem] leading-snug tracking-[0.2em] text-black ${spaceMono.className}`}
            style={{
              textTransform: "uppercase",
              textShadow: "0.5px 0.5px 0 #000, -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000",
              color: "transparent",
              WebkitTextStroke: "1px black"
            }}
          >
            LOG IN OR SIGN UP
          </h1>

          <p className={`mt-8 text-center text-sm leading-relaxed text-gray-400 ${spaceMono.className}`}>
            You'll get clear task tracking across projects<br />
            — without extra meetings
          </p>

          {/* Manual Login Form */}
          <form className={`mt-10 flex flex-col gap-4 ${spaceMono.className}`} onSubmit={(e) => { e.preventDefault(); handleSocialLogin(); }}>
            <input
              type="email"
              placeholder="Email address"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm font-medium text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm font-medium text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-black px-4 py-3.5 text-sm font-bold text-white transition-all hover:bg-gray-800 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200"></div>
            <span className={`text-xs text-gray-400 uppercase tracking-widest ${spaceMono.className}`}>Or</span>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <button
              onClick={handleSocialLogin}
              className={`flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white px-2 py-3.5 text-sm font-bold text-gray-800 transition-all hover:bg-gray-50 focus:ring-2 focus:ring-gray-200 ${spaceMono.className}`}
            >
              Continue with Google
              <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </button>

            <button
              onClick={handleSocialLogin}
              className={`flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white px-2 py-3.5 text-sm font-bold text-gray-800 transition-all hover:bg-gray-50 focus:ring-2 focus:ring-gray-200 ${spaceMono.className}`}
            >
              Continue with Apple
              <svg className="h-[20px] w-[20px]" viewBox="0 0 24 24" fill="black">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1.886 16.593c-1.353-.021-2.484-.81-3.238-.81-.754 0-1.884.767-3.033.788-1.508.021-2.908-.853-3.684-2.196-1.574-2.738-.403-6.804 1.129-8.98 .744-1.076 1.83-1.748 2.992-1.769 1.141-.021 2.218.746 2.992.746.774 0 2.067-.895 3.444-.768 1.487.042 2.822.618 3.597 1.768-3.076 1.875-2.581 6.273.495 7.424-.712 1.748-2.003 3.666-3.649 3.738l-.045.059zM15.02 5.5c-1.055.98-1.763 2.535-1.554 4.041 1.636.064 3.012-1.002 3.823-1.982.853-.98 1.581-2.492 1.373-4.019-1.551-.128-3.141.96-3.642 1.96z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Footer Text */}
        <div className={`mt-16 text-center text-xs text-gray-500 font-medium ${spaceMono.className}`}>
          Don't have an account?{" "}
          <Link href="/register" className="text-black font-bold underline transition-colors hover:text-gray-700">
            Create Account
          </Link>
        </div>
      </div>

      {/* Right Column - Image Panel */}
      <div className="hidden w-1/2 p-4 lg:block h-screen">
        <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-gray-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] border-[6px] border-white transition-all duration-300 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] hover:-translate-y-1">
          <Image
            src="/Whisk_0cb.jpeg"
            alt="Luxury Hotel"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
