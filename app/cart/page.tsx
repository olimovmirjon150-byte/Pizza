"use client";

import Link from "next/link";
import axios from "axios";
import Header from "../_components/Header";
import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  count: number;
  size: number;
  category: number;
}

const ORDER_API = "/api/orders";

const CartPage = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);

    const cartData = localStorage.getItem("cart");

    if (cartData) {
      setItems(JSON.parse(cartData));
    }
  }, []);

  // UPDATE COUNT
  const updateCount = (
    id: string,
    type: "plus" | "minus"
  ) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        if (type === "plus") {
          return {
            ...item,
            count: item.count + 1,
          };
        }

        return {
          ...item,
          count: Math.max(1, item.count - 1),
        };
      }

      return item;
    });

    setItems(updatedItems);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedItems)
    );
  };

  // REMOVE ITEM
  const removeItem = (id: string) => {
    const filteredItems = items.filter(
      (item) => item.id !== id
    );

    setItems(filteredItems);

    localStorage.setItem(
      "cart",
      JSON.stringify(filteredItems)
    );
  };

  // CLEAR CART
  const clearCart = () => {
    setItems([]);

    localStorage.removeItem("cart");
  };

  // CREATE ORDER
  const handleOrder = async () => {
  if (!name || !address || !phone) {
    alert("Заполните все поля");
    return;
  }

  try {
    setLoading(true);

    const orderData = {
      customer: name,
      address,
      phone,
      items,
      totalCount,
      totalPrice,
      createdAt: new Date(),
    };

    await axios.post("/api/orders", orderData);

    alert("Заказ успешно оформлен 🍕");

    localStorage.removeItem("cart");

    setItems([]);

    setName("");
    setAddress("");
    setPhone("");
  } catch (error) {
    console.log(error);

    alert("Ошибка при оформлении заказа");
  } finally {
    setLoading(false);
  }
};

  // TOTAL
  const totalCount = items.reduce(
    (acc, item) => acc + item.count,
    0
  );

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  if (!mounted) return null;

  // EMPTY CART
  if (items.length === 0) {
    return (
      <div>
        <Header />

        <div className="min-h-[80vh] flex items-center justify-center px-5">

          <div className="text-center">

            <h1 className="text-5xl font-black text-gray-900">
              Корзина пустая 😕
            </h1>

            <p className="text-gray-500 text-lg mt-5 leading-relaxed">
              Скорее всего, вы ещё не добавили пиццу в корзину.
            </p>

            <img
              src="/empty-cart.png"
              alt="empty"
              className="w-72 mx-auto mt-10"
            />

            <Link href="/">
              <button className="mt-10 bg-black text-white px-8 py-4 rounded-2xl font-semibold hover:bg-gray-800 transition">
                Вернуться назад
              </button>
            </Link>

          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />

      <div className="max-w-5xl mx-auto px-5 py-10">

        {/* Top */}
        <div className="flex items-center justify-between mb-10">

          <h1 className="text-4xl font-black flex items-center gap-3">
            🛒 Корзина
          </h1>

          <button
            onClick={clearCart}
            className="text-gray-500 hover:text-red-500 transition font-medium"
          >
            🗑 Очистить корзину
          </button>

        </div>

        {/* Items */}
        <div className="space-y-6">

          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-orange-100 rounded-3xl p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-5 shadow-sm"
            >

              {/* Left */}
              <div className="flex items-center gap-5">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-full"
                />

                <div>
                  <h2 className="text-2xl font-bold">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    {item.category} тесто, {item.size} см.
                  </p>
                </div>
              </div>

              {/* Count */}
              <div className="flex items-center gap-4">

                <button
                  onClick={() =>
                    updateCount(item.id, "minus")
                  }
                  className="w-10 h-10 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition text-xl"
                >
                  -
                </button>

                <p className="text-2xl font-bold">
                  {item.count}
                </p>

                <button
                  onClick={() =>
                    updateCount(item.id, "plus")
                  }
                  className="w-10 h-10 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition text-xl"
                >
                  +
                </button>

              </div>

              {/* Price */}
              <div className="text-2xl font-black text-orange-500">
                {item.price * item.count} ₽
              </div>

              {/* Remove */}
              <button
                onClick={() => removeItem(item.id)}
                className="w-10 h-10 rounded-full border border-gray-300 hover:border-red-500 hover:text-red-500 transition"
              >
                ✕
              </button>

            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 mt-12">

          <div className="flex flex-col gap-2 text-xl">

            <p>
              Всего пицц:
              <span className="font-bold ml-2">
                {totalCount} шт.
              </span>
            </p>

            <p>
              Сумма заказа:
              <span className="font-black text-orange-500 ml-2">
                {totalPrice} ₽
              </span>
            </p>

          </div>

          <div className="flex gap-4">

            <Link href="/">
              <button className="border border-gray-300 px-7 py-4 rounded-2xl! font-semibold hover:bg-gray-100 transition">
                ← Назад
              </button>
            </Link>

            {/* DIALOG */}
            <Dialog>

              <DialogTrigger className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl! font-bold transition shadow-lg shadow-orange-200">
                Оплатить сейчас
              </DialogTrigger>

              <DialogContent className="rounded-[30px] border-orange-100">

                <DialogHeader>
                  <DialogTitle className="text-3xl font-black">
                    🍕 Оформление заказа
                  </DialogTitle>
                </DialogHeader>

                <div>

                  {/* Name */}
                  <input
                    type="text"
                    placeholder="Введите ваше имя"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    className="w-full mb-3 h-14 border border-gray-200 rounded-2xl px-5 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition"
                  />

                  {/* Address */}
                  <input
                    type="text"
                    placeholder="Введите ваш адрес"
                    value={address}
                    onChange={(e) =>
                      setAddress(e.target.value)
                    }
                    className="w-full mb-3 h-14 border border-gray-200 rounded-2xl px-5 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition"
                  />

                  {/* Phone */}
                  <input
                    type="text"
                    placeholder="Введите ваш телефон"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value)
                    }
                    className="w-full mb-3 h-14 border border-gray-200 rounded-2xl px-5 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition"
                  />

                  {/* Button */}
                  <button
                    onClick={handleOrder}
                    disabled={loading}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white h-14 rounded-2xl! font-bold text-lg transition shadow-lg shadow-orange-200"
                  >
                    {loading
                      ? "Оформление..."
                      : "Оплатить"}
                  </button>

                </div>

              </DialogContent>

            </Dialog>

          </div>
        </div>

      </div>
    </div>
  );
};

export default CartPage;