"use client";

import Link from "next/link";
import { Menu, Search, HousePlus } from "lucide-react";

const MainHeader = () => {
  return (
    <header className="relative z-50 mx-auto flex w-[92%] max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl mt-6">
        
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/30">
            <HousePlus size={24} className="text-white" />
          </div>

          <div>
            <h1 className="text-2xl text-white font-black tracking-tight">
              NestUz
            </h1>
            <p className="text-xs text-gray-400">
              Find Your Dream Home
            </p>
          </div>
        </div>

        {/* NAV LINKS */}
        <nav className="hidden lg:flex">
  <ul className="flex items-center gap-10">
    
    <li>
      <Link
        href="/"
        className="group text-decoration-none relative text-sm font-medium text-gray-300! transition hover:text-white"
      >
        Home

        <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
      </Link>
    </li>

    <li>
      <Link
        href="/properties"
        className="group text-decoration-none relative text-sm font-medium text-gray-300! transition hover:text-white"
      >
        Properties

        <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
      </Link>
    </li>

    <li>
      <Link
        href="/contact"
        className="group text-decoration-none relative text-sm font-medium text-gray-300! transition hover:text-white"
      >
        Contact

        <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
      </Link>
    </li>

  </ul>
</nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          <button className="hidden rounded-full! border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10 md:block">
            Login
          </button>

          <button className="flex items-center gap-2 rounded-full! bg-linear-to-r from-cyan-400 to-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-105">
            Add Property
          </button>

          <button className="flex h-11 w-11 items-center justify-center rounded-full! border border-white/10 bg-white/5 lg:hidden">
            <Menu size={20} />
          </button>
        </div>
      </header>
  );
};

export default MainHeader;