import HeroSection from "./sections/HeroSection";
import CarsSection from "./sections/CarsSection";
import InsSection from "./sections/InsSection";
import CompanySection from "./sections/CompanySection";
import ContactSection from "./sections/ContactSection";
import FixedMenu from "./sections/FixedMenu";
import { useLocation } from "react-router";
import { useEffect } from "react";

export default function App() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behaviour: "smooth" });
    }
  }, [hash]);

  return (
    <>
      <HeroSection />
      <CarsSection />
      <InsSection />
      <CompanySection />
      <ContactSection />
      <FixedMenu />
    </>
  );
}
