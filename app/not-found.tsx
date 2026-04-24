import Link from "next/link";
export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-16">
      <section className="max-w-2xl text-center">
        <div className="mb-6 text-7xl">🍕</div>

        <p className="mb-2 font-semibold tracking-wider text-orange-600 uppercase">404 Error</p>

        <h1 className="text-4xl font-bold text-stone-900 md:text-6xl">Page Not Found</h1>

        <p className="max-w-lg mx-auto mt-5 text-lg text-stone-600">
          Oops! The page you are looking for does not exist or has been moved.
        </p>

        <div className="flex flex-col justify-center mt-8 gap-4 sm:flex-row">
          <Link
            href="/"
            className="px-6 py-3 font-semibold text-white bg-orange-600 rounded-xl hover:bg-orange-700"
          >
            Back to Home
          </Link>
          <Link
            href="/contacts"
            className="px-6 py-3 font-semibold text-orange-900 bg-orange-200 rounded-xl hover:bg-orange-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
