import Link from "next/link";
import { BarChart3, Star } from "lucide-react";
import type { Course } from "@/lib/data";

const avatarColors = ["#f9a8b8", "#f4c56a", "#8a5a44", "#9db4c0"];

export function Avatars() {
  return (
    <div className="flex items-center">
      {avatarColors.map((c, i) => (
        <span key={i} className="-ml-2 h-7 w-7 rounded-full border-2 border-white first:ml-0" style={{ background: c }} />
      ))}
      <span className="-ml-2 grid h-7 w-7 place-items-center rounded-full bg-lime text-[10px] font-medium">26+</span>
    </div>
  );
}

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/courses/${course.id}`} className="block rounded-3xl border border-neutral-300 bg-white p-4 transition hover:shadow-lg">
      <div className="relative overflow-hidden rounded-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={course.image} alt={course.title} className="h-48 w-full object-cover" />
        <div className="absolute inset-x-2 bottom-2 flex justify-between gap-1 text-[11px] text-neutral-700">
          {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((t) => (
            <span key={t} className="rounded-full bg-white/70 px-3 py-1 backdrop-blur">{t}</span>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-2">
        <h3 className="truncate text-lg font-semibold">{course.title}</h3>
        <span className="flex items-center gap-1 text-neutral-500">{course.rating}<Star size={16} className="fill-neutral-300 text-neutral-300" /></span>
      </div>
      <p className="text-xs text-neutral-500">by <span className="text-brand">{course.creator}</span></p>
      <div className="mt-4 flex items-center gap-3">
        <span className="flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1.5 text-xs"><BarChart3 size={14} />{course.level}</span>
        <Avatars />
      </div>
      <p className="mt-4 text-brand"><span className="text-xl font-semibold">${course.price}</span><span className="text-xs">/lifetime</span></p>
    </Link>
  );
}
