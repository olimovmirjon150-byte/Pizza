"use client";

import axios from "axios";
import { Pizza, Sparkles } from "lucide-react";
import { useState } from "react";

const API =
  "https://serve.faux-api.com/f92ae21abaa048e1a243f392/categories";

const Page = () => {
  const [name, setName] = useState("");

  const [loading, setLoading] = useState(false);

  // CREATE CATEGORY
  const handleCreate = async () => {
    if (!name) {
      alert("Введите название категории");
      return;
    }

    try {
      setLoading(true);

      const newCategory = {
        name,
      };

      await axios.post(API, newCategory);

      alert("Категория успешно создана 🍕");

      setName("");
    } catch (error) {
      console.log(error);

      alert("Ошибка при создании категории");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-5 bg-linear-to-br from-orange-50 via-white to-orange-100 overflow-hidden relative">

      {/* Blur Circle */}
      <div className="w-96 h-96 bg-orange-300/30 rounded-full blur-3xl absolute -top-20 -left-20 animate-pulse" />

      <div className="w-80 h-80 bg-orange-400/20 rounded-full blur-3xl absolute bottom-0 right-0 animate-pulse" />

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-5xl bg-white/90 backdrop-blur-xl border border-orange-100 rounded-[40px] shadow-2xl overflow-hidden">

        <div className="grid lg:grid-cols-2">

          {/* Left */}
          <div className="p-12 flex flex-col justify-center">

            {/* Top */}
            <div className="flex items-center gap-3 mb-6">

              <div className="w-16 h-16 rounded-3xl bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-200 animate-bounce">

                <Pizza className="text-white" size={34} />

              </div>

              <div>

                <h1 className="text-5xl font-black text-gray-900 leading-tight">
                  Создать
                </h1>

                <h1 className="text-5xl font-black text-orange-500">
                  Категорию
                </h1>

              </div>

            </div>

            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Добавьте новую категорию для вашего
              пицца магазина 🍕
            </p>

            {/* Input */}
            <div className="space-y-5">

              <div>

                <label className="text-sm font-bold text-gray-600">
                  Название категории
                </label>

                <input
                  type="text"
                  placeholder="Например: Мясные"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  className="w-full h-16 mt-3 rounded-3xl border border-orange-200 bg-orange-50 px-6 text-lg outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition"
                />

              </div>

              {/* Button */}
              <button
                onClick={handleCreate}
                disabled={loading}
                className="w-full h-16 rounded-3xl! bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white text-lg font-black transition shadow-xl shadow-orange-200 flex items-center justify-center gap-3"
              >

                <Sparkles size={22} />

                {loading
                  ? "Создание..."
                  : "Создать категорию"}

              </button>

            </div>
          </div>

          {/* Right */}
          <div className="relative hidden lg:flex items-center justify-center bg-linear-to-br from-orange-400 to-orange-500 overflow-hidden">

            {/* Floating Circles */}
            <div className="absolute w-72 h-72 bg-white/10 rounded-full -top-10 -right-10" />

            <div className="absolute w-52 h-52 bg-white/10 rounded-full bottom-0 left-0" />

            {/* Pizza Image */}
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop"
              alt="pizza"
              className="w-105 h-105 object-cover rounded-full border-12 border-white shadow-2xl animate-[spin_20s_linear_infinite]"
            />

            {/* Badge */}
            <div className="absolute bottom-10 right-10 bg-white px-6 py-4 rounded-3xl shadow-xl">

              <p className="text-sm text-gray-500 font-medium">
                Pizza Admin
              </p>

              <h2 className="text-2xl font-black text-orange-500">
                Dashboard
              </h2>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Page;