import { Leaf, Truck, Shield, TrendingUp } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      icon: Leaf,
      title: "Organic & Fresh",
      description: "All our products are sourced from trusted local farms with no preservatives.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Same-day delivery available for orders placed before 2 PM.",
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "We inspect every item to ensure premium quality and freshness.",
    },
    {
      icon: TrendingUp,
      title: "Best Prices",
      description: "Direct from farmers means better prices for you without middlemen.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose FreshCart?</h2>
          <p className="text-gray-600 text-lg">We're committed to delivering the best grocery experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-green-600" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
