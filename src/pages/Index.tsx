import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TransformationSection from "@/components/TransformationSection";
import EnemySection from "@/components/EnemySection";
import MethodSection from "@/components/MethodSection";
import ComparisonSection from "@/components/ComparisonSection";
import OnboardingSection from "@/components/OnboardingSection";
import SalesLogicSection from "@/components/SalesLogicSection";
import OperationSection from "@/components/OperationSection";
import PhrasesSection from "@/components/PhrasesSection";

const Index = () => (
  <main className="min-h-screen bg-white pt-20">
    <Navbar />
    <HeroSection />
    <OnboardingSection />
    <MethodSection />
    <OperationSection />
    <TransformationSection />
    <EnemySection />
    <PhrasesSection />
    <Footer />
  </main>
);

export default Index;
