
import BrochureRequestForm from "@/components/BrochureRequestForm";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import DestinationGrid from "@/components/DestinationGrid";
import AdventureTypes from "@/components/AdventureTypes";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto mb-16">
          <BrochureRequestForm />
        </div>
      </div>
      <StatsSection />
      <div className="container mx-auto px-4 py-16">
        <DestinationGrid />
        <div className="my-16 lg:my-24">
          <AdventureTypes />
        </div>
        <div className="my-16 lg:my-24">
          <WhyChooseUs />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
