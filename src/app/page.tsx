import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofTicker from "@/components/SocialProofTicker";
import BentoShowcase from "@/components/BentoShowcase";
import ProcessTimeline from "@/components/ProcessTimeline";
import AboutLocalSection from "@/components/AboutLocalSection";
import ProofAndBooking from "@/components/ProofAndBooking";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofTicker />
        <BentoShowcase />
        <AboutLocalSection />
        <ProcessTimeline />
        <ProofAndBooking />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
