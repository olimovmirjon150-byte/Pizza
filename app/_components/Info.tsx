const Info = () => {
  return (
<section className="relative overflow-hidden bg-indigo-950 px-6 py-32 text-white">
  
  {/* LIGHT EFFECTS */}
  <div className="absolute left-0 top-0 h-87.5 w-87.5 rounded-full bg-cyan-500/10 blur-[140px]" />
  
  <div className="absolute bottom-0 right-0 h-87.5 w-87.5 rounded-full bg-blue-500/10 blur-[140px]" />

  <div className="relative mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
    
    {/* IMAGE SIDE */}
    <div className="relative">
      
      {/* MAIN IMAGE */}
      <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-2xl">
        
        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="h-162.5 w-full object-cover"
        />
      </div>

      {/* FLOATING CARD */}
      <div className="absolute -bottom-10 left-1/2 w-[90%] -translate-x-1/2 rounded-[30px] border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
        
        <div className="flex items-center justify-between">
          
          <div>
            <p className="text-sm text-gray-300">
              Trusted Customers
            </p>

            <h2 className="mt-2 text-4xl font-black">
              12,000+
            </h2>
          </div>

          <div className="rounded-2xl bg-cyan-400/20 px-5 py-3 text-cyan-300">
            ⭐ 4.9 Rating
          </div>
        </div>

        <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[85%] rounded-full bg-linear-to-r from-cyan-400 to-blue-600" />
        </div>
      </div>
    </div>

    {/* CONTENT SIDE */}
    <div className="relative z-10">
      
      <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl">
        About NestUz
      </span>

      <h2 className="mt-8! text-5xl font-black leading-tight md:text-6xl">
        We Help You Find
        <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {" "}
          Your Perfect
        </span>
        <br />
        Living Space
      </h2>

      <p className="mt-8! max-w-2xl text-lg leading-8 text-gray-300">
        NestUz makes finding, renting, and buying properties easier
        than ever before. Explore premium apartments, villas,
        and modern homes across Uzbekistan with a beautiful
        and smart platform.
      </p>

      {/* INFO CARDS */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:border-cyan-400/30">
          
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl">
            🏠
          </div>

          <h3 className="text-2xl font-bold">
            Premium Homes
          </h3>

          <p className="mt-3 leading-7 text-gray-400">
            Explore luxury apartments and modern villas with
            advanced search and filtering.
          </p>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:border-cyan-400/30">
          
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl">
            🔒
          </div>

          <h3 className="text-2xl font-bold">
            Secure Platform
          </h3>

          <p className="mt-3 leading-7 text-gray-400">
            Verified listings and trusted property owners for
            safer transactions.
          </p>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:border-cyan-400/30">
          
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl">
            📍
          </div>

          <h3 className="text-2xl font-bold">
            Smart Locations
          </h3>

          <p className="mt-3 leading-7 text-gray-400">
            Discover properties in the best locations across
            major cities in Uzbekistan.
          </p>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:border-cyan-400/30">
          
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl">
            ⚡
          </div>

          <h3 className="text-2xl font-bold">
            Fast Experience
          </h3>

          <p className="mt-3 leading-7 text-gray-400">
            Easy navigation, quick search, and smooth property
            browsing experience.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Info;