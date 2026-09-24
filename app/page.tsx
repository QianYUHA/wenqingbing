import { AboutSection } from "@/components/AboutSection";
import { DiagnosisPreview } from "@/components/DiagnosisPreview";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { PrescriptionSection } from "@/components/PrescriptionSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <DiagnosisPreview />
      <PrescriptionSection />
      <FinalCTA />
    </main>
  );
}
