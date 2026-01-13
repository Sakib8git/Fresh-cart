import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Regular Customer",
    content:
      "FreshCart has completely changed how I buy groceries. Everything arrives fresh and the prices are unbeatable!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Busy Professional",
    content:
      "The convenience is amazing. Same-day delivery means I don't have to worry about grocery shopping anymore.",
    rating: 5,
  },
  {
    name: "Emma Davis",
    role: "Health Conscious",
    content: "I love knowing exactly where my produce comes from. All organic, all fresh, all the time.",
    rating: 4.5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 text-lg">Join thousands of happy customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(testimonial.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
