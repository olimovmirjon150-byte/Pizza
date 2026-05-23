import Link from "next/link";

const Footer = () => {
  return (
<footer className="border-t border-white/10 bg-black px-6 py-8 text-white">
  
  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
    
    {/* LOGO */}
    <div>
      <h2 className="text-2xl font-black">
        NestUz
      </h2>

      <p className="mt-2 text-sm text-gray-400">
        Find your dream home easily.
      </p>
    </div>

    {/* CENTER TEXT */}
    <p className="text-sm text-gray-500">
      © 2026 NestUz. All rights reserved.
    </p>

    {/* RIGHT TEXT */}
    <div className="flex items-center gap-6 text-sm text-gray-400">
      <Link className="text-decoration-none" href="/properties">
        <p className="cursor-pointer transition text-gray-400 hover:text-cyan-300">
          Properties
        </p>
      </Link>
      <Link className="text-decoration-none" href="/contact">
        <p className="cursor-pointer transition text-gray-400 hover:text-cyan-300">
          Contact
        </p>
      </Link>
    </div>
  </div>
</footer>
  );
};

export default Footer;