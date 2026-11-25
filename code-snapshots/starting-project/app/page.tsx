import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 p-8">
      <p>Landing page</p>
      <div className="flex gap-3">
        <Link
          href="/authenticate"
          className="rounded bg-foreground px-4 py-2 text-background"
        >
          Login
        </Link>
        <Link href="/dashboard" className="rounded border px-4 py-2">
          Dashboard
        </Link>
      </div>
    </main>
  );
}
