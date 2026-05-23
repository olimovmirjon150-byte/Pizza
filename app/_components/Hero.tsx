import Link from "next/link";

const Hero = () => {
  return (
<section className="relative overflow-hidden px-6 pb-24 pt-32 text-white bg-indigo-950">
  
  {/* LIGHT EFFECTS */}
  <div className="absolute left-[10%] top-[20%] h-75 w-75 rounded-full bg-cyan-500/20! blur-[120px]" />
  
  <div className="absolute right-[10%] top-[10%] h-62.5 w-62.5 rounded-full bg-blue-500/20! blur-[120px]" />

  <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
    
    {/* LEFT CONTENT */}
    <div className="relative z-10">
      
      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20! bg-cyan-400/10 px-5! py-2 text-sm text-cyan-300! backdrop-blur-lg">
        🔥 Premium Real Estate Platform
      </span>

      <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
        Find Your
        <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {" "}
          Dream Home
        </span>
        <br />
        In Uzbekistan
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
        Discover luxury apartments, modern villas, and affordable
        rental homes with the most advanced real estate platform.
      </p>

      {/* BUTTONS */}
      <div className="mt-10 flex flex-wrap items-center gap-5">
        
        <Link href="/properties">
          <button className="rounded-2xl! bg-linear-to-r from-cyan-400 to-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-2xl shadow-cyan-500/20 transition hover:scale-105">
            Explore Properties
          </button>
        </Link>
        
      </div>

      {/* STATS */}
      <div className="mt-16 flex flex-wrap gap-10">
        
        <div>
          <h2 className="text-4xl font-black text-white">12K+</h2>
          <p className="mt-2 text-gray-400">
            Premium Properties
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-black text-white">8K+</h2>
          <p className="mt-2 text-gray-400">
            Happy Customers
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-black text-white">15+</h2>
          <p className="mt-2 text-gray-400">
            Cities Available
          </p>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="relative">
      
      {/* MAIN IMAGE */}
      <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
        
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="h-162.5 w-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

        {/* FLOATING CARD */}
        <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
          
          <div className="flex items-center justify-between">
            
            <div>
              <h3 className="text-2xl font-bold">
                Modern Villa
              </h3>

              <p className="mt-2 text-gray-300">
                📍 Tashkent, Uzbekistan
              </p>
            </div>

            <div className="rounded-2xl bg-cyan-400/20 px-5 py-3 text-cyan-300">
              Featured
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            
            <div className="flex gap-6 text-sm text-gray-300">
              <span>🛏 4 Rooms</span>
              <span>🛁 2 Baths</span>
              <span>📐 240m²</span>
            </div>

            <h2 className="text-3xl font-black text-white">
              $450K
            </h2>
          </div>
        </div>
      </div>

      {/* SMALL FLOATING BOX */}
      <div className="absolute -left-10 top-10 hidden rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-2xl xl:block">
        
        <p className="text-sm text-gray-300">
          Trusted By
        </p>

        <h2 className="mt-2 text-3xl font-black">
          10,000+
        </h2>

        <p className="mt-1 text-sm text-cyan-300">
          Customers
        </p>
      </div>

      {/* SMALL FLOATING BOX */}
      <div className="absolute -bottom-10 right-10 hidden rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-2xl xl:block">
        
        <p className="text-sm text-gray-300">
          Average Rating
        </p>

        <h2 className="mt-2 text-3xl font-black">
          4.9 ⭐
        </h2>

        <p className="mt-1 text-sm text-cyan-300">
          Excellent Reviews
        </p>
      </div>
    </div>
  </div>
</section>
  );
};

export default Hero;