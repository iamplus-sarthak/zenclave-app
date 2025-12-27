import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhyZenclave from "@/components/WhyZenclave";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <WhyZenclave />
      <Newsletter />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}
