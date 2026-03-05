import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { BookingProvider } from "@/context/BookingContext";
import { SidebarProvider } from "@/context/SidebarContext";
import ErrorBoundary from "@/components/layout/ErrorBoundary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aether — Hotel Booking",
  description: "Discover top hotels, compare deals, and book your perfect stay with Aether.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#F4F4F5] text-[#020617] antialiased`}>
        <AuthProvider>
          <BookingProvider>
            <SidebarProvider>
              <ErrorBoundary>
                {children}
              </ErrorBoundary>
            </SidebarProvider>
          </BookingProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

