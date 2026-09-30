import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="container-page flex items-center justify-between py-8 text-white">
      <Link href="/"> <Image
          src="/header-logo.png"
          alt="ByteSpace"
          width={180}
          height={50}
          className="h-auto w-[180px]"
        /></Link>
      <nav className="hidden gap-8 text-sm md:flex">
        <Link href="/" className="font-medium">Home</Link>
        <Link href="/courses" className="opacity-90 hover:opacity-100">Courses</Link>
        <Link href="/creators/1" className="opacity-90 hover:opacity-100">Creators</Link>
      </nav>
      <div className="flex items-center gap-5 text-sm">
        <Link href="/login">Sign In</Link>
        <Link href="/register">Join Us</Link>
        <button aria-label="Cart"><ShoppingBag size={18} /></button>
      </div>
    </header>
  );
}
