"use client";

import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = () => {
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-indigo-950 px-6 pb-24 pt-36 text-white">
      
      {/* SUCCESS MESSAGE */}
      {showMessage && (
        <div className="fixed right-6 top-28 z-50 animate-[slide_0.4s_ease] rounded-3xl border border-cyan-400/20 bg-black/70 px-6 py-5 shadow-2xl backdrop-blur-2xl">
          
          <div className="flex items-center gap-4">
            
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
              <CheckCircle2 size={30} />
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Success
              </h3>

              <p className="mt-1 text-sm text-gray-300">
                So‘rovingiz yuborildi ✅
              </p>
            </div>
          </div>
        </div>
      )}

      {/* LIGHT EFFECTS */}
      <div className="absolute left-0 top-0 h-87.5 w-87.5 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-87.5 w-87.5 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        
        {/* TOP */}
        <div className="text-center">
          
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl">
            Contact NestUz
          </span>

          <h1 className="mt-8! text-5xl font-black md:text-6xl">
            Let’s Get In
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Touch
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Have questions about properties or renting homes?
            Contact our support team anytime.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          
          {/* LEFT */}
          <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
            
            <h2 className="text-3xl font-black">
              Contact Information
            </h2>

            <p className="mt-4 leading-8 text-gray-400">
              Reach out to us using the information below.
            </p>

            <div className="mt-12 space-y-6">
              
              <div className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-5">
                
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <Phone size={28} />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Phone Number
                  </p>

                  <p className="mt-1 text-lg font-semibold">
                    +998 97 301 88 01
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-5">
                
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <Mail size={28} />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Email Address
                  </p>

                  <p className="mt-1 text-lg font-semibold">
                    mirjonolimov@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-5">
                
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <MapPin size={28} />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Location
                  </p>

                  <p className="mt-1 text-lg font-semibold">
                    Bukhara, Uzbekistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
            
            <h2 className="text-3xl font-black">
              Send Message
            </h2>

            <p className="mt-4 leading-8 text-gray-400">
              Fill out the form below and we’ll contact you soon.
            </p>

            <div className="mt-10 space-y-5">
              
              <input
                type="text"
                placeholder="Your Name"
                className="h-16 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none placeholder:text-gray-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="h-16 mt-5 mb-5 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none placeholder:text-gray-500"
              />

              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-white outline-none placeholder:text-gray-500"
              />

              <button
                onClick={handleSubmit}
                className="flex h-16 mt-5 w-full items-center justify-center gap-3! rounded-2xl! bg-linear-to-r from-cyan-400 to-blue-600 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
              >
                Send Message
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}