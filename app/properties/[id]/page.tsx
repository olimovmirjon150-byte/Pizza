"use client";

import axios from "axios";
import { Bath, BedDouble, MapPin, Square } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import MainHeader from "../../_components/MainHeader";
import Footer from "@/app/_components/Footer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type PropertyType = {
  id: string;
  title: string;
  description: string;
  price: number;
  type: string;
  status: string;
  location: string;
  rooms: number;
  bathrooms: number;
  area: number;
  images: string[];
};

export default function PropertyDetailsPage() {
  const params = useParams();

  const [property, setProperty] =
    useState<PropertyType | null>(null);

  const [loading, setLoading] = useState(true);

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getProperty();
  }, []);

  const getProperty = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/properties/${params.id}`
      );

      setProperty(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-indigo-950 text-white">
        Loading...
      </div>
    );
  }

  if (!property) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-indigo-950 text-white">
        Property not found
      </div>
    );
  }

const handleOrder = async () => {
  try {
    const newOrder = {
      id: Date.now().toString(),
      propertyId: property.id,
      propertyTitle: property.title,
      customerName,
      customerPhone,
      customerEmail,
      message,
      status: "Pending",
      createdAt: new Date().toISOString(),
    };

    await axios.post(
      "http://localhost:4000/orders",
      newOrder
    );

    alert("Order submitted successfully ✅");

    setCustomerName("");
    setCustomerPhone("");
    setCustomerEmail("");
    setMessage("");

    setOpen(false); // <-- DIALOGNI YOPADI
  } catch (error) {
    console.log(error);
    alert("Failed to submit order ❌");
  }
};

  return (
    <div className="min-h-screen bg-indigo-950 text-white">
      <MainHeader />

      <section className="px-6 pb-20 pt-36">
        <div className="mx-auto max-w-7xl">

          {/* IMAGES */}
          <div className="grid gap-4 lg:grid-cols-2">

            <img
              src={property.images?.[0]}
              alt={property.title}
              className="h-125 w-full rounded-[30px] object-cover"
            />

            <div className="grid gap-4">

              {property.images
                ?.slice(1, 3)
                .map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={property.title}
                    className="h-60.5 w-full rounded-[30px] object-cover"
                  />
                ))}
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-10 grid gap-10 lg:grid-cols-3">

            {/* LEFT */}
            <div className="lg:col-span-2">

              <h1 className="text-5xl font-black">
                {property.title}
              </h1>

              <p className="mt-4 flex items-center gap-2 text-gray-400">
                <MapPin size={18} />
                {property.location}
              </p>

              {/* FEATURES */}
              <div className="mt-8 flex flex-wrap gap-4">

                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <BedDouble size={20} />
                  <p className="mt-2">
                    {property.rooms} Rooms
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <Bath size={20} />
                  <p className="mt-2">
                    {property.bathrooms} Baths
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <Square size={20} />
                  <p className="mt-2">
                    {property.area} m²
                  </p>
                </div>

              </div>

              {/* DESCRIPTION */}
              <div className="mt-10">

                <h2 className="text-3xl font-bold">
                  Description
                </h2>

                <p className="mt-5 leading-8 text-gray-400">
                  {property.description}
                </p>

              </div>
            </div>

            {/* SIDEBAR */}
            <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <p className="text-gray-400">
                Property Price
              </p>

              <h2 className="mt-3 text-5xl font-black text-cyan-400">
                ${property.price.toLocaleString()}
              </h2>

              <div className="mt-8! space-y-4">

                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Type
                  </span>

                  <span className="mt-2">
                    {property.type}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Status
                  </span>

                  <span>
                    {property.status}
                  </span>
                </div>

              </div>

               <Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
  <button className="mt-15! w-full rounded-2xl! bg-linear-to-r from-cyan-400 to-blue-600 py-4 font-semibold text-white transition hover:opacity-90">
    Buy Now
  </button>
</DialogTrigger>

  <DialogContent className="w-[95%] max-w-md rounded-[30px] border border-white/10 bg-indigo-950 text-white max-h-[85vh] overflow-y-auto">

    <DialogHeader>
      <DialogTitle className="text-center text-2xl font-black text-white">
        Buy Property
      </DialogTitle>
    </DialogHeader>

    <div className="mt-4 space-y-4">

      {/* FULL NAME */}
      <div>
        <label className="mb-2 block text-sm text-gray-400">
          Full Name
        </label>

        <input
          type="text"
          placeholder="John Doe"
          value={customerName}
          onChange={(e) =>
            setCustomerName(e.target.value)
          }
          className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-gray-500"
        />
      </div>

      {/* PHONE */}
      <div>
        <label className="mb-2 block text-sm text-gray-400">
          Phone Number
        </label>

        <input
          type="text"
          placeholder="+998901234567"
          value={customerPhone}
          onChange={(e) =>
            setCustomerPhone(e.target.value)
          }
          className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-gray-500"
        />
      </div>

      {/* EMAIL */}
      <div>
        <label className="mb-2 block text-sm text-gray-400">
          Email Address
        </label>

        <input
          type="email"
          placeholder="example@gmail.com"
          value={customerEmail}
          onChange={(e) =>
            setCustomerEmail(e.target.value)
          }
          className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-gray-500"
        />
      </div>

      {/* MESSAGE */}
      <div>
        <label className="mb-2 block text-sm text-gray-400">
          Message
        </label>

        <textarea
          rows={3}
          placeholder="I want to buy this property..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white outline-none placeholder:text-gray-500"
        />
      </div>

      {/* PROPERTY CARD */}
      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">

        <p className="text-xs uppercase tracking-wider text-gray-400">
          Selected Property
        </p>

        <h3 className="mt-2 text-lg font-bold text-white">
          {property.title}
        </h3>

        <p className="mt-1 text-sm text-gray-300">
          📍 {property.location}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm text-gray-300">
            {property.type}
          </span>

          <span className="text-xl font-black text-cyan-400">
            $
            {property.price.toLocaleString()}
          </span>
        </div>

      </div>

      {/* BUTTON */}
      <button
        onClick={handleOrder}
        className="w-full rounded-2xl! bg-linear-to-r from-cyan-400 to-blue-600 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
      >
        Submit Order
      </button>

    </div>

  </DialogContent>
               </Dialog>

            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};