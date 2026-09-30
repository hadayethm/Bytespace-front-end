import Link from "next/link";
import AuthShell from "@/components/AuthShell";

export default function LoginPage() {
  return (
    <AuthShell heading="Sign in with ease" text="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.">
      <p className="text-brand">Sign In</p>
      <h1 className="mb-8 text-5xl font-semibold">Welcome Back</h1>
      <label className="mb-2 block text-sm">Email</label>
      <input type="email" placeholder="designer@example.com" className="input mb-6" />
      <label className="mb-2 block text-sm">Password</label>
      <input type="password" placeholder="********" className="input" />
      <div className="mt-6 flex justify-end"><button className="btn-lime">Sign In</button></div>
      <div className="my-10 flex items-center gap-4 text-sm text-neutral-500"><hr className="flex-1" />or<hr className="flex-1" /></div>
      <div className="flex justify-center gap-4">
        {["f", "G"].map((s) => <button key={s} className="grid h-16 w-16 place-items-center rounded-2xl border border-neutral-200 text-2xl font-bold">{s}</button>)}
      </div>
      <p className="mt-16 text-center text-neutral-500">New user? <Link href="/register" className="text-brand">Create an account</Link></p>
    </AuthShell>
  );
}
