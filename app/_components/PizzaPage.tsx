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

  // CATEGORY
  const [activeCategory, setActiveCategory] =
    useState(0);

  // SORT
  const [isOpen, setIsOpen] = useState(false);

  const [selectedSort, setSelectedSort] =
    useState(0);

  const sortList = [
    "популярности",
    "по цене",
    "по алфавиту",
  ];

  // FETCH
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [productsRes, categoriesRes] =
          await Promise.all([
            axios.get(PRODUCTS_API),
            axios.get(CATEGORIES_API),
          ]);

        const productsData = Array.isArray(
          productsRes.data
        )
          ? productsRes.data
          : productsRes.data.result || [];

        const categoriesData = Array.isArray(
          categoriesRes.data
        )
          ? categoriesRes.data
          : [];

        setItems(productsData);

        setCategories([
          { id: 0, name: "Все" },
          ...categoriesData,
        ]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ADD PIZZA
  const onAddPizza = (pizza: PizzaItem) => {
    const cartData = localStorage.getItem("cart");

    const cart = cartData
      ? JSON.parse(cartData)
      : [];

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
    const findItem = cart.find(
      (item: any) => item.id === pizza.id
    );

    if (findItem) {
      findItem.count += 1;
    } else {
      cart.push(newCartItem);
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    router.push("/cart");
  };

  // SORT
  const onSelectSort = (index: number) => {
    setSelectedSort(index);

    setIsOpen(false);
  };

  // FILTER
  const filteredItems =
    activeCategory === 0
      ? items
      : items.filter(
          (item) =>
            Number(item.category) ===
            activeCategory
        );

  // SORTED
  const sortedItems = [...filteredItems].sort(
    (a, b) => {
      if (selectedSort === 0) {
        return 0;
      }

      if (selectedSort === 1) {
        return a.price - b.price;
      }

      return a.name.localeCompare(b.name);
    }
  );

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">

      {/* TOP */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">

        {/* Categories */}
        <div className="flex flex-wrap gap-3">

          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() =>
                setActiveCategory(index)
              }
              className={`px-6 py-3 rounded-full! font-bold transition ${
                activeCategory === index
                  ? "bg-black text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-black"
              }`}
            >
              {category.name}
            </button>
          ))}

        </div>

        {/* Sort */}
        <div className="relative flex items-center gap-2">

          <p className="font-bold text-sm">
            Сортировка по:
          </p>

          <button
            onClick={() =>
              setIsOpen(!isOpen)
            }
            className="text-orange-500 border-b border-dotted border-orange-500 font-medium"
          >
            {sortList[selectedSort]}
          </button>

          {/* Dropdown */}
          {isOpen && (
            <div className="absolute top-10 right-0 bg-white shadow-xl rounded-2xl py-2 w-52 border border-gray-100 z-50">

              {sortList.map((item, index) => (
                <button
                  key={index}
                  onClick={() =>
                    onSelectSort(index)
                  }
                  className={`w-full text-left px-5 py-3 transition ${
                    selectedSort === index
                      ? "bg-orange-50 text-orange-500 font-bold"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {item}
                </button>
              ))}

            </div>
          )}

        </div>

      </div>

      {/* TITLE */}
      <h1 className="text-4xl font-black mb-10">
        Все пиццы
      </h1>

      {/* PRODUCTS */}
      {loading ? (
        <div className="flex justify-center py-20">

          <p className="text-2xl font-bold">
            Загрузка...
          </p>

        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {sortedItems.map((pizza) => (
            <div
              key={pizza.id}
              className="bg-white rounded-3xl p-4"
            >

              {/* IMAGE */}
              <div className="flex justify-center">

                <img
                  src={pizza.imageUrl}
                  alt={pizza.name}
                  className="w-56 h-56 object-cover rounded-full hover:scale-105 transition duration-300"
                />

              </div>

              {/* TITLE */}
              <h2 className="text-center text-2xl font-bold mt-4">
                {pizza.name}
              </h2>

              {/* OPTIONS */}
              <div className="bg-gray-100 rounded-2xl p-2 mt-5">

                {/* TYPE */}
                <div className="grid grid-cols-2 gap-2">

                  <button className="bg-white shadow-sm rounded-xl py-2 text-sm font-medium">
                    тонкое
                  </button>

                  <button className="rounded-xl py-2 text-sm text-gray-500 hover:bg-white transition">
                    традиционное
                  </button>

                </div>

                {/* SIZE */}
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

              {/* BOTTOM */}
              <div className="flex items-center justify-between mt-6">

                <p className="text-2xl font-bold">
                  от {pizza.price} ₽
                </p>

                <button
                  onClick={() =>
                    onAddPizza(pizza)
                  }
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