import SportCars from "./cars/SportCars";
import LuxuryCars from "./cars/LuxuryCars";
import SUVCars from "./cars/SUVCars";

export default function CarsSection() {
  return (
    <section id="cars_offer" className="bg-[var(--beige)]">
      <div className="min-h-dvh max-w-9/10 mx-auto">
        <SportCars />
        <LuxuryCars />
        <SUVCars />
      </div>
    </section>
  );
}
