"use client";

import axios from "axios";
import { useEffect, useState } from "react";

type OrderType = {
  id: string;
  propertyId: string;
  propertyTitle: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  message: string;
  status: string;
  createdAt: string;
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        "http://localhost:4000/orders"
      );

      setOrders(res.data);
    } catch (error) {
      console.log(error);

      alert("Failed to fetch orders ❌");
    } finally {
      setLoading(false);
    }
  };

  const deleteOrder = async (id: string) => {
    try {
      await axios.delete(
        `http://localhost:4000/orders/${id}`
      );

      setOrders((prev) =>
        prev.filter((item) => item.id !== id)
      );

      alert("Order deleted ✅");
    } catch (error) {
      console.log(error);

      alert("Failed to delete order ❌");
    }
  };

  return (
    <section>
      {/* TOP */}
      <div className="mb-8">
        <h1 className="text-4xl font-black text-white">
          Orders
        </h1>

        <p className="mt-2 text-gray-400">
          Manage all customer orders
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
          <table className="w-full min-w-250">
            {/* HEAD */}
            <thead className="border-b border-white/10 bg-white/5">
              <tr>
                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-300">
                  Customer
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-300">
                  Property
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-300">
                  Phone
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-300">
                  Email
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-300">
                  Status
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
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-white/5 transition hover:bg-white/5"
                >
                  {/* CUSTOMER */}
                  <td className="px-6 py-5">
                    <div>
                      <p className="font-semibold text-white">
                        {order.customerName}
                      </p>

                      <p className="text-sm text-gray-400">
                        {order.message}
                      </p>
                    </div>
                  </td>

                  {/* PROPERTY */}
                  <td className="px-6 py-5 text-sm text-cyan-300">
                    {order.propertyTitle}
                  </td>

                  {/* PHONE */}
                  <td className="px-6 py-5 text-sm text-gray-300">
                    {order.customerPhone}
                  </td>

                  {/* EMAIL */}
                  <td className="px-6 py-5 text-sm text-gray-300">
                    {order.customerEmail}
                  </td>

                  {/* STATUS */}
                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        order.status === "Approved"
                          ? "bg-green-500/10 text-green-400"
                          : order.status === "Rejected"
                          ? "bg-red-500/10 text-red-400"
                          : "bg-yellow-500/10 text-yellow-400"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>

                  {/* CREATED */}
                  <td className="px-6 py-5 text-sm text-gray-400">
                    {new Date(
                      order.createdAt
                    ).toLocaleDateString()}
                  </td>

                  {/* DELETE */}
                  <td className="px-6 py-5">
                    <div className="flex justify-center">
                      <button
                        onClick={() =>
                          deleteOrder(order.id)
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
          {orders.length === 0 && (
            <div className="flex h-62.5 items-center justify-center">
              <p className="text-lg text-gray-400">
                No orders found
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}