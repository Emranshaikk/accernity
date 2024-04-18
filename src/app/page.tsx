import { Main } from "next/document";
import HeroSection from "@/components/HeroSection";
import FeatureCourses from "@/components/FeatureCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchooltestimonials from "@/components/TestimonialCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      <HeroSection />
      <FeatureCourses/>
      <WhyChooseUs/>
      <MusicSchooltestimonials/>
      <UpcomingWebinar/>
      <Instructors/>
      <Footer/>
    </main>
  
  );
}
