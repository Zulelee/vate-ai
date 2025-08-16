import { Navigation } from "@/components/sections/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ProductVisualsSection } from "@/components/sections/product-visuals-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { Footer } from "@/components/sections/footer";
import { StaticWaves } from "@/components/ui/static-waves";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      {/* Global Static Waves Background */}
      <StaticWaves />

      <Navigation />
      <HeroSection />

      {/* Spacer to push content down and create scroll effect */}
      <div className="h-screen"></div>

      <FeaturesSection />
      {/* <ProductVisualsSection /> */}
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
