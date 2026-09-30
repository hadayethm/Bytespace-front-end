import Link from "next/link";
import AuthShell from "@/components/AuthShell";

export default function RegisterPage() {
  return (
    <AuthShell heading="Sign up and come in" text="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost">
      <p className="text-brand">Create an Account</p>
      <h1 className="mb-8 text-5xl font-semibold leading-tight">Welcome to ByteSpace</h1>
      <label className="mb-2 block text-sm">Full Name</label>
      <input placeholder="Jamie Davis" className="input mb-5" />
      <label className="mb-2 block text-sm">Email</label>
      <input type="email" placeholder="designer@example.com" className="input mb-5" />
      <label className="mb-2 block text-sm">Password</label>
      <input type="password" placeholder="********" className="input" />
      <div className="mt-6 flex justify-end"><button className="btn-lime">Continue</button></div>
      <p className="mt-16 text-center text-neutral-500">Already have an account? <Link href="/login" className="text-brand">Login</Link></p>
    </AuthShell>
  );
}
