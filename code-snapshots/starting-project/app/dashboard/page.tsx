import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="flex flex-col gap-4 p-8">
      <p>Dashboard</p>
      <nav className="flex gap-4 underline">
        <Link href="/">Startseite</Link>
        <Link href="/notes/1">Notiz öffnen</Link>
        <Link href="/authenticate">Logout / Login</Link>
      </nav>
    </main>
  );
}
