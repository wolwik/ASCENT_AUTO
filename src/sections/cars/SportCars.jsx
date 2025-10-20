import CardsContainer from "./CardsContainer.jsx";
import CARS from "./CARS.js";
/*
const SPORTCARS = [
  {
    id: 1,
    img: "./images/sport_cars_img/mc20.png",
    hdr: "Maserati",
    subt: "MC20",
  },
  {
    id: 2,
    img: "./images/sport_cars_img/m4.png",
    hdr: "BMW",
    subt: "M4",
  },
  {
    id: 3,
    img: "./images/sport_cars_img/taycan.png",
    hdr: "Porsche",
    subt: "Taycan",
  },
  {
    id: 4,
    img: "./images/sport_cars_img/huracan.png",
    hdr: "Lamborghini",
    subt: "Huracan EVO",
  },
  {
    id: 5,
    img: "./images/sport_cars_img/supra.png",
    hdr: "Toyota",
    subt: "Supra",
  },
  {
    id: 6,
    img: "./images/sport_cars_img/mustang.png",
    hdr: "Ford",
    subt: "Mustang",
  },
  {
    id: 7,
    img: "./images/sport_cars_img/chiron.png",
    hdr: "Bugatti",
    subt: "Chiron",
  },
  {
    id: 8,
    img: "./images/sport_cars_img/corvette.png",
    hdr: "Chevrolet",
    subt: "Corvette Z06",
  },
];
*/

export default function SportCars() {
  return (
    <>
      <h3>sport cars</h3>
      <h4>adrenaline and speed for true enthusiasts.</h4>
      <CardsContainer list={CARS.filter((car) => car.type === "sport")} />
    </>
  );
}

//const filteredLiczby = liczby.filter((num) => num % 2 == 0); // zostawia tylko parzyste
