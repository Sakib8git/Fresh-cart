"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      alert(
        `Thank you ${formData.fullName}! We've received your message and will get back to you soon.`
      );
      setIsLoading(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-green-50">
            We'd love to hear from you. Send us a message!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Contact Information
            </h2>

            {/* Email */}
            <div className="mb-8 flex gap-4">
              <div className="flex-shrink-0">
                <Mail className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">support@freshcart.com</p>
                <p className="text-gray-500 text-sm">
                  We'll respond within 24 hours
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-8 flex gap-4">
              <div className="flex-shrink-0">
                <Phone className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-gray-500 text-sm">Mon-Fri, 9 AM to 6 PM</p>
              </div>
            </div>

            {/* Address */}
            <div className="mb-8 flex gap-4">
              <div className="flex-shrink-0">
                <MapPin className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                <p className="text-gray-600">123 Market Street</p>
                <p className="text-gray-600">City, State 12345</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Clock className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Business Hours
                </h3>
                <p className="text-gray-600">Monday - Friday: 9 AM - 6 PM</p>
                <p className="text-gray-600">Saturday: 10 AM - 4 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm></ContactForm>
        </div>
      </div>

      <Footer />
    </main>
  );
}
