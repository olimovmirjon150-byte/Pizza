"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface OrderItem {
  id: string;
  name: string;
  location?: string;
  phonenumber?: string;
}

const API =
  "https://serve.faux-api.com/f92ae21abaa048e1a243f392/orders";

const Page = () => {
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);

        const res = await axios.get(API);

        const data = Array.isArray(res.data)
          ? res.data
          : res.data.result || [];

        setOrders(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // DELETE ORDER
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${API}/${id}`);

      setOrders((prev) =>
        prev.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  // TOTAL

  return (
    <div className="max-w-7xl mx-auto py-5">

      {/* Top */}
      <div className="flex items-center justify-between mb-10">

        <div>
          <h1 className="text-5xl font-black text-gray-900">
            📦 Все заказы
          </h1>

          <p className="text-gray-500 text-lg mt-3">
            Управление заказами клиентов
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-[35px] border border-orange-100 shadow-sm overflow-hidden">

        {loading ? (
          <div className="h-96 flex items-center justify-center text-2xl font-bold text-gray-400">
            Загрузка...
          </div>
        ) : orders.length === 0 ? (
          <div className="h-96 flex flex-col items-center justify-center">

            <div className="text-7xl mb-5">
              📭
            </div>

            <h2 className="text-3xl font-black text-gray-900">
              Заказов пока нет
            </h2>

            <p className="text-gray-500 mt-3 text-lg">
              Здесь будут отображаться все заказы
            </p>

          </div>
        ) : (
          <div className="overflow-x-auto">

            <table className="w-full">

              {/* Head */}
              <thead className="bg-orange-50 border-b border-orange-100">

                <tr>

                  <th className="text-left px-6 py-5 text-sm font-bold text-gray-700">
                    Название
                  </th>

                  <th className="text-left px-6 py-5 text-sm font-bold text-gray-700">
                    Адрес
                  </th>

                  <th className="text-left px-6 py-5 text-sm font-bold text-gray-700">
                    Телефон
                  </th>

                  <th className="text-left px-6 py-5 text-sm font-bold text-gray-700">
                    Действия
                  </th>

                </tr>
              </thead>

              {/* Body */}
              <tbody>

                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-orange-50 hover:bg-orange-50/40 transition"
                  >

                    {/* Name */}
                    <td className="px-6 py-5">
                      <h3 className="font-bold text-lg text-gray-900">
                        {order.name}
                      </h3>
                    </td>

                    {/* Address */}
                    <td className="px-6 py-5 text-gray-600">
                      {order.location || "Не указан"}
                    </td>

                    {/* Phone */}
                    <td className="px-6 py-5 text-gray-600">
                      {order.phonenumber || "Не указан"}
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-5">

                      <button
                        onClick={() =>
                          handleDelete(order.id)
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-2xl! font-semibold transition"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;