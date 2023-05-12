import Image from "next/image";
import Link from "next/link";
import { Header, Navbar, Hero } from "@/components";

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <Hero />
    </main>
  );
}
