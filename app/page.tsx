import Link from "next/link";

export default function Home() {

  return (

    <main className="min-h-screen">

      <section className="mx-auto max-w-6xl px-6 py-24">

        <p className="mb-4">
          🐂 BULLHUB
        </p>

        <h1 className="max-w-3xl text-6xl font-bold">
          Trade the move,
          <br />
          not the noise.
        </h1>

        <p className="mt-6 max-w-2xl text-lg">
          Real-time crypto prices,
          market movement and analytics
          in one focused interface.
        </p>

        <div className="mt-8">

          <Link
            href="/dashboard"
            className="rounded-xl border px-6 py-3"
          >
            Open Dashboard
          </Link>

        </div>

      </section>

    </main>

  );
}
