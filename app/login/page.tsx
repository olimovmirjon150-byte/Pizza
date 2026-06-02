"use client";

import { Eye, EyeOff, Lock, ShieldCheck, User2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem("nestuzAdmin") === "true") {
      router.replace("/admin");
    }
  }, [router]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      
      {/* BACKGROUND IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2070&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/80" />

      {/* LIGHT EFFECTS */}
      <div className="absolute left-0 top-0 h-87.5 w-87.5 rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-87.5 w-87.5 rounded-full bg-blue-500/20 blur-[140px]" />

      {/* LOGIN CARD */}
      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-3xl">
        
        {/* TOP */}
        <div className="text-center">
          
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[30px] bg-linear-to-r from-cyan-400 to-blue-600 shadow-2xl shadow-cyan-500/30">
            <ShieldCheck size={50} />
          </div>

          <h1 className="mt-8 text-5xl font-black">
            Login Panel
          </h1>

          <p className="mt-4 text-gray-400">
            Administrator authentication panel
          </p>
        </div>

        {/* DEFAULT LOGIN INFO */}
        <div className="mt-10 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5 backdrop-blur-xl">
          
          <p className="text-sm font-medium text-cyan-300">
            Default Credentials
          </p>

          <div className="mt-4 space-y-2 text-sm text-gray-300">
            
            <p>
              Email:{" "}
              <span className="font-semibold text-white">
                admin@gmail.com
              </span>
            </p>

            <p>
              Password:{" "}
              <span className="font-semibold text-white">
                admin123
              </span>
            </p>
          </div>
        </div>

          {/* FORM */}
        <div className="mt-10 space-y-6">
          
          {/* USERNAME */}
          <div>
            <p className="mb-3 text-sm text-gray-400">
              Email
            </p>

            <div className={"flex h-16 items-center gap-4 rounded-2xl bg-white/5 px-5 backdrop-blur-xl transition " + (error ? "border border-red-500" : "border border-white/10") + " focus-within:border-cyan-400/40"}>

              <User2 className="text-cyan-300" size={22} />

              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); if (error) setError(false); }}
                placeholder="Email..."
                className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
              />
            </div>

          </div>

          {/* PASSWORD */}
          <div>
            <p className="mb-3 text-sm text-gray-400">
              Password
            </p>

            <div className={"flex h-16 items-center gap-4 rounded-2xl bg-white/5 px-5 backdrop-blur-xl transition " + (error ? "border border-red-500" : "border border-white/10") + " focus-within:border-cyan-400/40"}>

              <Lock className="text-cyan-300" size={22} />

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => { setPassword(e.target.value); if (error) setError(false); }}
                placeholder="Password..."
                className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 transition hover:text-white"
              >
                {showPassword ? (
                  <EyeOff size={22} />
                ) : (
                  <Eye size={22} />
                )}
              </button>
            </div>

            {error && (
              <p className="mt-2 text-sm text-red-400">email yoki parol xato</p>
            )}
          </div>

          {/* BUTTON */}
          <div>
            <button
              type="button"
              onClick={() => {
                if (email === "admin@gmail.com" && password === "admin123") {
                  localStorage.setItem("nestuzAdmin", "true");
                  router.push("/admin");
                } else {
                  setError(true);
                }
              }}
              className="mt-4 flex h-16 w-full items-center justify-center gap-2 rounded-2xl! bg-linear-to-r from-cyan-400 to-blue-600 text-sm font-semibold text-white shadow-2xl shadow-cyan-500/30 transition hover:scale-[1.02]"
            >
              <ShieldCheck size={18} />

              Login
            </button>
          </div>
        </div>

        {/* BOTTOM GLOW */}
        <div className="absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[100px]" />
      </div>
    </section>
  );
}