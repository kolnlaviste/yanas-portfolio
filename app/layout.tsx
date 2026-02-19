import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yana - Social Media VA & Graphic Designer",
  description: "Minimalist grid portfolio showcasing social media management and graphic design work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        <SideNav />
        {/*
          Responsive spacing:
          - Mobile & Tablet: pt-16 (top hamburger nav)
          - Desktop: ml-24 (sidebar space)
        */}
        <main className="pt-16 lg:pt-0 lg:ml-24 min-h-screen overflow-x-hidden w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}