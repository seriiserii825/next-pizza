export default function Page() {
  return (
    <main className="max-w-6xl px-6 py-12 mx-auto">
      <section className="mb-12 text-center">
        <p className="mb-2 font-semibold tracking-wider text-orange-600 uppercase">Contact Us</p>
        <h1 className="text-4xl font-bold md:text-5xl">Get In Touch</h1>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-stone-600">
          Have a question or want to order your favorite pizza? We are happy to help.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="p-8 bg-white shadow-xl rounded-3xl shadow-orange-100">
          <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>

          <div className="space-y-5 text-stone-600">
            <p>
              <span className="font-semibold text-stone-900">Address:</span>
              25 Pizza Street, Food City
            </p>

            <p>
              <span className="font-semibold text-stone-900">Phone:</span>
              +1 234 567 890
            </p>

            <p>
              <span className="font-semibold text-stone-900">Email:</span>
              info@pizzahouse.com
            </p>

            <p>
              <span className="font-semibold text-stone-900">Working Hours:</span>
              10:00 AM - 11:00 PM
            </p>
          </div>
        </div>

        <form className="p-8 bg-white shadow-xl rounded-3xl shadow-orange-100">
          <h2 className="mb-6 text-2xl font-bold">Send Message</h2>

          <div className="mb-4">
            <label className="block mb-2 font-semibold" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 border border-orange-200 outline-none rounded-xl bg-orange-50 focus:border-orange-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold" htmlFor="email">
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
            <label className="block mb-2 font-semibold" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your message"
              className="w-full px-4 py-3 border border-orange-200 outline-none resize-none rounded-xl bg-orange-50 focus:border-orange-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 font-semibold text-white bg-orange-600 rounded-xl hover:bg-orange-700"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
