
import { Appbar } from "@/components/appbar";
import FeatureSection from "@/components/features";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/herosection";
import { ImageEffect } from "@/components/image";
import { Reviews } from "@/components/reviews";
export default function Home() {
  return (
    <>
       <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
    <Appbar />
    <HeroSection />
    <ImageEffect /> 
   <FeatureSection />
    <Reviews />
    <Footer />
    </div>
    </>
  );
}
