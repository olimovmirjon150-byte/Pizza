const Categories = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-10 mt-5">
      
      {/* Categories */}
      <div className="flex flex-wrap gap-3">
        <button className="px-5 py-2 rounded-full! bg-black text-white text-sm font-medium transition">
          Все
        </button>

        <button className="px-5 py-2 rounded-full! bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition">
          Мясные
        </button>

        <button className="px-5 py-2 rounded-full! bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition">
          Вегетарианская
        </button>

        <button className="px-5 py-2 rounded-full! bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition">
          Гриль
        </button>

        <button className="px-5 py-2 rounded-full! bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition">
          Острые
        </button>

        <button className="px-5 py-2 rounded-full! bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition">
          Закрытые
        </button>
      </div>

      {/* Sort */}
      <div className="flex items-center gap-3">
        <p className="text-sm text-gray-500">
          Сортировка:
        </p>

        <select className="px-4 py-2 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:ring-2 focus:ring-black transition shadow-sm">
          <option>популярности</option>
          <option>по цене</option>
          <option>по алфавиту</option>
        </select>
      </div>
    </div>
  );
};

export default Categories;