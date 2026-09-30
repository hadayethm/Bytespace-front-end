"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Filter, BarChart3, Shapes, ListFilter, Search, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { categories, courses } from "@/lib/data";

const list = Array.from({ length: 18 }, (_, i) => ({ ...courses[i % 6], id: String((i % 6) + 1) }));

export default function CoursesPage() {
  const [cat, setCat] = useState("Featured");
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const shown = list.filter((c) => c.title.toLowerCase().includes(q.toLowerCase()));

  return (
    <>
      <div className="bg-grid pb-16">
        <Navbar />
        <h1 className="mt-4 text-center text-4xl font-semibold text-white">Find Your Next Course</h1>
        <div className="container-page mt-8 flex max-w-2xl gap-3">
          <label className="flex flex-1 items-center gap-2 rounded-full bg-white px-5 py-3 text-neutral-500">
            <Search size={16} />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search" className="w-full bg-transparent text-sm outline-none" />
          </label>
          <button className="btn-lime gap-2">Courses <ChevronDown size={14} /></button>
        </div>
      </div>

      <main className="container-page py-10">
        <div className="flex flex-wrap items-center gap-3">
          <button className="chip border border-neutral-300 bg-white"><Filter size={14} />Filter</button>
          <button className="chip border border-neutral-300 bg-white"><BarChart3 size={14} />Level</button>
          <button className="chip border border-neutral-300 bg-white"><Shapes size={14} />Category</button>
          <button className="chip ml-auto border border-neutral-300 bg-white"><ListFilter size={14} />Most relevant</button>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`chip ${cat === c ? "chip-active" : ""}`}>{c}</button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((c, i) => <CourseCard key={i} course={c} />)}
        </div>
        {shown.length === 0 && <p className="py-20 text-center text-neutral-500">No courses match your search. Try a different keyword.</p>}

        <nav className="mt-12 flex items-center justify-center gap-5">
          <button onClick={() => setPage((p) => Math.max(1, p - 1))} className="grid h-10 w-10 place-items-center rounded-full border border-neutral-300" aria-label="Previous"><ChevronLeft size={18} /></button>
          {[1, 2, 3, 4, 5].map((n) => (
            <button key={n} onClick={() => setPage(n)} className={page === n ? "text-neutral-400" : "font-medium"}>{n}</button>
          ))}
          <button onClick={() => setPage((p) => Math.min(5, p + 1))} className="grid h-10 w-10 place-items-center rounded-full border border-neutral-300" aria-label="Next"><ChevronRight size={18} /></button>
        </nav>
      </main>
      <Footer />
    </>
  );
}
