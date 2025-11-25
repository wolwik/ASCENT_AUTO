import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { Link } from "react-router";
import CARS from "./CARS.js";
import ContactSection from "../ContactSection.jsx";
import FixedMenu from "../FixedMenu.jsx";

/*
  hdr,
  subt,
  imgHero,
  imgSec
  desc,
  imgSec,
  carPrices,
  */

export default function Article() {
  const { id } = useParams();
  const carFromId = CARS.find((c) => c.id === id); //pobieranie id z linku i wyszukiwanie odpowiedniego auta

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!carFromId) {
    return <p>Nie znaleziono samochodu o id: {id}</p>;
  }

  const PARAMETRES = [
    "Production year",
    "Engine power",
    "Maximum speed",
    "Seats",
    "Engine capacity",
    "Transmission",
  ];

  const PRICES = [
    "24h",
    "1-2 days",
    "4-7 days",
    "8-14 days",
    "15-30 days*",
    "Exceeding the km limit",
    "Security deposit",
  ];

  return (
    <>
      <section className="bg-[var(--blue)] relative h-screen overflow-hidden">
        <div className="relative flex flex-col h-screen justify-center items-center">
          <div className="absolute text-left top-[20%]">
            <h1 className="font-alkalami text-6xl lg:text-8xl ">
              {carFromId.hdr}
            </h1>
            <h2 className="text-3xl lg:text-4xl -my-4">{carFromId.subt}</h2>
          </div>
          <img
            className="absolute z-10 max-w-4xl object-contain w-[90%]"
            src={carFromId.imgHero}
            alt={`${carFromId.hdr} ${carFromId.subt}`}
          />
        </div>
      </section>

      <section className="bg-[var(--blue)] flex w-full h-[50vh] justify-center">
        <div className="flex flex-col items-center max-w-3xl">
          <p className="text-center m-4 text-lg">{carFromId.desc}</p>

          <a
            href="#parametres"
            className="hover:-translate-y-[-10px] transition-all duration-300 ease-in-out"
          >
            <img
              className="m-4 w-10"
              src="/images/icons/chevron-black.png"
            ></img>
          </a>
        </div>
      </section>

      <section
        id="parametres"
        className="bg-[var(--beige)] h-auto lg:h-screen flex justify-center items-center"
      >
        <div className="lg:w-[60%] h-[80%] flex flex-col items-center justify-center lg:justify-around gap-10 my-10">
          <article>
            <h3 className="font-alkalami text-4xl text-center py-3">
              parametres
            </h3>
            <table className="t-auto w-full">
              <tbody>
                {PARAMETRES.map((param, index) => (
                  <tr key={index} className="border-b border-black">
                    <th className="text-right font-normal px-4">{param}</th>
                    <td className="text-left px-4">{carFromId.param[index]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

          <article>
            <h3 className="font-alkalami text-4xl text-center py-3">
              equipment
            </h3>
            <ul>
              {carFromId.equip.map((eq) => (
                <li className="list-disc list-inside">{eq}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="hidden lg:block lg:w-[40%] h-full">
          <img
            className="w-full h-full object-cover"
            src={carFromId.imgSec}
            alt={`${carFromId.hdr} ${carFromId.subt}`}
          ></img>
        </div>
      </section>

      <section className="h-auto lg:h-screen flex justify-center items-center">
        <div className="w-full px-4 py-10 w-[90%] lg:w-[50%] h-auto flex flex-col items-center">
          <h3 className="font-alkalami text-4xl py-3">car rental</h3>
          <table className="t-auto w-full">
            <tbody>
              {PRICES.map((price, index) => (
                <tr key={index} className="border-b border-black">
                  <th className="text-left text-lg font-normal px-4">
                    {price}
                  </th>
                  <td className="text-right text-lg">
                    {carFromId.prices[index]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-left">
            <p className="text-sm py-3">* km limit in case of monthly rental</p>
            <p className="py-4">
              We offer discounts and bonuses to regular customers and for long
              term rentals. You can reduce the costs in almost half if you rent
              it for periods of 2 or 3 weeks, or other long term rental periods.
            </p>
          </div>

          <div className="flex gap-10 pt-4">
            <button onClick={() => navigate(-1)} className="btnSmBack">
              back
            </button>

            <Link to={`/form/${id}`}>
              <button type="button" className="btnSmReserve">
                rent this car
              </button>
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
      <FixedMenu />
    </>
  );
}
