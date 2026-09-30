"use client";
import { useState } from "react";
import Link from "next/link";
import { BarChart3, Star, Users, Share2, Play, FileText, Video, Award, MessageCircle, CheckCircle2, Video as Cam } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { keyPoints, modules, ratingBars, reviews } from "@/lib/data";

type Tab = "About" | "Lessons" | "Reviews";

function Stars({ n }: { n: number }) {
  return <div className="flex gap-1">{[1, 2, 3, 4, 5].map((i) => <Star key={i} size={18} className={i <= n ? "fill-neutral-600 text-neutral-600" : "text-neutral-300"} />)}</div>;
}

function About() {
  return (
    <>
      <h3 className="text-xl font-semibold">Description</h3>
      <div className="mt-4 space-y-5 text-sm leading-7 text-neutral-600">
        <p>Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content.</p>
        <p>In the initial modules, you’ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation.</p>
        <p>As you progress through the course, you’ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Engage in hands-on exercises that reinforce your understanding.</p>
      </div>
      <h3 className="mt-8 text-xl font-semibold">Sneak Peak</h3>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {["a", "b", "c", "d"].map((s) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={s} src={`https://picsum.photos/seed/peek${s}/300/200`} alt="" className="h-28 w-full rounded-2xl object-cover" />
        ))}
      </div>
      <h3 className="mt-8 text-xl font-semibold">Key Points</h3>
      <ul className="mt-4 space-y-3 text-sm text-neutral-600">
        {keyPoints.map((k) => <li key={k} className="flex items-center gap-3"><CheckCircle2 className="fill-brand text-white" size={22} />{k}</li>)}
      </ul>
    </>
  );
}

function Lessons() {
  return (
    <>
      <h3 className="text-xl font-semibold">Explore the Modules</h3>
      <p className="mt-4 text-sm leading-7 text-neutral-600">Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.</p>
      <h4 className="mt-8 text-lg font-semibold">Lesson List</h4>
      <ul className="mt-5 space-y-6">
        {modules.map((m) => (
          <li key={m.t} className="flex gap-5">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-lime"><Cam /></span>
            <div><p className="text-sm font-medium">{m.t}</p><p className="mt-1 text-sm leading-6 text-neutral-600">{m.d}</p></div>
          </li>
        ))}
      </ul>
      <h4 className="mt-8 text-lg font-semibold">Lesson Content</h4>
      <p className="mt-3 text-sm leading-7 text-neutral-600">Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.</p>
      <h4 className="mt-8 text-lg font-semibold">Lesson Progress Tracking</h4>
      <p className="mt-3 text-sm leading-7 text-neutral-600">Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.</p>
      <div className="mt-5 rounded-2xl border border-neutral-300 p-5">
        <p className="text-sm">Learning Progress</p>
        <p className="mt-1 text-4xl font-medium">55%</p>
        <div className="mt-3 h-1.5 rounded-full bg-neutral-200"><div className="h-full w-[55%] rounded-full bg-lime" /></div>
      </div>
    </>
  );
}

function Reviews() {
  const [filter, setFilter] = useState<number | 0>(0);
  const max = Math.max(...ratingBars.map((r) => r.n));
  const list = filter ? reviews.filter((r) => r.stars === filter) : reviews;
  return (
    <>
      <h3 className="text-xl font-semibold">What Learners Are Saying</h3>
      <p className="mt-4 text-sm leading-7 text-neutral-600">Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.</p>
      <div className="mt-6 flex items-center gap-8 rounded-2xl border border-neutral-300 p-8">
        <div className="grid h-28 w-28 shrink-0 place-items-center rounded-xl bg-lime text-center"><div><p className="text-xs">Ratings</p><p className="text-4xl font-medium">4.7</p></div></div>
        <div className="flex-1 space-y-3">
          {ratingBars.map((r) => (
            <div key={r.s} className="flex items-center gap-4">
              <div className="h-1.5 flex-1 rounded-full bg-neutral-200"><div className="h-full rounded-full bg-lime" style={{ width: `${(r.n / max) * 100}%` }} /></div>
              <Stars n={r.s} /><span className="w-10 text-right text-sm">{r.n}</span>
            </div>
          ))}
        </div>
      </div>
      <h4 className="mt-8 text-lg font-semibold">Individual Reviews:</h4>
      <div className="mt-4 flex flex-wrap gap-3">
        <button onClick={() => setFilter(0)} className={`chip ${filter === 0 ? "chip-active" : ""}`}>All rating</button>
        {[5, 4, 3, 2, 1].map((n) => <button key={n} onClick={() => setFilter(n)} className={`chip ${filter === n ? "chip-active" : ""}`}><Star size={14} className="fill-current" />{n}</button>)}
      </div>
      <div className="mt-6 space-y-5">
        {list.map((r) => (
          <article key={r.name} className="rounded-2xl border border-neutral-300 p-7">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="h-11 w-11 rounded-full bg-neutral-300" />
                <div><p className="text-sm font-medium">{r.name}</p><p className="text-xs text-neutral-500">{r.role}</p></div>
              </div>
              <span className="text-xs text-neutral-500">a year ago</span>
            </div>
            <div className="mt-4"><Stars n={r.stars} /></div>
            <p className="mt-4 text-sm leading-7 text-neutral-600">{r.text}</p>
          </article>
        ))}
        {list.length === 0 && <p className="text-sm text-neutral-500">No reviews with this rating yet.</p>}
      </div>
    </>
  );
}

