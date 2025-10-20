import CardsContainer from "./CardsContainer.jsx";
import CARS from "./CARS.js";

/*
const LUXURYCARS = [
  {
    id: 1,
    img: "./images/luxury_cars_img/maybach.png",
    hdr: "Mercedes-Benz",
    subt: "Maybach Classe S",
  },
  {
    id: 2,
    img: "./images/luxury_cars_img/i7.png",
    hdr: "BMW",
    subt: "i7",
  },
  {
    id: 3,
    img: "./images/luxury_cars_img/classec.png",
    hdr: "Mercedes-Benz",
    subt: "Classe C",
  },
  {
    id: 4,
    img: "./images/luxury_cars_img/cle.png",
    hdr: "Mercedes-Benz",
    subt: "CLE Cabriolet",
  },
  {
    id: 5,
    img: "./images/luxury_cars_img/ghost.png",
    hdr: "Rolls-Royce",
    subt: "Ghost",
  },
  {
    id: 6,
    img: "./images/luxury_cars_img/spur.png",
    hdr: "Bentley",
    subt: "Flying Spur",
  },
];
*/

export default function LuxuryCars() {
  return (
    <>
      <h3>luxury cars</h3>
      <h4>
        perfect for special occasions. comfort and prestige in every detail.
      </h4>
      <CardsContainer list={CARS.filter((car) => car.type === "luxury")} />
    </>
  );
}
