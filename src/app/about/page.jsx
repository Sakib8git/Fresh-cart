import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CheckCircle2, Leaf, Users, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About FreshCart
          </h1>
          <p className="text-xl text-green-50">
            Delivering Fresh, Quality Groceries to Your Doorstep
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            FreshCart was founded with a simple mission: to make fresh, organic
            groceries accessible to everyone. We believe that quality food
            should not be a luxury, but a necessity that everyone deserves.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Since our inception, we've been committed to partnering with local
            farmers and trusted suppliers to bring the freshest produce directly
            to your table. Every product on our platform is carefully selected
            and quality-checked to ensure you receive only the best.
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Choose FreshCart?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Leaf className="text-green-600" size={32} />
                <h3 className="text-lg font-semibold text-gray-900">
                  100% Fresh
                </h3>
              </div>
              <p className="text-gray-600">
                We source directly from farms, ensuring maximum freshness for
                every item in your cart.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Users className="text-green-600" size={32} />
                <h3 className="text-lg font-semibold text-gray-900">
                  Local Farmers
                </h3>
              </div>
              <p className="text-gray-600">
                We support local farming communities and sustainable agriculture
                practices.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Award className="text-green-600" size={32} />
                <h3 className="text-lg font-semibold text-gray-900">
                  Quality Assured
                </h3>
              </div>
              <p className="text-gray-600">
                Every product undergoes rigorous quality checks before reaching
                your doorstep.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle2 className="text-green-600" size={32} />
                <h3 className="text-lg font-semibold text-gray-900">
                  Reliable Delivery
                </h3>
              </div>
              <p className="text-gray-600">
                Fast and reliable delivery services to ensure your groceries
                arrive fresh and on time.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-green-50 rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-green-600">50K+</p>
              <p className="text-gray-600 text-lg mt-2">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-600">200+</p>
              <p className="text-gray-600 text-lg mt-2">Partner Farmers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-600">10K+</p>
              <p className="text-gray-600 text-lg mt-2">Products Available</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-600">100%</p>
              <p className="text-gray-600 text-lg mt-2">Organic Quality</p>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Team</h2>
          <p className="text-gray-600 text-lg mb-8">
            Our diverse team of dedicated professionals work tirelessly to bring
            you the best shopping experience. From farmers to logistics experts,
            each team member shares our passion for quality and freshness.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg overflow-hidden shadow-sm text-center"
              >
                <div className="w-full h-48 bg-gradient-to-b from-green-100 to-emerald-100 flex items-center justify-center">
                  <span className="text-6xl">👤</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Team Member {item}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">Role & Position</p>
                  <p className="text-gray-500 text-sm">
                    Passionate about delivering quality and excellence in
                    everything we do.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
