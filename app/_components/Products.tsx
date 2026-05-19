"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface PizzaItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: number;
}

interface CategoryItem {
  id: string | number;
  name: string;
}

const PRODUCTS_API =
  "https://serve.faux-api.com/f92ae21abaa048e1a243f392/products";

const CATEGORIES_API =
  "https://68f11ffe0b966ad50035753d.mockapi.io/categories";

const PizzaPage = () => {
  const router = useRouter();

  const [items, setItems] = useState<PizzaItem[]>([]);
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [productsRes, categoriesRes] = await Promise.all([
          axios.get(PRODUCTS_API),
          axios.get(CATEGORIES_API),
        ]);

        const productsData = Array.isArray(productsRes.data)
          ? productsRes.data
          : productsRes.data.result || [];

        const categoriesData = Array.isArray(categoriesRes.data)
          ? categoriesRes.data
          : [];

        setItems(productsData);

        setCategories([
          { id: 0, name: "Все" },
          ...categoriesData,
        ]);
      } catch (error) {
        console.log("Ошибка:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const onAddPizza = (pizza: PizzaItem) => {
    const cartData = localStorage.getItem("cart");

    const cart = cartData ? JSON.parse(cartData) : [];

    const newCartItem = {
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      image: pizza.imageUrl,
      category: pizza.category,
      size: 30,
      count: 1,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const findItem = cart.find((item: any) => item.id === pizza.id);

    if (findItem) {
      findItem.count += 1;
    } else {
      cart.push(newCartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    router.push("/cart");
  };

  const filteredItems =
    activeCategory === 0
      ? items
      : items.filter(
          (item) => Number(item.category) === activeCategory
        );

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">

      {/* Categories */}

      {/* Title */}
      <h2 className="text-4xl font-bold mb-10">
        Все пиццы
      </h2>

      {/* Products */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <p className="text-2xl font-semibold">
            Загрузка...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {filteredItems.map((pizza) => (
            <div
              key={pizza.id}
              className="bg-white rounded-3xl p-4"
            >
              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={pizza.imageUrl}
                  alt={pizza.name}
                  className="w-56 h-56 object-cover rounded-full hover:scale-105 transition duration-300"
                />
              </div>

              {/* Title */}
              <h2 className="text-center text-2xl font-bold mt-4">
                {pizza.name}
              </h2>

              {/* Options */}
              <div className="bg-gray-100 rounded-2xl p-2 mt-5">

                {/* Type */}
                <div className="grid grid-cols-2 gap-2">
                  <button className="bg-white shadow-sm rounded-xl py-2 text-sm font-medium">
                    тонкое
                  </button>

                  <button className="rounded-xl py-2 text-sm text-gray-500 hover:bg-white transition">
                    традиционное
                  </button>
                </div>

                {/* Size */}
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <button className="bg-white shadow-sm rounded-xl py-2 text-sm font-medium">
                    26 см.
                  </button>

                  <button className="rounded-xl py-2 text-sm text-gray-500 hover:bg-white transition">
                    30 см.
                  </button>

                  <button className="rounded-xl py-2 text-sm text-gray-500 hover:bg-white transition">
                    40 см.
                  </button>
                </div>
              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between mt-6">

                <p className="text-2xl font-bold">
                  от {pizza.price} ₽
                </p>

                <button
                  onClick={() => onAddPizza(pizza)}
                  className="border border-orange-500 text-orange-500 px-3 py-2 rounded-full! font-semibold hover:bg-orange-500 hover:text-white transition"
                >
                  + Добавить
                </button>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PizzaPage;