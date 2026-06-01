"use client";

import axios from "axios";
import { useEffect, useState } from "react";

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

  // FIXED
  images: string[];
};

export default function AdminPropertiesPage() {
  const [properties, setProperties] = useState<
    PropertyType[]
  >([]);

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
    } catch (error) {
      console.log(error);

      alert("Failed to fetch properties");
    } finally {
      setLoading(false);
    }
  };

  // DELETE PROPERTY
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(
        `http://localhost:4000/properties/${id}`
      );

      setProperties((prev) =>
        prev.filter((property) => property.id !== id)
      );

      alert("Property deleted successfully ✅");
    } catch (error) {
      console.log(error);

      alert("Failed to delete property ❌");
    }
  };

  return (
    <section>
      
      {/* TOP */}
      <div className="mb-8 flex items-center justify-between">
        
        <div>
          <h1 className="text-4xl font-black text-white">
            Properties
          </h1>

          <p className="mt-2 text-gray-400">
            Manage all uploaded properties
          </p>
        </div>
      </div>

      {/* LOADING */}
      {loading && (
        <div className="flex h-75 items-center justify-center">
          <p className="text-lg text-gray-400">
            Loading...
          </p>
        </div>
      )}

      {/* TABLE */}
      {!loading && (
        <div className="overflow-x-auto rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl">
          
          <table className="w-full min-w-250">
            
            {/* TABLE HEAD */}
            <thead className="border-b border-white/10 bg-white/5">
              <tr>
                
                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-300">
                  Image
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-300">
                  Title
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-300">
                  Price
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-300">
                  Type
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-300">
                  Location
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-300">
                  Rooms
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-300">
                  Area
                </th>

                <th className="px-6 py-5 text-center text-sm font-semibold text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody>
              {properties.map((property) => (
                <tr
                  key={property.id}
                  className="border-b border-white/5 transition hover:bg-white/5"
                >
                  
                  {/* IMAGE */}
                  <td className="px-6 py-5">
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="h-16 w-24 rounded-xl object-cover"
                    />
                  </td>

                  {/* TITLE */}
                  <td className="px-6 py-5">
                    <div>
                      <p className="font-semibold text-white">
                        {property.title}
                      </p>

                      <p className="mt-1 text-sm text-gray-400">
                        {property.status}
                      </p>
                    </div>
                  </td>

                  {/* PRICE */}
                  <td className="px-6 py-5 text-sm text-cyan-300">
                    ${property.price}
                  </td>

                  {/* TYPE */}
                  <td className="px-6 py-5 text-sm text-gray-300">
                    {property.type}
                  </td>

                  {/* LOCATION */}
                  <td className="px-6 py-5 text-sm text-gray-300">
                    {property.location}
                  </td>

                  {/* ROOMS */}
                  <td className="px-6 py-5 text-sm text-gray-300">
                    {property.rooms} rooms
                  </td>

                  {/* AREA */}
                  <td className="px-6 py-5 text-sm text-gray-300">
                    {property.area}m²
                  </td>

                  {/* ACTIONS */}
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-center gap-3">

                      <button
                        onClick={() =>
                          handleDelete(property.id)
                        }
                        className="rounded-xl! bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500 hover:text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* EMPTY */}
          {properties.length === 0 && (
            <div className="flex h-62.5 items-center justify-center">
              
              <p className="text-lg text-gray-400">
                No properties found
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}