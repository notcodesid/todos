import { Navbar } from "@/components/appbar";
import FeatureSection from "@/components/FeatureSection";
import { HeroSection } from "@/components/herosection";
import { ImageEffect } from "@/components/image";
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
   </div>
   </>
  );
}
