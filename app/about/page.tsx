export default function Page() {
  return (
    <main className="max-w-6xl px-6 py-12 mx-auto">
      <section className="mb-14 grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-2 font-semibold tracking-wider text-orange-600 uppercase">About Us</p>
          <h1 className="text-4xl font-bold md:text-5xl">We Make Pizza With Love</h1>
          <p className="mt-5 text-lg text-stone-600">
            Pizza House is a warm and cozy place where fresh dough, rich tomato sauce, melted
            cheese, and quality ingredients come together.
          </p>
          <p className="mt-4 text-stone-600">
            Our goal is simple: to serve delicious pizza that brings people together. Every pizza is
            baked fresh and made with care.
          </p>
        </div>

        <div className="overflow-hidden shadow-xl rounded-3xl shadow-orange-100">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80"
            alt="Fresh Pizza"
            className="h-[360px] w-full object-cover"
          />
        </div>
      </section>

      <section className="mb-14 grid gap-6 md:grid-cols-3">
        <div className="p-6 bg-white shadow-xl rounded-3xl shadow-orange-100">
          <div className="mb-4 text-4xl">🔥</div>
          <h2 className="mb-2 text-xl font-bold">Freshly Baked</h2>
          <p className="text-stone-600">Every pizza is baked hot and fresh for the best taste.</p>
        </div>

        <div className="p-6 bg-white shadow-xl rounded-3xl shadow-orange-100">
          <div className="mb-4 text-4xl">🧀</div>
          <h2 className="mb-2 text-xl font-bold">Quality Ingredients</h2>
          <p className="text-stone-600">We use tasty cheese, fresh vegetables, and rich sauces.</p>
        </div>

        <div className="p-6 bg-white shadow-xl rounded-3xl shadow-orange-100">
          <div className="mb-4 text-4xl">❤️</div>
          <h2 className="mb-2 text-xl font-bold">Made With Care</h2>
          <p className="text-stone-600">Our pizza is prepared with attention, passion, and love.</p>
        </div>
      </section>

      <section className="p-8 rounded-3xl bg-amber-100 md:p-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-2 font-semibold tracking-wider text-orange-600 uppercase">Our Story</p>
          <h2 className="text-3xl font-bold md:text-4xl">A Cozy Place For Pizza Lovers</h2>
          <p className="mt-5 text-stone-600">
            Pizza House started with a simple idea: create a friendly place where everyone can enjoy
            warm, flavorful, and affordable pizza. Today, we continue to keep that same spirit in
            every order.
          </p>
        </div>
      </section>
    </main>
  );
}
