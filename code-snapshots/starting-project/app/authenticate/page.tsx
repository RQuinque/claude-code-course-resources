import Link from "next/link";

export default function AuthenticatePage() {
  return (
    <main className="flex flex-col gap-4 p-8">
      <p>Authenticate (email + password)</p>
      <nav className="flex gap-4 underline">
        <Link href="/">Zurück zur Startseite</Link>
        <Link href="/dashboard">Zum Dashboard</Link>
      </nav>
    </main>
  );
}
