"use client";

import axios from "axios";
import { useEffect, useState } from "react";

type CategoryType = {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  createdAt: string;
};

export default function CategoriesPage() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        "http://localhost:4000/categories"
      );

      setCategories(res.data);
    } catch (error) {
      console.log(error);

      alert("Failed to fetch categories ❌");
    } finally {
      setLoading(false);
    }
  };

  const deleteCategory = async (id: string) => {
    try {
      await axios.delete(
        `http://localhost:4000/categories/${id}`
      );

      setCategories((prev) =>
        prev.filter((item) => item.id !== id)
      );

      alert("Category deleted ✅");
    } catch (error) {
      console.log(error);

      alert("Failed to delete category ❌");
    }
  };

  return (
    <section>
      
      {/* TOP */}
      <div className="mb-8">
        
        <h1 className="text-4xl font-black text-white">
          Categories
        </h1>

        <p className="mt-2 text-gray-400">
          Manage all property categories
        </p>
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
          
          <table className="w-full min-w-225">
            
            {/* HEAD */}
            <thead className="border-b border-white/10 bg-white/5">
              <tr>
                
                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-300">
                  Icon
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-300">
                  Name
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-300">
                  Slug
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-300">
                  Description
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-300">
                  Created
                </th>

                <th className="px-6 py-5 text-center text-sm font-semibold text-gray-300">
                  Action
                </th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {categories.map((category) => (
                <tr
                  key={category.id}
                  className="border-b border-white/5 transition hover:bg-white/5"
                >
                  
                  {/* ICON */}
                  <td className="px-6 py-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl">
                      {category.icon}
                    </div>
                  </td>

                  {/* NAME */}
                  <td className="px-6 py-5">
                    <p className="font-semibold text-white">
                      {category.name}
                    </p>
                  </td>

                  {/* SLUG */}
                  <td className="px-6 py-5 text-sm text-cyan-300">
                    {category.slug}
                  </td>

                  {/* DESCRIPTION */}
                  <td className="px-6 py-5 text-sm text-gray-300">
                    {category.description}
                  </td>

                  {/* DATE */}
                  <td className="px-6 py-5 text-sm text-gray-400">
                    {new Date(
                      category.createdAt
                    ).toLocaleDateString()}
                  </td>

                  {/* DELETE */}
                  <td className="px-6 py-5">
                    <div className="flex justify-center">
                      
                      <button
                        onClick={() =>
                          deleteCategory(category.id)
                        }
                        className="rounded-xl! bg-red-500/10 px-5 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500 hover:text-white"
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
          {categories.length === 0 && (
            <div className="flex h-62.5 items-center justify-center">
              
              <p className="text-lg text-gray-400">
                No categories found
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}