import HeroSection from "./sections/HeroSection";
import CarsSection from "./sections/CarsSection";
import InsSection from "./sections/InsSection";
import CompanySection from "./sections/CompanySection";
import ContactSection from "./sections/cars/ContactSection";
import FixedMenu from "./sections/FixedMenu";
import "./globals.css";

export default function App() {
  return (
    <>
      <HeroSection />
      <CarsSection />
      <InsSection />
      <CompanySection />
      <ContactSection />
    </>
  );
}

