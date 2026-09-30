import Image from "next/image";
import Link from "next/link";

const cols = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-200">
      <div className="container-page grid gap-10 py-16 lg:grid-cols-2">
        <div>
           <Image
    src="/footer-logo.png"
    alt="ByteSpace"
    width={180}
    height={50}
    className="h-auto w-[180px]"
  />
          <p className="mt-3 text-sm text-neutral-600">Stay Up to date with our latest features and releases by joining our newsletter.</p>
          <div className="mt-8 flex gap-4">
            <input placeholder="Enter your email" className="w-full max-w-sm rounded-full border border-neutral-300 px-6 py-4 text-sm outline-none focus:border-brand" />
            <button className="btn-lime px-8">Search</button>
          </div>
          <p className="mt-4 max-w-md text-xs text-neutral-600">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
        </div>
        <div className="grid grid-cols-3 gap-6 text-sm text-neutral-700">
          {cols.map((c, i) => (
            <ul key={i} className="space-y-4">
              {c.map((l) => <li key={l}><Link href="#" className="hover:text-brand">{l}</Link></li>)}
            </ul>
          ))}
        </div>
      </div>
      <div className="container-page flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 py-6 text-xs text-neutral-600">
        <p>@ 2023 ByteSpace. All rights reserved.</p>
        <div className="flex gap-6"><Link href="#">Privacy Policy</Link><Link href="#">Terms of Service</Link><Link href="#">Cookies Settings</Link></div>
      </div>
    </footer>
  );
}