export default function CourseDetailsPage() {
  const [tab, setTab] = useState<Tab>("About");
  return (
    <>
      <div className="bg-grid pb-24">
        <Navbar />
        <div className="container-page mt-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold text-white md:text-4xl">Build Digital Asset: A Comprehensive Guide</h1>
              <p className="mt-1 font-medium text-white">Unlock the Power of Digital Creation with Expert Guidance</p>
              <p className="mt-6 text-white">by <Link href="/creators/1" className="text-lime">purepearl studio</Link></p>
            </div>
            <button className="btn-lime gap-2"><Share2 size={16} />Share</button>
          </div>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <span className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5"><BarChart3 size={16} className="text-brand" />Intermediate</span>
            <span className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5"><Star size={16} className="fill-brand text-brand" />4.8 (172 reviews)</span>
            <span className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5"><Users size={16} className="text-brand" />199 Students</span>
          </div>
        </div>
      </div>

      <div className="container-page grid gap-10 lg:grid-cols-[1fr_400px]">
        <div className="relative -mt-16 lg:col-start-1 lg:row-start-1">
          <div className="relative overflow-hidden rounded-3xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://picsum.photos/seed/instructor/900/560" alt="Course preview" className="h-[420px] w-full object-cover" />
            <button aria-label="Play preview" className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-white/40 backdrop-blur"><span className="grid h-14 w-14 place-items-center rounded-full bg-white/80"><Play className="fill-neutral-500 text-neutral-500" size={22} /></span></button>
          </div>
          <div className="mt-14 flex gap-3">
            {(["About", "Lessons", "Reviews"] as Tab[]).map((t) => <button key={t} onClick={() => setTab(t)} className={`chip ${tab === t ? "chip-active" : ""}`}>{t}</button>)}
          </div>
          <div className="mt-8">{tab === "About" ? <About /> : tab === "Lessons" ? <Lessons /> : <Reviews />}</div>
        </div>

        <aside className="-mt-16 hidden self-start lg:col-start-2 lg:row-start-1 lg:block">
          <div className="rounded-3xl border border-neutral-300 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-medium">112 Lessons (24 hours)</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[["01", "Introduction to Digital Assets", "12 mins"], ["02", "Design Principles for Impacts", "21 mins"], ["03", "Advanced Techniques in Digital Creation", "16 mins"]].map(([n, t, m]) => (
                <li key={n} className="flex gap-3"><span className="w-6">{n}</span><span className="flex-1">{t}</span><span className="text-brand">{m}</span></li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-neutral-600">99 more videos</p>
            <p className="mt-8 text-sm leading-7 text-neutral-600">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
            <p className="mt-6 text-brand"><span className="text-4xl font-semibold">$25</span><span className="text-sm">/lifetime</span></p>
            <button className="btn-lime mt-5 w-full">Enroll Now</button>
            <h4 className="mt-8 text-lg font-medium">This course include</h4>
            <ul className="mt-4 space-y-4 text-sm text-neutral-600">
              {[[FileText, "Learning Resources"], [Video, "Quality Lesson Videos"], [Award, "Certificate of Completion"], [MessageCircle, "Private Consultation"]].map(([I, t]) => {
                const Icon = I as typeof FileText;
                return <li key={t as string} className="flex items-center gap-3"><Icon size={18} className="text-brand" />{t as string}</li>;
              })}
            </ul>
            <hr className="my-6" />
            <div className="flex items-center gap-3"><span className="h-12 w-12 rounded-full bg-neutral-300" /><div><p className="font-medium">PureParl Studio</p><p className="text-sm text-neutral-500">Professional Creator</p></div></div>
            <p className="mt-6 text-sm leading-7 text-neutral-600">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
            <Link href="/creators/1" className="chip mt-5 border border-neutral-300 bg-white">See Full Profile</Link>
          </div>
        </aside>
      </div>
      <Footer />
    </>
  );
}
