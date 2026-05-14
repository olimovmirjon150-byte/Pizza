const Products = () => {
  return (
    <div className="flex justify-center items-center mt-5">
     <div className="w-80 bg-gray-100 rounded-3xl p-4">
  
  {/* Image */}
  <div className="flex justify-center">
    <img
      src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop"
      alt="pizza"
      className="w-52 h-52 object-cover rounded-full hover:scale-105 transition duration-300"
    />
  </div>

  {/* Title */}
  <h2 className="text-center text-xl font-bold mt-4">
    Чизбургер-пицца
  </h2>

  {/* Options */}
  <div className="bg-gray-100 rounded-2xl p-2 mt-4">
    
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
  <div className="flex items-center justify-between mt-5">
    
    <p className="text-2xl font-bold">
      от 395 ₽
    </p>

    <button className="flex items-center gap-2 border border-orange-500 text-orange-500 px-4 py-2 rounded-full! font-semibold hover:bg-orange-500! hover:text-white transition">
      + Добавить
    </button>
  </div>
     </div> 
</div>
  );
};

export default Products;