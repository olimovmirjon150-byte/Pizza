"use client";

import axios from "axios";
import { Layers3 } from "lucide-react";
import { useState } from "react";

export default function CreateCategoryPage() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] =
    useState("");
  const [icon, setIcon] = useState("");

  const handleCreateCategory = async () => {
    try {
      if (
        !name ||
        !slug ||
        !description ||
        !icon
      ) {
        return alert("Please fill all fields");
      }

      const newCategory = {
        id: Date.now().toString(),
        name,
        slug,
        description,
        icon,
        createdAt: new Date().toISOString(),
      };

      await axios.post(
        "http://localhost:4000/categories",
        newCategory
      );

      alert("Category created successfully ✅");

      // RESET
      setName("");
      setSlug("");
      setDescription("");
      setIcon("");
    } catch (error) {
      console.log(error);

      alert("Failed to create category ❌");
    }
  };

  return (
    <section>
      
      {/* TOP */}
      <div className="mb-10">
        
        <h1 className="text-4xl font-black text-white">
          Create Category
        </h1>

        <p className="mt-2 text-gray-400">
          Add a new property category
        </p>
      </div>

      {/* FORM */}
      <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
        
        {/* ICON */}
        <div className="mb-8 flex justify-center">
          
          <div className="flex h-24 w-24 items-center justify-center rounded-[30px] bg-linear-to-r from-cyan-400 to-blue-600 shadow-2xl shadow-cyan-500/20">
            
            <Layers3 size={45} />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          
          {/* NAME */}
          <div>
            <p className="mb-3 text-sm text-gray-400">
              Category Name
            </p>

            <input
              type="text"
              placeholder="Luxury"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none placeholder:text-gray-500"
            />
          </div>

          {/* SLUG */}
          <div>
            <p className="mb-3 text-sm text-gray-400">
              Slug
            </p>

            <input
              type="text"
              placeholder="luxury"
              value={slug}
              onChange={(e) =>
                setSlug(e.target.value)
              }
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none placeholder:text-gray-500"
            />
          </div>

          {/* ICON */}
          <div>
            <p className="mb-3 text-sm text-gray-400">
              Icon Emoji
            </p>

            <input
              type="text"
              placeholder="✨"
              value={icon}
              onChange={(e) =>
                setIcon(e.target.value)
              }
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-2xl text-white outline-none placeholder:text-gray-500"
            />
          </div>

          {/* PREVIEW */}
          <div>
            <p className="mb-3 text-sm text-gray-400">
              Icon Preview
            </p>

            <div className="flex h-14 items-center rounded-2xl border border-white/10 bg-white/5 px-5 text-3xl">
              {icon || "✨"}
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-6">
          
          <p className="mb-3 text-sm text-gray-400">
            Description
          </p>

          <textarea
            rows={6}
            placeholder="Category description..."
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-white outline-none placeholder:text-gray-500"
          />
        </div>

        {/* BUTTON */}
        <button
          onClick={handleCreateCategory}
          className="mt-8! flex h-14 w-full items-center justify-center rounded-2xl! bg-linear-to-r from-cyan-400 to-blue-600 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.01]"
        >
          Create Category
        </button>
      </div>
    </section>
  );
}