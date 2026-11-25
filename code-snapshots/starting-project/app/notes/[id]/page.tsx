import Link from "next/link";

export default async function NotePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <main className="flex flex-col gap-4 p-8">
      <p>Note editor: {id}</p>
      <nav className="flex gap-4 underline">
        <Link href="/dashboard">Zurück zum Dashboard</Link>
        <Link href="/p/demo">Öffentliche Ansicht</Link>
      </nav>
    </main>
  );
}
