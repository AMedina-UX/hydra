import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TechSection from "@/components/TechSection";
import ProcessSection from "@/components/ProcessSection";
import OptInSection from "@/components/OptInSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[var(--background)] w-full flex justify-center flex-col items-center">
      <div className="w-full max-w-[1440px] relative">
        <Header />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TechSection />
        <ProcessSection />
        <OptInSection />
        <FooterSection />
      </div>
    </main>
  );
}
