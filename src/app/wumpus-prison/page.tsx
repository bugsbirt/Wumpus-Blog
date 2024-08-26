"use client"
import Image from "next/image";
import { Navbarr } from "@/components/navbar";
import { BlogMenu } from "@/components/blogs";
import { Footer } from "@/components/footer";
import { WumpisPrisoner } from "@/components/prisoned";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black text-white px-4 sm:px-6 md:px-8 lg:px-24 relative">
      <Navbarr />
       <WumpisPrisoner />
      <Footer />
    </main>
  );
}

