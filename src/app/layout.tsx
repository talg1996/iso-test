// layout.tsx
"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import { ThemeProvider } from "@/app/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`bg-zinc-50 dark:bg-slate-800 ${inter.className}`}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
