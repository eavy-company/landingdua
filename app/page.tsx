import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Therapists from "@/components/Therapists";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="min-h-screen relative bg-[#FAF8F5]">
        <Hero />
        <Logos />
        <Services />
        <About />
        <Process />
        <Therapists />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Blog />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
