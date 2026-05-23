"use client";

import Link from "next/link";
import { Menu, Search, HousePlus } from "lucide-react";

export default function Header() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070B14] text-white">
      {/* BACKGROUND IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* GRADIENT LIGHT */}
      <div className="absolute left-1/2 -top-50 h-125 w-125 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* NAVBAR */}
      <header className="relative z-50 mx-auto flex w-[92%] max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl mt-6">
        
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/30">
            <HousePlus size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-black tracking-tight">
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

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-6 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-lg">
          #1 Real Estate Platform in Uzbekistan
        </span>

        <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">
          Discover Your
          <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {" "}
            Perfect Home
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          Buy, rent, and explore premium properties across Uzbekistan
          with modern search and smart filtering.
        </p>

        {/* SEARCH BOX */}
        <div className="mt-12 flex w-full max-w-5xl flex-col gap-4 rounded-[30px] border border-white/10 bg-white/5 p-5 backdrop-blur-2xl lg:flex-row lg:items-center">
          
          <div className="flex-1">
            <p className="mb-2 text-sm text-gray-400">Location</p>
            <input
              type="text"
              placeholder="Search city or district"
              className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
            />
          </div>

          <div className="hidden h-14 w-px bg-white/10 lg:block" />

          <div className="flex-1">
            <p className="mb-2 text-sm text-gray-400">Property Type</p>
            <select className="w-full bg-transparent text-white outline-none">
              <option className="bg-[#111827]">Apartment</option>
              <option className="bg-[#111827]">House</option>
              <option className="bg-[#111827]">Villa</option>
            </select>
          </div>

          <div className="hidden h-14 w-px bg-white/10 lg:block" />

          <div className="flex-1">
            <p className="mb-2 text-sm text-gray-400">Price Range</p>
            <input
              type="text"
              placeholder="$500 - $5000"
              className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
            />
          </div>

        <Link href="/properties">
          <button className="flex h-16 w-16 items-center justify-center rounded-2xl! bg-linear-to-r from-cyan-400 to-blue-600 shadow-xl shadow-cyan-500/30 transition hover:scale-105">
            <Search />
          </button>
        </Link>
        </div>
      </div>
    </section>
  );
}