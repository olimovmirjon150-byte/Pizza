"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import MainHeader from "../_components/MainHeader";

export default function PropertiesPage() {
  return (
    <div className="bg-indigo-950">
        <MainHeader />
    <section className="min-h-screen bg-indigo-950 px-6 pb-24 pt-36 text-white">
      
      {/* TOP LIGHT */}
      <div className="absolute left-0 top-0 h-75 w-75 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        
        {/* HEADER */}
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          
          <div>
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl">
              Premium Listings
            </span>

            <h1 className="mt-6 text-5xl font-black md:text-6xl">
              Explore Our
              <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Properties
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Find luxury apartments, villas, and modern homes
              across Uzbekistan with the best prices.
            </p>
          </div>

          {/* SEARCH */}
          <div className="flex w-full max-w-xl items-center gap-4 rounded-[28px] border border-white/10 bg-white/5 p-3 backdrop-blur-2xl">
            
            <div className="flex flex-1 items-center gap-3 px-4">
              <Search className="text-gray-400" size={20} />

              <input
                type="text"
                placeholder="Search properties..."
                className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        {/* FILTERS */}
        <div className="mt-14 flex flex-wrap items-center gap-4">
          
          {[
            "All",
            "Apartment",
            "Villa",
            "House",
            "Luxury",
            "Rent",
            "Sale",
          ].map((item, i) => (
            <button
              key={i}
              className={`rounded-2xl! px-6 py-3 text-sm font-medium transition ${
                i === 0
                  ? "bg-linear-to-r from-cyan-400 to-blue-600 text-white"
                  : "border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* PROPERTIES GRID */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30"
            >
              
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
                  alt=""
                  className="h-70 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

                {/* PRICE */}
                <div className="absolute left-5 top-5 rounded-2xl bg-cyan-400/20 px-4 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-xl">
                  $450,000
                </div>

                {/* TYPE */}
                <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm backdrop-blur-xl">
                  Villa
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                
                <div className="flex items-start justify-between">
                  
                  <div>
                    <h2 className="text-2xl font-bold">
                      Modern Villa
                    </h2>

                    <p className="mt-2 text-gray-400">
                      📍 Tashkent, Yunusobod
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/5 px-4 py-2 text-sm text-cyan-300">
                    Featured
                  </div>
                </div>

                {/* FEATURES */}
                <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-gray-300">
                  
                  <p>🛏 4 Rooms</p>
                  <p>🛁 2 Baths</p>
                  <p>📐 240m²</p>
                </div>

                {/* BUTTON */}
                <button className="mt-6! w-full rounded-2xl! bg-linear-to-r from-cyan-400 to-blue-600 py-4 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}