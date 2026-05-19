"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface Category {
  id: string;
  name: string;
}

const API =
  "https://serve.faux-api.com/f92ae21abaa048e1a243f392/categories";

const Page = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  // GET CATEGORIES
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);

        const res = await axios.get(API);

        const data = Array.isArray(res.data)
          ? res.data
          : res.data.result || [];

        setCategories(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // DELETE CATEGORY
  const handleDelete = async (id: string) => {
    const confirmDelete = confirm(
      "Удалить категорию?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`${API}/${id}`);

      setCategories((prev) =>
        prev.filter((item) => item.id !== id)
      );

      alert("Категория удалена");
    } catch (error) {
      console.log(error);

      alert("Ошибка при удалении");
    }
  };

  return (
    <div className="max-w-6xl mx-auto">

      {/* TOP */}
      <div className="flex items-center justify-between mb-10">

        <div>
          <h1 className="text-5xl font-black text-gray-900">
            🍕 Категории
          </h1>

          <p className="text-gray-500 text-lg mt-3">
            Управление категориями пицц
          </p>
        </div>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-[35px] border border-orange-100 shadow-sm overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            {/* HEAD */}
            <thead className="bg-orange-50 border-b border-orange-100">

              <tr>

                <th className="text-left px-8 py-5 text-sm font-bold text-gray-700">
                  ID
                </th>

                <th className="text-left px-8 py-5 text-sm font-bold text-gray-700">
                  Название категории
                </th>

                <th className="text-left px-8 py-5 text-sm font-bold text-gray-700">
                  Действия
                </th>

              </tr>

            </thead>

            {/* BODY */}
            <tbody>

              {loading ? (
                <tr>
                  <td
                    colSpan={3}
                    className="text-center py-16 text-2xl font-bold text-gray-400"
                  >
                    Загрузка...
                  </td>
                </tr>
              ) : categories.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="text-center py-16 text-xl text-gray-400"
                  >
                    Категории не найдены
                  </td>
                </tr>
              ) : (
                categories.map((item, index) => (
                  <tr
                    key={item.id}
                    className="border-b border-orange-50 hover:bg-orange-50/40 transition"
                  >

                    {/* ID */}
                    <td className="px-8 py-6">

                      <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center font-bold">
                        {index + 1}
                      </div>

                    </td>

                    {/* NAME */}
                    <td className="px-8 py-6">

                      <h2 className="text-xl font-bold text-gray-900">
                        {item.name}
                      </h2>

                    </td>

                    {/* ACTIONS */}
                    <td className="px-8 py-6">

                      <button
                        onClick={() =>
                          handleDelete(item.id)
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-2xl! font-semibold transition"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>
                ))
              )}

            </tbody>

          </table>

        </div>
      </div>
    </div>
  );
};

export default Page;