"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface PizzaItem {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  category: number;
}

const API =
  "https://serve.faux-api.com/f92ae21abaa048e1a243f392/products";

const Page = () => {
  const [pizzas, setPizzas] = useState<PizzaItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        setLoading(true);

        const res = await axios.get(API);

        const data = Array.isArray(res.data)
          ? res.data
          : res.data.result || [];

        setPizzas(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  // DELETE
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${API}/${id}`);

      setPizzas((prev) =>
        prev.filter((pizza) => pizza.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      {/* Top */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-black text-gray-900">
            🍕 Все пиццы
          </h1>

          <p className="text-gray-500 mt-2">
            Управление всеми пиццами магазина
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-[30px] shadow-sm border border-orange-100 overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            {/* Head */}
            <thead className="bg-orange-50 border-b border-orange-100">
              <tr>

                <th className="text-left px-6 py-5 text-sm font-bold text-gray-700">
                  Фото
                </th>

                <th className="text-left px-6 py-5 text-sm font-bold text-gray-700">
                  Название
                </th>

                <th className="text-left px-6 py-5 text-sm font-bold text-gray-700">
                  Цена
                </th>

                <th className="text-left px-6 py-5 text-sm font-bold text-gray-700">
                  Категория
                </th>

                <th className="text-left px-6 py-5 text-sm font-bold text-gray-700">
                  Действия
                </th>

              </tr>
            </thead>

            {/* Body */}
            <tbody>

              {loading ? (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-16 text-xl font-semibold text-gray-400"
                  >
                    Загрузка...
                  </td>
                </tr>
              ) : (
                pizzas.map((pizza) => (
                  <tr
                    key={pizza.id}
                    className="border-b border-orange-50 hover:bg-orange-50/40 transition"
                  >

                    {/* Image */}
                    <td className="px-6 py-5">
                      <img
                        src={pizza.imageUrl}
                        alt={pizza.title}
                        className="w-20 h-20 object-cover rounded-2xl"
                      />
                    </td>

                    {/* Name */}
                    <td className="px-6 py-5">
                      <h5 className="font-bold text-lg text-gray-900">
                        {pizza.title}
                      </h5>
                    </td>

                    {/* Price */}
                    <td className="px-6 py-5">
                      <p className="font-semibold text-orange-500 text-lg">
                        {pizza.price} ₽
                      </p>
                    </td>

                    {/* Category */}
                    <td className="px-6 py-5">
                      <span className="bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm font-medium">
                        {pizza.category}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-5">
                      <div className="flex gap-3">

                        <button
                          onClick={() => handleDelete(pizza.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl! font-medium transition"
                        >
                          Delete
                        </button>

                      </div>
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