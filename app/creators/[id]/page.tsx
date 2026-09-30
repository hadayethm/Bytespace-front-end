import { BarChart3, Filter, ListFilter, Shapes } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/lib/data";

export default function CreatorPage() {
  return (
    <>
      <div className="bg-grid pb-16">
        <Navbar />
        <section className="container-page mt-6">
          <div className="flex items-center gap-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://picsum.photos/seed/creator/200/200" alt="PurePearl Studio" className="h-24 w-24 rounded-3xl bg-pink-300 object-cover" />
            <div>
              <h1 className="flex items-center gap-3 text-4xl font-semibold text-white">PurePearl Studio <span className="rounded-full bg-lime px-4 py-1 text-sm font-normal text-ink">Creator</span></h1>
              <p className="mt-1 text-white/90">Passionate UI/UX, Web designer</p>
            </div>
          </div>
          <p className="mt-12 max-w-5xl leading-8 text-white">
            Welcome to the creative world of PurePearl Studio. Here, you’ll discover the passion, expertise, and inspiration that drive my creative journey. Let’s explore and learn together!<br />
            Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <span className="rounded-full bg-white px-6 py-3 text-brand"><b className="font-medium">3</b> <span className="text-ink">Products</span></span>
            <span className="rounded-full bg-white px-6 py-3 text-brand"><b className="font-medium">12</b> <span className="text-ink">Followers</span></span>
            <button className="btn-lime ml-auto px-10">Follow</button>
          </div>
        </section>
      </div>
      <main className="container-page py-10">
        <div className="flex flex-wrap items-center gap-3">
          <button className="chip border border-neutral-300 bg-white"><Filter size={14} />Filter</button>
          <button className="chip border border-neutral-300 bg-white"><BarChart3 size={14} />Level</button>
          <button className="chip border border-neutral-300 bg-white"><Shapes size={14} />Category</button>
          <button className="chip ml-auto border border-neutral-300 bg-white"><ListFilter size={14} />Most relevant</button>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => <CourseCard key={c.id} course={c} />)}
        </div>
      </main>
      <Footer />
    </>
  );
}
