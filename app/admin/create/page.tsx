"use client";

import axios from "axios";
import { ImagePlus, X } from "lucide-react";
import { useState } from "react";

export default function CreatePropertyPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [rooms, setRooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [area, setArea] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  // IMAGE URLS
  const [images, setImages] = useState([
    "",
    "",
    "",
  ]);

  // HANDLE IMAGE URL
  const handleImageChange = (
    index: number,
    value: string
  ) => {
    const updatedImages = [...images];

    updatedImages[index] = value;

    setImages(updatedImages);
  };

  // REMOVE IMAGE
  const removeImage = (index: number) => {
    const updatedImages = [...images];

    updatedImages[index] = "";

    setImages(updatedImages);
  };

  // CREATE PROPERTY
  const handleCreateProperty = async () => {
    try {
      const validImages = images.filter(
        (img) => img.trim() !== ""
      );

      if (validImages.length !== 3) {
        return alert(
          "Please enter exactly 3 image URLs"
        );
      }

      const newProperty = {
        id: Date.now().toString(),

        title,
        description,

        price: Number(price),

        type,
        status,
        location,

        rooms: Number(rooms),
        bathrooms: Number(bathrooms),
        area: Number(area),

        images: validImages,
      };

      await axios.post(
        "http://localhost:4000/properties",
        newProperty
      );

      alert("Property created successfully ✅");

      // RESET
      setTitle("");
      setDescription("");
      setPrice("");
      setLocation("");
      setRooms("");
      setBathrooms("");
      setArea("");
      setType("");
      setStatus("");

      setImages(["", "", ""]);
    } catch (error) {
      console.log(error);

      alert("Failed to create property ❌");
    }
  };

  return (
    <section>
      
      {/* TOP */}
      <div className="mb-10">
        
        <h1 className="text-4xl font-black text-white">
          Add Property
        </h1>

        <p className="mt-2 text-gray-400">
          Upload a new property to NestUz
        </p>
      </div>

      {/* FORM */}
      <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
        
        <div className="grid gap-6 md:grid-cols-2">
          
          {/* TITLE */}
          <div>
            <p className="mb-3 text-sm text-gray-400">
              Property Title
            </p>

            <input
              type="text"
              placeholder="Modern Villa"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none placeholder:text-gray-500"
            />
          </div>

          {/* PRICE */}
          <div>
            <p className="mb-3 text-sm text-gray-400">
              Price
            </p>

            <input
              type="number"
              placeholder="450000"
              value={price}
              onChange={(e) =>
                setPrice(e.target.value)
              }
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none placeholder:text-gray-500"
            />
          </div>

          {/* TYPE */}
          <div>
            <p className="mb-3 text-sm text-gray-400">
              Property Type
            </p>

            <input
              type="text"
              placeholder="Villa"
              value={type}
              onChange={(e) =>
                setType(e.target.value)
              }
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none placeholder:text-gray-500"
            />
          </div>

          {/* STATUS */}
          <div>
            <p className="mb-3 text-sm text-gray-400">
              Status
            </p>

            <input
              type="text"
              placeholder="Sale"
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none placeholder:text-gray-500"
            />
          </div>

          {/* LOCATION */}
          <div>
            <p className="mb-3 text-sm text-gray-400">
              Location
            </p>

            <input
              type="text"
              placeholder="Tashkent"
              value={location}
              onChange={(e) =>
                setLocation(e.target.value)
              }
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none placeholder:text-gray-500"
            />
          </div>

          {/* ROOMS */}
          <div>
            <p className="mb-3 text-sm text-gray-400">
              Rooms
            </p>

            <input
              type="number"
              placeholder="4"
              value={rooms}
              onChange={(e) =>
                setRooms(e.target.value)
              }
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none placeholder:text-gray-500"
            />
          </div>

          {/* BATHROOMS */}
          <div>
            <p className="mb-3 text-sm text-gray-400">
              Bathrooms
            </p>

            <input
              type="number"
              placeholder="2"
              value={bathrooms}
              onChange={(e) =>
                setBathrooms(e.target.value)
              }
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none placeholder:text-gray-500"
            />
          </div>

          {/* AREA */}
          <div>
            <p className="mb-3 text-sm text-gray-400">
              Area (m²)
            </p>

            <input
              type="number"
              placeholder="240"
              value={area}
              onChange={(e) =>
                setArea(e.target.value)
              }
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-6">
          
          <p className="mb-3 text-sm text-gray-400">
            Description
          </p>

          <textarea
            rows={6}
            placeholder="Property description..."
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-white outline-none placeholder:text-gray-500"
          />
        </div>

        {/* IMAGE URL INPUTS */}
        <div className="mt-6">
          
          <p className="mb-3 text-sm text-gray-400">
            Property Images (3 URLs)
          </p>

          <div className="space-y-4">
            
            {images.map((image, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                
                <div className="flex items-center gap-3">
                  
                  <ImagePlus
                    size={20}
                    className="text-cyan-300"
                  />

                  <input
                    type="text"
                    placeholder={`Image URL ${index + 1}`}
                    value={image}
                    onChange={(e) =>
                      handleImageChange(
                        index,
                        e.target.value
                      )
                    }
                    className="h-12 w-full bg-transparent text-white outline-none placeholder:text-gray-500"
                  />

                  {image && (
                    <button
                      onClick={() =>
                        removeImage(index)
                      }
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>

                {/* PREVIEW */}
                {image && (
                  <img
                    src={image}
                    alt=""
                    className="mt-4 h-40 w-full rounded-2xl object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={handleCreateProperty}
          className="mt-8! flex h-14 w-full items-center justify-center rounded-2xl! bg-linear-to-r from-cyan-400 to-blue-600 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.01]"
        >
          Create Property
        </button>
      </div>
    </section>
  );
}