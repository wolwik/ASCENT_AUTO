import FancyLine from "./FancyLine";
import SportCars from "./cars/SportCars";
import LuxuryCars from "./cars/LuxuryCars";
import SUVCars from "./cars/SUVCars";

export default function CarsSection() {
  return (
    <section
      id="cars_offer"
      className="bg-[var(--beige)] relative flex justify-center w-full"
    >
      <FancyLine />
      <div className="flex flex-col min-h-dvh w-[80%] ">
        <SportCars />
        <LuxuryCars />
        <SUVCars />
      </div>
    </section>
  );
}
