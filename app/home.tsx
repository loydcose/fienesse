import { ContactCard } from "@/components/ContactCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SkinAnalysisSection } from "@/components/SkinAnalysisSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TreatmentsSection } from "@/components/TreatmentsSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="pt-[58px] flex-1">
        <HeroSection />
        <TreatmentsSection />
        <TestimonialsSection />
        <SkinAnalysisSection />
        <ContactCard />
      </main>
      <Footer />
    </div>
  );
}
