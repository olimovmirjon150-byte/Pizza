"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, Pizza } from "lucide-react";

const Page = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {
      router.push("/admin");
    } else {
      alert("Неверный email или пароль");
    }
  };

  return (
    <div className="min-h-screen bg-orange-500 flex items-center justify-center px-5 overflow-hidden relative">

      {/* Background Blur */}
      <div className="absolute w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-30 -top-25 -left-25" />

      <div className="absolute w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-30 -bottom-25 -right-25" />

      {/* Card */}
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-[35px] p-8 shadow-2xl">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
            <Pizza size={38} className="text-orange-500" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-white">
          Admin Login
        </h2>

        <p className="text-orange-100 text-center mt-3">
          Войдите в панель управления PIZZA SHOP
        </p>

        {/* Inputs */}
        <div className="mt-8 space-y-5">

          {/* Email */}
          <div className="relative">
            <Mail
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-200"
            />

            <input
              type="email"
              placeholder="Введите email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-14 rounded-2xl bg-white/10 border border-white/20 pl-12 pr-4 text-white placeholder:text-orange-100 outline-none focus:border-white transition"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-200"
            />

            <input
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-14 rounded-2xl bg-white/10 border border-white/20 pl-12 pr-4 text-white placeholder:text-orange-100 outline-none focus:border-white transition"
            />
          </div>

          {/* Button */}
          <button
            onClick={handleLogin}
            className="w-full h-14 rounded-2xl! bg-white text-orange-500 font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition"
          >
            Войти
          </button>
        </div>

        {/* Demo */}
        <div className="mt-6 bg-white/10 rounded-2xl p-4 text-sm text-orange-100">
          <p>
            <span className="font-bold text-white">
              Email:
            </span>{" "}
            admin@gmail.com
          </p>

          <p className="mt-1">
            <span className="font-bold text-white">
              Пароль:
            </span>
            admin123
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;