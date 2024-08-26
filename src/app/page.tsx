"use client"

import Image from "next/image";
import { Navbarr } from "@/components/navbar";
import { BlogMenu } from "@/components/blogs";
import { Footer } from "@/components/footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <Navbarr />
      <BlogMenu />
      <Footer />
    </main>
  );
}

