export default function Footer() {
  return (
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
  );
}
