"use client";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await fetch("/api/feedback");
        if (!res.ok) throw new Error("Failed to fetch feedbacks");
        const data = await res.json();
        setFeedbacks(data);
        // console.log(data);
      } catch (err) {
        console.error("Error fetching feedbacks:", err);
      }
    };
    fetchFeedbacks();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg">
            Join thousands of happy customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedbacks.slice(0, 3).map((fb, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-600 mb-4">
                {fb.messages || fb.message || ""}
              </p>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.floor(fb.rating || 5)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  {fb.name || "Anonymous"}
                </p>
                <p className="text-sm text-gray-500">
                  {fb.category || "Customer"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
