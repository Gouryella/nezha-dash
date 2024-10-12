import "@/styles/globals.css";

import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Viewport } from "next";
import { PublicEnvScript } from "next-runtime-env";
import { ThemeProvider } from "next-themes";
import { Inter as FontSans } from "next/font/google";
import React from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Server Status - 201 Lab",
  description: "A dashboard for 201 Lab",
  appleWebApp: {
    capable: true,
    title: "Server Status - 201 Lab",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const dynamic = process.env.VERCEL ? "force-static" : "auto";

export const runtime = "edge";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <PublicEnvScript />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
