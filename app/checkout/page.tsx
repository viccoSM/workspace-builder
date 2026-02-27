"use client";
import { useWorkspaceStore } from '@/store/workspaceStore'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();

  const { desk, chair, accessories, reset } = useWorkspaceStore();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // hitung total
  const accessoriesTotal = accessories.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const totalPrice =
    (desk?.price || 0) +
    (chair?.price || 0) +
    accessoriesTotal;

  // protection kalau belum lengkap
  if (!desk || !chair) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">
            Your setup is incomplete
          </h2>
          <button
            onClick={() => router.push("/")}
            className="bg-indigo-600 px-4 py-2 rounded-lg"
          >
            Back to Builder
          </button>
        </div>
      </div>
    );
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!name || !isValidEmail) return;

  setLoading(true);
  await new Promise((r) => setTimeout(r, 1500));
  setLoading(false);

  reset();
  setSubmitted(true);
};

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="bg-slate-900 p-8 rounded-2xl text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-2">
            🎉 Setup Reserved!
          </h2>
          <p className="text-slate-400 mb-4">
            Thank you {name}, your workspace is confirmed.
          </p>
          <p className="text-lg font-semibold mb-6">
            Total: ${totalPrice}
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-indigo-600 px-4 py-2 rounded-lg"
          >
            Build Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* Summary */}
        <div className="bg-slate-900 p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold mb-4">
            Order Summary
          </h2>

          <div className="space-y-3 text-slate-300">
            <div className="flex justify-between">
              <span>{desk.name}</span>
              <span>${desk.price}</span>
            </div>

            <div className="flex justify-between">
              <span>{chair.name}</span>
              <span>${chair.price}</span>
            </div>

            {accessories.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-700 my-4"></div>

          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
        </div>

        {/* Form */}
        <div className="bg-slate-900 p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold mb-4">
            Your Information
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 py-2 rounded-lg"
            >
              Confirm Reservation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}