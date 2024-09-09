import { Navbar } from "@/components/appbar";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/herosection";
import { ImageEffect } from "@/components/image";
import { MarqueeDemo } from "@/components/reviews";
import { StarEffect } from "@/components/starteffect";
export default function Home() {
  return (
   <>
   <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
    <StarEffect/>
   <Navbar/>
   <HeroSection/>
   <ImageEffect />
   <FeatureSection />
   <MarqueeDemo />
   <Footer />
   </div>
   </>
  );
}
