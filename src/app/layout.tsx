import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wumpus Blog ",
  description: "A blog all about Wumpus & their adventures!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <head>
      <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <meta property="og:title" content="Wumpus Blog" />
        <meta property="og:description" content="A **unofficial** blog all about Wumpus & their adventures!" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:url" content="https://wumpus.blog" />
        <meta name="theme-color" content="#5b65e8" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://wumpus.blog/favicon.ico" />
        <meta property="og:image:type" content="image/png" />
      </head>      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
