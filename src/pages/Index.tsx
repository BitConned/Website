
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import EcosystemSection from "@/components/EcosystemSection";
import TokensSection from "@/components/TokensSection";
import StatsSection from "@/components/StatsSection";
import EventsCalendar from "@/components/EventsCalendar";
import BotSection from "@/components/BotSection";
import RoadmapSection from "@/components/RoadmapSection";
import SecuritySection from "@/components/SecuritySection";
import TokenDistribution from "@/components/TokenDistribution";
import ContractFees from "@/components/ContractFees";
import FAQSection from "@/components/FAQSection";
import AirdropNewsletter from "@/components/AirdropNewsletter";
import Footer from "@/components/Footer";
import AirdropPopup from "@/components/AirdropPopup";
import NewsletterPopup from "@/components/NewsletterPopup";
import CareerFormPopup from "@/components/CareerFormPopup";
import AirdropBanner from "@/components/AirdropBanner";

const Index = () => {
  const [showAirdropPopup, setShowAirdropPopup] = useState(false);
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);
  const [showCareerFormPopup, setShowCareerFormPopup] = useState(false);

  const handleOpenAirdrop = () => {
    setShowAirdropPopup(true);
  };

  const handleOpenNewsletter = () => {
    setShowNewsletterPopup(true);
  };

  const handleOpenCareerForm = () => {
    setShowCareerFormPopup(true);
  };

  // Smooth scrolling for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };

  // Set up anchor click handlers
  useState(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick as unknown as EventListener);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick as unknown as EventListener);
      });
    };
  });

  return (
    <div className="bg-black text-white">
      <Navbar onOpenCareerForm={handleOpenCareerForm} />
      <HeroSection />
      <StatsSection />
      <EcosystemSection />
      <TokensSection />
      <TokenDistribution />
      <ContractFees />
      <EventsCalendar />
      <BotSection />
      <RoadmapSection />
      <SecuritySection />
      <FAQSection />
      <Footer />
      <AirdropBanner onOpenAirdrop={handleOpenAirdrop} />
      
      {/* Popups */}
      <AirdropPopup isOpen={showAirdropPopup} onClose={() => setShowAirdropPopup(false)} />
      <NewsletterPopup isOpen={showNewsletterPopup} onClose={() => setShowNewsletterPopup(false)} />
      <CareerFormPopup isOpen={showCareerFormPopup} onClose={() => setShowCareerFormPopup(false)} />
    </div>
  );
};

export default Index;
