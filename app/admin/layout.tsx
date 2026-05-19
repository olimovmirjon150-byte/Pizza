"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    {
      name: "Все пиццы",
      href: "/admin/pizzas",
      icon: "🍕",
    },
    {
      name: "Создать",
      href: "/admin/create",
      icon: "➕",
    },
    {
      name: "Заказы",
      href: "/admin/applications",
      icon: "📦",
    },
    {
      name: "Категории",
      href: "/admin/categories",
      icon: "🏷️",
    },
    {
      name: "Создать категорию",
      href: "/admin/createCategory",
      icon: "➕",
    },
  ];

  return (
    <div className="flex bg-[#fff7f2] min-h-screen">

      {/* Sidebar */}
      <aside className="w-60 bg-white border-r border-orange-100 fixed left-0 top-0 h-screen p-5 flex flex-col">

        {/* Logo */}
        <div>
          <h3 className="text-2xl font-black text-orange-500">
            🍕 PIZZA SHOP
          </h3>

          <p className="text-gray-400 text-sm mt-1">
            Админ панель
          </p>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-2 mt-10">
          {menuItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl no-underline transition-all text-decoration-none ${
                  active
                    ? "bg-orange-500 text-white shadow-md"
                    : "text-gray-700 hover:bg-orange-50"
                }`}
              >
                <span className="text-lg">
                  {item.icon}
                </span>

                <span className="font-medium text-sm">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <button
          onClick={() => {
            localStorage.removeItem("pizzaAdmin");
            router.push("/");
          }}
          className="mt-2 bg-orange-500 text-white py-3 rounded-2xl! font-semibold hover:bg-orange-600 transition"
        >
          Выйти
        </button>
      </aside>

      {/* Content */}
      <main className="ml-60 w-full p-8">
        {children}
      </main>
    </div>
  );
}