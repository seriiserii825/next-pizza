export default function Home() {
  return (
    <>
      <header className="border-b border-orange-200 bg-amber-100">
        <div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">
          <a href="#" className="text-xl font-bold">
            🍕 Pizza House
          </a>

          <nav className="hidden gap-8 md:flex">
            <a href="#" className="font-medium text-orange-700">
              Menu
            </a>
            <a href="#" className="font-medium hover:text-orange-700">
              About
            </a>
            <a href="#" className="font-medium hover:text-orange-700">
              Contact
            </a>
          </nav>

          <div className="flex gap-3">
            <a
              href="#"
              className="px-4 py-2 text-sm font-semibold text-orange-900 bg-orange-200 rounded-xl"
            >
              Login
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm font-semibold text-white bg-orange-600 rounded-xl"
            >
              Sign Up
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl px-6 py-12 mx-auto">
        <section className="flex flex-col mb-10 gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 font-semibold tracking-wider text-orange-600 uppercase">
              Fresh Pizza
            </p>
            <h1 className="text-4xl font-bold md:text-5xl">Choose Your Favorite Pizza</h1>
            <p className="max-w-xl mt-4 text-lg text-stone-600">
              Hot, cheesy, and freshly baked pizza with delicious toppings.
            </p>
          </div>

          <a
            href="#"
            className="px-6 py-3 font-semibold text-white bg-red-600 shadow-lg w-fit rounded-2xl shadow-red-200"
          >
            Add Pizza
          </a>
        </section>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article className="overflow-hidden bg-white shadow-xl rounded-3xl shadow-orange-100">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80"
              alt="Margherita Pizza"
              className="object-cover w-full h-56"
            />

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-2xl font-bold">Margherita</h2>
                <span className="px-3 py-1 text-sm font-bold text-orange-700 bg-orange-100 rounded-full">
                  $12
                </span>
              </div>

              <p className="mb-5 text-stone-600">
                Classic pizza with tomato sauce, mozzarella, and fresh basil.
              </p>

              <h3 className="mb-2 font-bold">Ingredients:</h3>
              <ul className="pl-5 mb-6 list-disc space-y-1 text-stone-700">
                <li>Mozzarella cheese</li>
                <li>Tomato sauce</li>
                <li>Fresh basil</li>
              </ul>

              <button className="w-full py-3 font-semibold text-white bg-orange-600 rounded-xl hover:bg-orange-700">
                Order Now
              </button>
            </div>
          </article>

          <article className="overflow-hidden bg-white shadow-xl rounded-3xl shadow-orange-100">
            <img
              src="https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=900&q=80"
              alt="Pepperoni Pizza"
              className="object-cover w-full h-56"
            />

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-2xl font-bold">Pepperoni</h2>
                <span className="px-3 py-1 text-sm font-bold text-orange-700 bg-orange-100 rounded-full">
                  $15
                </span>
              </div>

              <p className="mb-5 text-stone-600">
                Spicy pepperoni pizza with melted cheese and rich tomato sauce.
              </p>

              <h3 className="mb-2 font-bold">Ingredients:</h3>
              <ul className="pl-5 mb-6 list-disc space-y-1 text-stone-700">
                <li>Pepperoni</li>
                <li>Mozzarella cheese</li>
                <li>Tomato sauce</li>
              </ul>

              <button className="w-full py-3 font-semibold text-white bg-orange-600 rounded-xl hover:bg-orange-700">
                Order Now
              </button>
            </div>
          </article>

          <article className="overflow-hidden bg-white shadow-xl rounded-3xl shadow-orange-100">
            <img
              src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=80"
              alt="Vegetarian Pizza"
              className="object-cover w-full h-56"
            />

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-2xl font-bold">Vegetarian</h2>
                <span className="px-3 py-1 text-sm font-bold text-orange-700 bg-orange-100 rounded-full">
                  $14
                </span>
              </div>

              <p className="mb-5 text-stone-600">
                Colorful pizza with vegetables, cheese, and aromatic herbs.
              </p>

              <h3 className="mb-2 font-bold">Ingredients:</h3>
              <ul className="pl-5 mb-6 list-disc space-y-1 text-stone-700">
                <li>Bell pepper</li>
                <li>Mushrooms</li>
                <li>Olives</li>
              </ul>

              <button className="w-full py-3 font-semibold text-white bg-orange-600 rounded-xl hover:bg-orange-700">
                Order Now
              </button>
            </div>
          </article>
        </section>
      </main>
      <footer className="mt-auto border-t border-orange-200 bg-amber-100">
        <div className="max-w-6xl px-6 py-10 mx-auto grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-xl font-bold">🍕 Pizza House</h3>
            <p className="text-sm text-stone-600">
              Freshly baked pizza made with quality ingredients and warm flavors.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Quick Links</h4>
            <ul className="text-sm space-y-2 text-stone-600">
              <li>
                <a href="#" className="hover:text-orange-700">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-700">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-700">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Contact</h4>
            <ul className="text-sm space-y-2 text-stone-600">
              <li>Email: info@pizzahouse.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Open: 10:00 AM - 11:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="py-4 text-sm text-center border-t border-orange-200 text-stone-500">
          © 2026 Pizza House. All rights reserved.
        </div>
      </footer>
    </>
  );
}
