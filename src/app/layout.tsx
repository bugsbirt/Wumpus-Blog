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
      // discord meta data
      <meta>
        <meta property="og:title" content="Wumpus Blog" />
        <meta property="og:description" content="A very cool blog about Wumpus" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:url" content="https://wumpus.blog" />
        <meta property="og:type" content="website" />
        <meta property="og:color" content="#5865F2" />
        </meta>
      </head>      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
