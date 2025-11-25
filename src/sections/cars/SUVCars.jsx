import CardsContainer from "./CardsContainer.jsx";
import CARS from "./CARS.js";

export default function SUVCars() {
  return (
    <div className="mb-12">
      <div className="my-8">
        <h3 className="font-alkalami text-4xl">premium SUV’s</h3>
        <h4 className="text-xl">style and space in one package.</h4>
      </div>
      <CardsContainer list={CARS.filter((car) => car.type === "SUV")} />
    </div>
  );
}
