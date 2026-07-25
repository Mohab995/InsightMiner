"use client";

import { useState } from "react";
import api from "@/services/api";

export default function ImportForm() {
  const [packageName, setPackageName] = useState("com.whatsapp");
  const [country, setCountry] = useState("us");
  const [reviewCount, setReviewCount] = useState(100);
  const [loading, setLoading] = useState(false);

  const importReviews = async () => {
    try {
      setLoading(true);

      const response = await api.get(`/reviews/${packageName}`);

      console.log(response.data);

      alert(`Imported ${response.data.count} reviews successfully!`);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch reviews.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h1 className="text-4xl font-bold text-center">
        InsightMiner
      </h1>

      <p className="text-center text-gray-500 mt-2">
        AI Powered Market Research
      </p>

      <div className="mt-8">
        <label className="block font-semibold mb-2">
          Google Play Package
        </label>

        <input
          value={packageName}
          onChange={(e) => setPackageName(e.target.value)}
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div className="mt-6">
        <label className="block font-semibold mb-2">
          Country
        </label>

        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full border rounded-lg p-3"
        >
          <option value="us">US</option>
          <option value="eg">Egypt</option>
          <option value="gb">United Kingdom</option>
        </select>
      </div>

      <div className="mt-6">
        <label className="block font-semibold mb-2">
          Number of Reviews
        </label>

        <input
          type="number"
          value={reviewCount}
          onChange={(e) => setReviewCount(Number(e.target.value))}
          className="w-full border rounded-lg p-3"
        />
      </div>

      <button
        onClick={importReviews}
        disabled={loading}
        className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg disabled:bg-gray-400"
      >
        {loading ? "Importing..." : "Import Reviews"}
      </button>
    </div>
  );
}