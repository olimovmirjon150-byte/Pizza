"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

interface Category {
  id: string;
  name: string;
}

const PRODUCTS_API =
  "https://serve.faux-api.com/f92ae21abaa048e1a243f392/products";

const CATEGORIES_API =
  "https://serve.faux-api.com/f92ae21abaa048e1a243f392/categories";

const Page = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  // GET CATEGORIES
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(CATEGORIES_API);

        const data = Array.isArray(res.data)
          ? res.data
          : res.data.result || [];

        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  // CREATE PIZZA
  const handleCreate = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    if (!title || !image || !price || !category) {
      alert("Заполните все поля");
      return;
    }

    try {
      setLoading(true);

      const newPizza = {
        title,
        image,
        price: Number(price),
        category,
      };

      await axios.post(PRODUCTS_API, newPizza);

      alert("Пицца успешно создана 🍕");

      setTitle("");
      setImage("");
      setPrice("");
      setCategory("");

      router.push("/admin/pizzas");
    } catch (error) {
      console.log(error);
      alert("Ошибка при создании");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-5">

      {/* Top */}
      <div className="mb-10">
        <h1 className="text-5xl font-black text-gray-900">
          ➕ Создать пиццу
        </h1>

        <p className="text-gray-500 text-lg mt-3">
          Добавьте новую пиццу в меню
        </p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-[35px] p-10 border border-orange-100 shadow-sm">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left */}
          <div className="space-y-6">

            {/* Title */}
            <div>
              <label className="text-sm font-semibold text-gray-600">
                Название пиццы
              </label>

              <input
                type="text"
                placeholder="Введите название"
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
                className="w-full h-14 mt-2 rounded-2xl border border-gray-200 px-5 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition"
              />
            </div>

            {/* Price */}
            <div>
              <label className="text-sm font-semibold text-gray-600">
                Цена
              </label>

              <input
                type="number"
                placeholder="Введите цену"
                value={price}
                onChange={(e) =>
                  setPrice(e.target.value)
                }
                className="w-full h-14 mt-2 rounded-2xl border border-gray-200 px-5 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition"
              />
            </div>

            {/* Select */}
            <div>
              <label className="text-sm font-semibold text-gray-600">
                Категория
              </label>

              <div className="relative mt-2">

                <select
                  value={category}
                  onChange={(e) =>
                    setCategory(e.target.value)
                  }
                  className="appearance-none w-full h-14 rounded-2xl border border-orange-200 bg-orange-50 px-5 pr-14 text-gray-800 font-medium outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition"
                >
                  <option value="">
                    Выберите категорию
                  </option>

                  {categories.map((item) => (
                    <option
                      key={item.id}
                      value={item.name}
                    >
                      {item.name}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={22}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-orange-500 pointer-events-none"
                />

              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">

            {/* Image */}
            <div>
              <label className="text-sm font-semibold text-gray-600">
                URL изображения
              </label>

              <input
                type="text"
                placeholder="Вставьте ссылку"
                value={image}
                onChange={(e) =>
                  setImage(e.target.value)
                }
                className="w-full h-14 mt-2 rounded-2xl border border-gray-200 px-5 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition"
              />
            </div>

            {/* Preview */}
            <div className="bg-orange-50 rounded-[30px] p-6 h-80 flex items-center justify-center border border-orange-100">

              {image ? (
                <img
                  src={image}
                  alt="preview"
                  className="w-64 h-64 object-cover rounded-full"
                />
              ) : (
                <p className="text-gray-400 text-lg">
                  Предпросмотр изображения
                </p>
              )}

            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-end mt-10">

          <button
            type="button"
            onClick={handleCreate}
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white px-10 py-4 rounded-2xl! font-bold text-lg transition shadow-lg shadow-orange-200"
          >
            {loading
              ? "Создание..."
              : "Создать пиццу"}
          </button>

        </div>
      </div>
    </div>
  );
};

export default Page;