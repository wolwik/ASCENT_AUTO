import CardsContainer from "./CardsContainer.jsx";
import CARS from "./CARS.js";

export default function LuxuryCars() {
  return (
    <div className="mb-12">
      <div className="my-8">
        <h3 className="font-alkalami text-4xl">luxury cars</h3>
        <h4 className="text-xl">
          perfect for special occasions. comfort and prestige in every detail.
        </h4>
      </div>
      <CardsContainer list={CARS.filter((car) => car.type === "luxury")} />
    </div>
  );
}
