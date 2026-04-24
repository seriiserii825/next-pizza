export default function Register() {
  return (
    <main className="flex flex-1 items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <span className="text-5xl">🍕</span>
          <h1 className="mt-4 text-3xl font-bold text-stone-900">Create account</h1>
          <p className="mt-2 text-stone-500">Join Pizza House and start ordering</p>
        </div>

        <div className="p-8 bg-white shadow-2xl rounded-3xl shadow-orange-100/80">
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-1.5 text-sm font-semibold text-stone-700">
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 text-sm border border-stone-200 outline-none rounded-xl bg-stone-50 focus:bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1.5 text-sm font-semibold text-stone-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 text-sm border border-stone-200 outline-none rounded-xl bg-stone-50 focus:bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1.5 text-sm font-semibold text-stone-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 text-sm border border-stone-200 outline-none rounded-xl bg-stone-50 focus:bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
              />
            </div>

            <div>
              <label htmlFor="confirm-password" className="block mb-1.5 text-sm font-semibold text-stone-700">
                Confirm password
              </label>
              <input
                id="confirm-password"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 text-sm border border-stone-200 outline-none rounded-xl bg-stone-50 focus:bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 font-semibold text-white bg-orange-600 rounded-xl hover:bg-orange-700 active:scale-[0.98] transition-all shadow-lg shadow-orange-200"
            >
              Create account
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-stone-500">
            Already have an account?{" "}
            <a href="/auth/login" className="font-semibold text-orange-600 hover:text-orange-700">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
