"use client";

import axios from "axios";
import { Bath, BedDouble, MapPin, Square } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import MainHeader from "../../_components/MainHeader";

type PropertyType = {
  id: string;
  title: string;
  description: string;
  price: number;
  type: string;
  status: string;
  location: string;
  rooms: number;
  bathrooms: number;
  area: number;
  images: {
    id: string;
    name: string;
  }[];
};

export default function PropertyDetailsPage() {
  const params = useParams();

  const [property, setProperty] =
    useState<PropertyType | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProperty();
  }, []);

  const getProperty = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/properties/${params.id}`
      );

      setProperty(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-indigo-950 text-white">
        Loading...
      </div>
    );
  }

  if (!property) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-indigo-950 text-white">
        Property not found
      </div>
    );
  }

  return (
    <div className="bg-indigo-950 min-h-screen text-white">
      <MainHeader />

      <section className="px-6 pt-36 pb-20">
        <div className="mx-auto max-w-7xl">

          {/* IMAGES */}
          <div className="grid gap-4 lg:grid-cols-2">

            <img
              src={property.images[0]?.name}
              alt={property.title}
              className="h-125 w-full rounded-[30px] object-cover"
            />

            <div className="grid gap-4">
              {property.images
                .slice(1, 3)
                .map((image) => (
                  <img
                    key={image.id}
                    src={image.name}
                    alt=""
                    className="h-60.5 w-full rounded-[30px] object-cover"
                  />
                ))}
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-10 grid gap-10 lg:grid-cols-3">

            <div className="lg:col-span-2">

              <h1 className="text-5xl font-black">
                {property.title}
              </h1>

              <p className="mt-4 flex items-center gap-2 text-gray-400">
                <MapPin size={18} />
                {property.location}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <BedDouble size={20} />
                  <p className="mt-2">
                    {property.rooms} Rooms
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <Bath size={20} />
                  <p className="mt-2">
                    {property.bathrooms} Baths
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <Square size={20} />
                  <p className="mt-2">
                    {property.area} m²
                  </p>
                </div>

              </div>

              <div className="mt-10">
                <h2 className="text-3xl font-bold">
                  Description
                </h2>

                <p className="mt-5 leading-8 text-gray-400">
                  {property.description}
                </p>
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <p className="text-gray-400">
                Property Price
              </p>

              <h2 className="mt-3 text-5xl font-black text-cyan-400">
                ${property.price}
              </h2>

              <div className="mt-8 space-y-4">

                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Type
                  </span>

                  <span>
                    {property.type}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Status
                  </span>

                  <span>
                    {property.status}
                  </span>
                </div>

              </div>

              <button className="mt-8 w-full rounded-2xl bg-linear-to-r from-cyan-400 to-blue-600 py-4 font-semibold">
                Contact Owner
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}