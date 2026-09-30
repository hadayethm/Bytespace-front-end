export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 36" className={className} aria-hidden>
      <path d="M2 4a4 4 0 0 1 4-4h2a2 2 0 0 1 2 2v9c2-2 5-3 8-3 6 0 10 4 10 10s-4 10-10 10c-3 0-5-1-7-2l-1 2H4a2 2 0 0 1-2-2V4Z" fill="#D6FF1F" />
    </svg>
  );
}
export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-1.5">
      <LogoMark />
      <span className={`text-xl font-bold ${dark ? "text-ink" : "text-white"}`}>ByteSpace</span>
    </span>
  );
}
