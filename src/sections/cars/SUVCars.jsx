import CardsContainer from "./CardsContainer.jsx";
import CARS from "./CARS.js";
/*
const SUVCARS = [
  {
    id: 1,
    img: "./images/suv_cars_img/cullinan.png",
    hdr: "Rolls Royce",
    subt: "Cullinan",
  },
  {
    id: 2,
    img: "./images/suv_cars_img/urus.png",
    hdr: "Lamborghini",
    subt: "Urus",
  },
  {
    id: 3,
    img: "./images/suv_cars_img/cayenne.png",
    hdr: "Porsche",
    subt: "Cayenne",
  },
  {
    id: 4,
    img: "./images/suv_cars_img/gle.png",
    hdr: "Mercedes",
    subt: "GLE Coupe 450d",
  },
  {
    id: 5,
    img: "./images/suv_cars_img/q5.png",
    hdr: "Audi",
    subt: "Q5",
  },
  {
    id: 6,
    img: "./images/suv_cars_img/classeg.png",
    hdr: "Mercedes-Benz",
    subt: "Classe G",
  },
];
*/
export default function SUVCars() {
  return (
    <>
      <h3>premium SUV’s</h3>
      <h4>style and space in one package.</h4>
      <CardsContainer list={CARS.filter((car) => car.type === "SUV")} />
    </>
  );
}
