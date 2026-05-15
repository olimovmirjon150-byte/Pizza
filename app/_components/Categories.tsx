// const Categories = () => {
//   return (
//     <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-10 mt-5">
      
//       {/* Categories */}
//       <div className="flex flex-wrap gap-3">
//         <button className="px-5 py-2 rounded-full! bg-black text-white text-sm font-medium transition">
//           Все
//         </button>

//         <button className="px-5 py-2 rounded-full! bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition">
//           Мясные
//         </button>

//         <button className="px-5 py-2 rounded-full! bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition">
//           Вегетарианская
//         </button>

//         <button className="px-5 py-2 rounded-full! bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition">
//           Гриль
//         </button>

//         <button className="px-5 py-2 rounded-full! bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition">
//           Острые
//         </button>

//         <button className="px-5 py-2 rounded-full! bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition">
//           Закрытые
//         </button>
//       </div>

//       {/* Sort */}
//       <div className="flex items-center gap-3">
//         <p className="text-sm text-gray-500">
//           Сортировка:
//         </p>

//         <select className="px-4 py-2 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:ring-2 focus:ring-black transition shadow-sm">
//           <option>популярности</option>
//           <option>по цене</option>
//           <option>по алфавиту</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default Categories;

"use client";
import { useState, useEffect } from "react";

interface CategoryItem {
  id: string | number;
  name: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(0);
  const sortList = ["популярности", "по цене", "по алфавиту"];

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://68f11ffe0b966ad50035753d.mockapi.io/categories",
        );
        if (!response.ok) throw new Error("Maʼlumot olishda xatolik");
        const data: CategoryItem[] = await response.json();
        setCategories([{ id: "all", name: "Все" }, ...data]);
      } catch (error) {
        console.error("Xatolik:", error);
      }
    };
    fetchCategories();
  }, []);

  const onSelectSort = (index: number) => {
    setSelectedSort(index);
    setIsOpen(false);
  };

  return (
    <div className="d-flex justify-content-between align-items-center my-4 py-2 container">
      <div className="d-flex gap-2 flex-wrap">
        {categories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => setActiveIndex(index)}
            className={`btn px-4 py-2 fw-bold ${
              activeIndex === index
                ? "bg-dark text-white"
                : "btn-light text-dark"
            }`}
            style={{
              borderRadius: "30px",
              fontSize: "16px",
              backgroundColor: activeIndex === index ? "#282828" : "#f9f9f9",
              border: "none",
              transition: "background-color 0.2s ease",
            }}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="position-relative d-flex align-items-center gap-2">
        <span className="fw-bold" style={{ fontSize: "14px" }}>
          <i
            className={`bi bi-caret-${isOpen ? "down" : "up"}-fill me-1`}
            style={{ transition: "0.2s" }}
          ></i>
          Сортировка по:
        </span>
        <span
          onClick={() => setIsOpen(!isOpen)}
          style={{
            color: "#fe5f1e",
            cursor: "pointer",
            fontSize: "14px",
            borderBottom: "1px dotted #fe5f1e",
            fontWeight: "500",
          }}
        >
          {sortList[selectedSort]}
        </span>

        {isOpen && (
          <div
            className="position-absolute shadow-lg bg-white py-2"
            style={{
              top: "35px",
              right: 0,
              borderRadius: "10px",
              zIndex: 100,
              width: "160px",
            }}
          >
            <ul className="list-unstyled mb-0">
              {sortList.map((name, i) => (
                <li
                  key={i}
                  onClick={() => onSelectSort(i)}
                  className={`px-3 py-2 ${selectedSort === i ? "text-danger fw-bold" : ""}`}
                  style={{
                    cursor: "pointer",
                    fontSize: "14px",
                    backgroundColor:
                      selectedSort === i
                        ? "rgba(254, 95, 30, 0.05)"
                        : "transparent",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      selectedSort === i
                        ? "rgba(254, 95, 30, 0.05)"
                        : "transparent")
                  }
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;