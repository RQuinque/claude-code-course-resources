import Link from "next/link";

export default async function PublicNotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <main className="flex flex-col gap-4 p-8">
      <p>Public note: {slug}</p>
      <nav className="flex gap-4 underline">
        <Link href="/">Startseite</Link>
      </nav>
    </main>
  );
}
