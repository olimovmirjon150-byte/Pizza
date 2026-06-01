const Page = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden rounded-[40px] border border-white/10 bg-black p-10 text-white">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[140px]" />

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-[75vh] flex-col items-center justify-center text-center">
        
        {/* BADGE */}
        <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl">
          Welcome To NestUz Admin
        </div>

        {/* TITLE */}
        <h1 className="mt-8 max-w-4xl text-6xl font-black leading-tight">
          Manage Your
          <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {" "}
            Properties
          </span>
          <br />
          Like a Professional
        </h1>

        {/* TEXT */}
        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
          Control all properties, categories and listings
          from one powerful dashboard. Fast, modern and
          built for NestUz.
        </p>

        {/* CARDS */}
        <div className="mt-16 grid w-full max-w-5xl gap-6 md:grid-cols-3">
          
          {/* CARD */}
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-white/10">
            
            <h2 className="text-5xl font-black text-cyan-300">
              120+
            </h2>

            <p className="mt-3 text-gray-400">
              Properties Added
            </p>
          </div>

          {/* CARD */}
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-white/10">
            
            <h2 className="text-5xl font-black text-cyan-300">
              15+
            </h2>

            <p className="mt-3 text-gray-400">
              Categories Created
            </p>
          </div>

          {/* CARD */}
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-white/10">
            
            <h2 className="text-5xl font-black text-cyan-300">
              24/7
            </h2>

            <p className="mt-3 text-gray-400">
              Admin Control
            </p>
          </div>
        </div>

        {/* BOTTOM GLOW */}
        <div className="absolute bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[100px]" />
      </div>
    </section>
  );
};

export default Page;