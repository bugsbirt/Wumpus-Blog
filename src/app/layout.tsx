import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wumpus Blog",
  description: "A very cool blog about Wumpus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // icon

    <html lang="en">
      <head>
      <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </head>      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
