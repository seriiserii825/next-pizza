export default function Login() {
  return (
    <main className="max-w-md px-6 py-12 mx-auto">
      <section className="p-8 bg-white shadow-xl rounded-3xl shadow-orange-100">
        <p className="mb-2 font-semibold tracking-wider text-orange-600 uppercase">Welcome Back</p>

        <h1 className="mb-6 text-4xl font-bold text-stone-900">Login</h1>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 border border-orange-200 outline-none rounded-xl bg-orange-50 focus:border-orange-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 font-semibold">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Your password"
              className="w-full px-4 py-3 border border-orange-200 outline-none rounded-xl bg-orange-50 focus:border-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 font-semibold text-white bg-orange-600 rounded-xl hover:bg-orange-700"
          >
            Login
          </button>
        </form>
      </section>
    </main>
  );
}
