import CardsContainer from "./CardsContainer.jsx";
import CARS from "./CARS.js";

export default function SportCars() {
  return (
    <div className="mb-12">
      <div className="my-8">
        <h3 className="font-alkalami text-4xl">sport cars</h3>
        <h4 className="text-xl">adrenaline and speed for true enthusiasts.</h4>
      </div>
      <CardsContainer list={CARS.filter((car) => car.type === "sport")} />
    </div>
  );
}
