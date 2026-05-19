import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      
      <div className="w-full max-w-5xl bg-white rounded-[40px] p-10 shadow-sm border border-orange-100 relative overflow-hidden">

        {/* Background Blur */}
        <div className="absolute w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30 -top-20 -right-20" />

        <div className="absolute w-72 h-72 bg-yellow-100 rounded-full blur-3xl opacity-30 -bottom-20 -left-20" />

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left */}
          <div className="max-w-xl">
            <p className="text-orange-500 font-semibold text-lg">
              🍕 PIZZA SHOP Admin
            </p>

            <h1 className="text-5xl font-black text-gray-900 leading-tight mt-4">
              Добро пожаловать <br /> в админ панель
            </h1>

            <p className="text-gray-500 text-lg mt-6 leading-relaxed">
              Управляйте пиццами, заказами и контентом вашего магазина 
              в одном удобном месте.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
                <Link href="/admin/pizzas">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-4 rounded-2xl! font-semibold transition">
                Все пиццы
              </button>
                </Link>
                
                <Link href="/admin/create">
                <button className="border border-orange-200 hover:bg-orange-50 text-orange-500 px-7 py-4 rounded-2xl! font-semibold transition">
                Создать пиццу
                </button>
                </Link>

            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="w-80 h-80 bg-orange-100 rounded-full flex items-center justify-center shadow-inner">
              
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop"
                alt="pizza"
                className="w-64 h-64 object-cover rounded-full shadow-2xl hover:scale-105 transition duration-300"
              />
            </div>

            {/* Floating Cards */}
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page;