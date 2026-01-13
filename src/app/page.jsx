import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import CategoriesSection from "@/components/sections/CategoriesSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import HeroSection from "@/components/sections/HeroSection";
import Newsletter from "@/components/sections/Newsletter";
import PromoBanner from "@/components/sections/PromoBanner";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <FeaturedProducts></FeaturedProducts>
      <WhyChooseUs></WhyChooseUs>
      <CategoriesSection></CategoriesSection>
      <Testimonials></Testimonials>
      <PromoBanner></PromoBanner>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </main>
  );
}
