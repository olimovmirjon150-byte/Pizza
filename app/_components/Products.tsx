// "use client";

// import axios from "axios";
// import { useEffect, useState } from "react";

// const API = "https://serve.faux-api.com/f92ae21abaa048e1a243f392";

// const Products = () => {
//   const [products, setProducts] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get(`${API}/products`);

//         // API array qaytarmasa ham xavfsiz ishlaydi
//         setProducts(Array.isArray(res.data) ? res.data : res.data.result || []);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="flex justify-center items-start flex-wrap mt-5">
//       {products.map((item: any) => (
//         <div
//           key={item.id}
//           className="w-80 bg-white rounded-3xl p-4 shadow-sm"
//         >
//           {/* Image */}
//           <div className="flex justify-center">
//             <img
//                   src={item.imageUrl}
//                   alt={item.title}
//                   className="img-fluid mb-3"
//                   width={260}
//                   height={260}
//                 />
//           </div>

//           {/* Title */}
//           <h2 className="text-center text-xl font-bold mt-4">
//             {item.title}
//           </h2>

//           {/* Options */}
//           <div className="bg-gray-100 rounded-2xl p-2 mt-4">
            
//             {/* Type */}
//             <div className="grid grid-cols-2 gap-2">
//               <button className="bg-white shadow-sm rounded-xl py-2 text-sm font-medium">
//                 тонкое
//               </button>

//               <button className="rounded-xl py-2 text-sm text-gray-500 hover:bg-white transition">
//                 традиционное
//               </button>
//             </div>

//             {/* Size */}
//             <div className="grid grid-cols-3 gap-2 mt-2">
//               <button className="bg-white shadow-sm rounded-xl py-2 text-sm font-medium">
//                 26 см.
//               </button>

//               <button className="rounded-xl py-2 text-sm text-gray-500 hover:bg-white transition">
//                 30 см.
//               </button>

//               <button className="rounded-xl py-2 text-sm text-gray-500 hover:bg-white transition">
//                 40 см.
//               </button>
//             </div>
//           </div>

//           {/* Bottom */}
//           <div className="flex items-center justify-between mt-5">
//             <p className="text-2xl font-bold">
//               от {item.price} ₽
//             </p>

//             <button className="flex items-center gap-2 border border-orange-500 text-orange-500 px-4 py-2 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition">
//               + Добавить
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Products;


"use client";
import router from "next/router";
import { useState, useEffect } from "react";

interface PizzaItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: number;
}

interface CategoryItem {
  id: string | number;
  name: string;
}

const PizzaPage = () => {
  const [items, setItems] = useState<PizzaItem[]>([]);
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [activeCategory] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resProducts, resCategories] = await Promise.all([
          fetch("https://68f11ffe0b966ad50035753d.mockapi.io/products"),
          fetch("https://68f11ffe0b966ad50035753d.mockapi.io/categories"),
        ]);

        const productsData = await resProducts.json();
        const categoriesData = await resCategories.json();

        setItems(productsData);
        setCategories([{ id: 0, name: "Все" }, ...categoriesData]);
      } catch (error) {
        console.error("Xatolik:", error);
      } finally {
        setIsLoading(false);
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
      imageUrl: "/image 5.png",
      type: "Tonkoe",
      size: 30,
      count: 1,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const findItem = cart.find((obj: any) => obj.id === pizza.id);
    if (findItem) {
      findItem.count++;
    } else {
      cart.push(newCartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    router.push("/cart");
  };

  const filteredItems =
    activeCategory > 0
      ? items.filter((item) => Number(item.category) === activeCategory)
      : items;

  return (
    <div
      className="container py-5"
      style={{ fontFamily: "Proxima Nova, system-ui, sans-serif" }}
    >
      <h2 className="fw-bold mb-4">Все piццы</h2>

      <div className="row g-4">
        {isLoading ? (
          <p className="text-center w-100">Yuklanmoqda...</p>
        ) : (
          filteredItems.map((pizza) => (
            <div
              key={pizza.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
            >
              <div
                className="pizza-block text-center"
                style={{ width: "280px" }}
              >
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  className="img-fluid mb-3"
                  width={260}
                  height={260}
                />
                <h4 className="fw-bold mb-3" style={{ fontSize: "20px" }}>
                  {pizza.name}
                </h4>

                <div
                  className="p-2 rounded-3 mb-3"
                  style={{ backgroundColor: "#f3f3f3" }}
                >
                  <div className="d-flex gap-1 mb-2">
                    <button className="btn btn-light p-1!">Tonkoe</button>
                    <button className="btn btn-light p-1!">
                      Traditsionnoe
                    </button>
                  </div>

                  <div className="d-flex gap-1">
                    <button className="btn btn-light">10 cm</button>
                    <button className="btn btn-light">18 cm</button>
                    <button className="btn btn-light">34 cm</button>
                  </div>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <div className="fw-bold" style={{ fontSize: "22px" }}>
                    от {pizza.price} ₽
                  </div>
                  <button
                    onClick={() => onAddPizza(pizza)}
                    className="btn btn-outline-danger px-3 py-2 fw-bold rounded-pill border-2 d-flex align-items-center gap-1"
                    style={{ color: "#fe5f1e", borderColor: "#fe5f1e" }}
                  >
                    <span>+ Добавить</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PizzaPage;