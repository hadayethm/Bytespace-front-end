import Link from "next/link";
import { LogoMark } from "./Logo";
import Image from "next/image"


export default function AuthShell({ heading, text, children }: { heading: string; text: string; children: React.ReactNode }) {
  return (
    <main className="bg-grid min-h-screen">
      <div className="container-page grid gap-10 py-8 lg:grid-cols-2 lg:items-start">
        <div>
          <Link href="/"><LogoMark /></Link>
          <h2 className="mt-14 text-xl font-semibold text-white">{heading}</h2>
          <p className="mt-3 max-w-md text-white/90">{text}</p>
          <div className="relative mt-20 hidden h-72 lg:block">
           
            <Image src="/login.png" alt="ByteSpace" width={1400} height={400}   className="h-[500px] w-auto" />
          
          </div>
        </div>
        <div className="rounded-[32px] bg-white p-10 shadow-xl lg:mt-14">{children}</div>
      </div>
    </main>
  );
}
