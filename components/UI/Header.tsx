"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site_config } from "@/config/site.config";

export default function Header() {
  const pathname = usePathname();
  const menu_links = site_config.menu_items.map((item) => {
    const is_active = pathname === item.url;
    const default_classes = "text-sm font-semibold";
    const active_classes = "text-orange-900";
    const current_classes = is_active ? active_classes : "text-stone-700 hover:text-orange-700";
    return (
      <Link key={item.url} href={item.url} className={`${default_classes} ${current_classes}`}>
        {item.name}
      </Link>
    );
  });
  return (
    <header className="border-b border-orange-200 bg-amber-100">
      <div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">
        <Link href="#" className="text-xl font-bold">
          🍕 Pizza House
        </Link>

        <nav className="hidden gap-8 md:flex">{menu_links}</nav>

        <div className="flex gap-3">
          <Link
            href="/auth/login"
            className="px-4 py-2 text-sm font-semibold text-orange-900 bg-orange-200 rounded-xl"
          >
            Login
          </Link>
          <Link
            href="/auth/register"
            className="px-4 py-2 text-sm font-semibold text-white bg-orange-600 rounded-xl"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
