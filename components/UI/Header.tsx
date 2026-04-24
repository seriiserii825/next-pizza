import Link from "next/link";

export default function Header() {
  interface IMenuItem {
    name: string;
    url: string;
  }
  const menu_items: IMenuItem[] = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Contacts",
      url: "/contacts",
    },
  ];
  const menu_links = menu_items.map((item) => (
    <Link key={item.name} href={item.url} className="font-medium hover:text-orange-700">
      {item.name}
    </Link>
  ));
  return (
    <header className="border-b border-orange-200 bg-amber-100">
      <div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">
        <Link href="#" className="text-xl font-bold">
          🍕 Pizza House
        </Link>

        <nav className="hidden gap-8 md:flex">{menu_links}</nav>

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
  );
}
