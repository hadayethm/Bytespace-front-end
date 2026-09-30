import Link from "next/link";
import Image from "next/image"
import { Search, Palette, Code2, Laptop, Briefcase, Megaphone, Camera, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard, { Avatars } from "@/components/CourseCard";
import { categories, courses, moreCategories } from "@/lib/data";

const paths = [
  { n: "Design", I: Palette }, { n: "Development", I: Code2 }, { n: "IT & Software", I: Laptop },
  { n: "Business", I: Briefcase }, { n: "Marketing", I: Megaphone }, { n: "Photography", I: Camera },
];
const testimonials = [
  {  img: "/test-1.png", n: "Sarah M.", r: "Enthusiastic Learner", t: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning." },
  {  img: "/test-2.png", n: "James L.", r: "Lifelong Learner", t: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development." },
  {  img: "/test-3.png",  n: "Alex B.", r: "Inspired Creator", t: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally." },
];

export default function Home() {
  return (
    <>
      <section className="bg-grid overflow-hidden pb-[125px]">
        <Navbar />
        <div className="container-page mt-[55px] text-center">
          <h1 className="mx-auto max-w-4xl text-4xl font-semibold text-white leading-[40px] md:text-7xl md:leading-[90px]">Get Access to Hundreds Courses Available</h1>
          <p className="mx-auto mt-[35px] max-w-[950px] text-[17px] text-[#E5E6E8] font-light">Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
          <form action="/courses" className=" flex justify-center items-center gap-2 mt-[55px]">
            <div className="  flex items-center gap-2 rounded-full bg-white w-[400px] h-[55px]">
              <Search size={16} className="ml-4 text-neutral-500" />
            <input placeholder="Course, topic, creator" className="flex-1 bg-transparent px-2 text-[16px] outline-none" />
            </div>
            <button className="btn-lime px-8 py-4 text-[16px] text-[#242528]">Search</button>
          </form>

          <div className="relative mx-auto mt-10 h-[100px] sm:h-[150px] md:h-[200px] lg:h-[290px]">
          <div className="absolute left-3 right-3 top-[-20px] sm:left-6 sm:right-6 sm:top-[-30px] md:left-10 md:right-10 md:top-[-40px] lg:left-16 lg:right-16 z-40">
            <Image src="/hero-main.png" alt="ByteSpace" width={1400}height={700}className="h-auto"priority/>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-[-40px] z-0">
  
            <Image src="/l.png" alt="ByteSpace"width={700} height={700} className="absolute hidden lg:block left-[-90px] bottom-[-85px] w-[140px] h-auto
               sm:left-[-20px] sm:w-[200px]
               md:left-[-30px] md:w-[280px]
               lg:left-[-92px] lg:w-[360px]"/>
           <Image src="/r.png" alt="ByteSpace" width={700}height={700} className="absolute hidden lg:block right-[-90px] bottom-[-85px] w-[140px] h-auto
               sm:right-[-20px] sm:w-[200px]
               md:right-[-30px] md:w-[280px]
               lg:right-[-150px] lg:w-[360px]"/>
          </div>
    </div>
         
        </div>
      </section>
      <section className="container-page flex flex-wrap items-center justify-between gap-6 py-[80px]">
  {[1, 2, 3, 4, 5].map((i) => (
    <Image
      key={i}
      src={`/logo${i}.png`}
      alt={`Logo ${i}`}
      width={140}
      height={40}
      className="h-auto w-[100px] object-contain sm:w-[120px] md:w-[140px]"
    />
  ))}
</section>

      <section className="container-page py-12 text-center">
        <h2 className="text-4xl font-semibold">Discover Your Passion,<br />Build Your Skills</h2>
        <p className="mx-auto mt-5 max-w-3xl text-sm text-neutral-500">At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[...categories, ...moreCategories].map((c, i) => <Link key={c} href="/courses" className={`chip ${i === 0 ? "chip-active" : ""}`}>{c}</Link>)}
          <Link href="/courses" className="chip bg-transparent text-brand">+ More</Link>
        </div>
        <div className="mt-10 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => <CourseCard key={c.id} course={c} />)}
        </div>
      </section>

      <section className="container-page py-12 text-center">
        <h2 className="text-3xl font-semibold">Explore Diverse Learning Paths at Bytespace</h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm text-neutral-500">We believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone.</p>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-6">
          {paths.map(({ n, I }) => (
            <Link key={n} href="/courses" className="flex flex-col items-center gap-4 rounded-2xl border border-neutral-300 px-4 py-6 text-sm hover:shadow-md">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-lime/60"><I size={18} className="text-brand" /></span>{n}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-lime/20 to-white py-16">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div className="mt-[80px]">
            <h2 className="text-[44px] leading-[55px] font-semibold">Your Path to Professional Growth Starts Here!</h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-neutral-600">Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey.</p>
            <div className="mt-8 flex gap-10">
              {[["12K", "Students"], ["70+", "Courses"], ["16", "Creators"]].map(([n, l]) => <div key={l}><p className="text-3xl font-semibold text-brand">{n}</p><p className="text-sm text-neutral-500">{l}</p></div>)}
            </div>
          </div>
          <div className="mx-auto">
             <Image src="/right.png" alt="ByteSpace" width={1400}height={700}className="h-auto"priority/>

          </div>
        </div>
        <div className="container-page grid  gap-10 md:grid-cols-2">
          <div className="relative mx-auto">
             <Image src="/left.png" alt="ByteSpace" width={1400}height={700}className="h-auto"priority/>
          </div>
          <div className="mt-[60px]">
            <h2 className="text-[44px] leading-[55px] font-semibold">Create & Manage Courses Easily.</h2>
            <p className="mt-[35px] text-[16px] text-neutral-600"><b>ByteSpace</b> supports individuals or entities in the creation, publication, and administration of educational courses.</p>
            <ul className="mt-6 space-y-3 text-[18px]">
              {["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"].map((t) => <li key={t} className="flex items-center gap-3"><span className="grid h-5 w-5 place-items-center rounded-full bg-brand"><Check size={12} className="text-white" /></span>{t}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className=" py-20 text-center text-white bg-no-repeat bg-cover bg-center"  style={{ backgroundImage: "url('/cta-bg.png')" }}>
        <div className="container-page">
          <h2 className="text-4xl font-semibold">Unlock Your Potential as a<br />Creator with ByteSpace</h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/90">Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.</p>
          <Link href="/register" className="btn-lime mt-8">Join as Creator</Link>
        </div>
      </section>

      <section className="container-page py-20" style={{ backgroundImage: "url('/test-bg.png')" }}>
        <div className="grid gap-8 md:grid-cols-2">
          <h2 className="self-end text-4xl font-semibold">Discover What Our<br />Community Is Saying</h2>
          <p className="text-sm leading-7 text-neutral-600">At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.n} className="rounded-3xl border border-neutral-200 p-7 shadow-sm">
               <Image
        src={t.img}
        alt={t.n}
        width={56}
        height={56}
        className="h-14 w-14 rounded-full object-cover"
      />
              <p className="mt-4 font-semibold">{t.n}</p><p className="text-xs text-brand">{t.r}</p>
              <blockquote className="mt-4 text-sm leading-7 text-neutral-600">“{t.t}”</blockquote>
            </figure>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
