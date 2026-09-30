import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <div className="bg-grid">
        <Navbar />
        <section className="container-page py-12 text-center">
          <div className="bg-gradient-to-b from-lime to-transparent bg-clip-text text-[240px] font-bold leading-none text-transparent md:text-[360px]">404</div>
          <h1 className="-mt-24 text-4xl font-semibold text-white md:-mt-40 md:text-6xl">The page you are looking<br />for doesn’t exist</h1>
          <p className="mt-10 text-white/90">Try to use a correct url or go back to homepage to start again</p>
          <Link href="/" className="btn-lime mt-8">Back to Home</Link>
          <div className="h-24" />
        </section>
      </div>
      <Footer />
    </>
  );
}
