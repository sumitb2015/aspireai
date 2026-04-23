import HeroSection from "@/components/home/HeroSection";
import TrustedBySection from "@/components/home/TrustedBySection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import ProductsSection from "@/components/home/ProductsSection";
import TechStackSection from "@/components/home/TechStackSection";
import TrustSection from "@/components/home/TrustSection";
import BlogPreviewSection from "@/components/home/BlogPreviewSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <TechStackSection />
      <TrustSection />
      <BlogPreviewSection />
      <CTASection />
    </>
  );
}
