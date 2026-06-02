"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

type PropertyType = {
  id: string;
  title: string;
  price: number;
  type: string;
  location: string;
  rooms: number;
  bathrooms: number;
  area: number;
  images: string[];
};

const Section = () => {
  const [properties, setProperties] = useState<PropertyType[]>([]);

  useEffect(() => {
    getProperties();
  }, []);

  const getProperties = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/properties"
      );

      setProperties(res.data.slice(0, 3));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="relative overflow-hidden bg-indigo-950 px-6 py-28 text-white">
      {/* LIGHT EFFECT */}
      <div className="absolute left-0 top-0 h-75 w-75 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-75 w-75 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl">
              Popular Properties
            </span>

            <h2 className="mt-6 max-w-2xl text-4xl font-black leading-tight md:text-6xl">
              Explore The Most
              <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Trending Homes
              </span>
            </h2>
          </div>

          <Link href="/properties">
            <button className="rounded-2xl! border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/10">
              View All Properties
            </button>
          </Link>
        </div>

        {/* CARDS */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={property.images?.[0]}
                  alt={property.title}
                  className="h-70 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

                <div className="absolute left-5 top-5 rounded-2xl bg-cyan-400/20 px-4 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-xl">
                  ${property.price.toLocaleString()}
                </div>

                <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm backdrop-blur-xl">
                  {property.type}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">
                      {property.title}
                    </h3>

                    <p className="mt-2 text-gray-400">
                      📍 {property.location}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/5 px-4 py-2 text-sm text-cyan-300">
                    Featured
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-gray-300">
                  <span>🛏 {property.rooms} Rooms</span>
                  <span>🛁 {property.bathrooms} Baths</span>
                  <span>📐 {property.area}m²</span>
                </div>

                <Link href={`/properties/${property.id}`}>
                  <button className="mt-6! w-full rounded-2xl! bg-linear-to-r from-cyan-400 to-blue-600 py-4 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;