"use client";

import axios from "axios";
import {
  Search,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import MainHeader from "../_components/MainHeader";
import Link from "next/link";

type PropertyType = {
  id: string;
  title: string;
  price: number;
  type: string;
  status: string;
  location: string;
  rooms: number;
  bathrooms: number;
  area: number;
  images: string[];
};

export default function PropertiesPage() {
  const [properties, setProperties] = useState<
    PropertyType[]
  >([]);

  const [filteredProperties, setFilteredProperties] =
    useState<PropertyType[]>([]);

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProperties();
  }, []);

  // GET PROPERTIES
  const getProperties = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        "http://localhost:4000/properties"
      );

      setProperties(res.data);

      setFilteredProperties(res.data);
    } catch (error) {
      console.log(error);

      alert("Failed to fetch properties");
    } finally {
      setLoading(false);
    }
  };

  // SEARCH
  useEffect(() => {
    const filtered = properties.filter((property) =>
      property.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    setFilteredProperties(filtered);
  }, [search, properties]);

  return (
    <div className="bg-indigo-950">
      
      <MainHeader />

      <section className="relative min-h-screen overflow-hidden bg-indigo-950 px-6 pb-24 pt-36 text-white">
        
        {/* TOP LIGHT */}
        <div className="absolute left-0 top-0 h-75 w-75 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="mx-auto max-w-7xl">
          
          {/* HEADER */}
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            
            <div>
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl">
                Premium Listings
              </span>

              <h1 className="mt-6! text-5xl font-black md:text-6xl">
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
                
                <Search
                  className="text-gray-400"
                  size={20}
                />

                <input
                  type="text"
                  placeholder="Search properties..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>

          {/* LOADING */}
          {loading && (
            <div className="flex h-96 items-center justify-center">
              
              <p className="text-lg text-gray-400">
                Loading...
              </p>
            </div>
          )}

          {/* PROPERTIES GRID */}
          {!loading && (
            <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              
              {filteredProperties.map((property) => (
                <div
                  key={property.id}
                  className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30"
                >
                  
                  {/* IMAGE */}
                  <div className="relative overflow-hidden">
                    
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="h-70 w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

                    {/* PRICE */}
                    <div className="absolute left-5 top-5 rounded-2xl bg-cyan-400/20 px-4 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-xl">
                      ${property.price}
                    </div>

                    {/* TYPE */}
                    <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm backdrop-blur-xl">
                      {property.type}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    
                    <div className="flex items-start justify-between">
                      
                      <div>
                        <h2 className="text-2xl font-bold">
                          {property.title}
                        </h2>

                        <p className="mt-2 text-gray-400">
                          📍 {property.location}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white/5 px-4 py-2 text-sm text-cyan-300">
                        {property.status}
                      </div>
                    </div>

                    {/* FEATURES */}
                    <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-gray-300">
                      
                      <p>
                        🛏 {property.rooms} Rooms
                      </p>

                      <p>
                        🛁 {property.bathrooms} Baths
                      </p>

                      <p>
                        📐 {property.area}m²
                      </p>
                    </div>

                    {/* BUTTON */}
                    <Link
  href={`/properties/${property.id}`}
  className="mt-6 block w-full text-decoration-none rounded-2xl bg-linear-to-r from-cyan-400 to-blue-600 py-4 text-center text-sm font-semibold text-white no-underline"
>
  View Details
</Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* EMPTY */}
          {!loading &&
            filteredProperties.length === 0 && (
              <div className="flex h-96 items-center justify-center">
                
                <p className="text-xl text-gray-400">
                  No properties found
                </p>
              </div>
            )}
        </div>
      </section>
    </div>
  );
}