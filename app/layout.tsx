import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Example Extension",
  description: "Example extension that helps you kick start development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NextUIProvider>
        <body className={`${inter.className} dark text-foreground bg-background 100 min-h-screen min-w-80`}>
          {children}
        </body>
      </NextUIProvider>
    </html>
  );
}
