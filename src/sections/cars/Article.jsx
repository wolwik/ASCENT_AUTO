import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { Link } from "react-router";
import CARS from "./CARS.js";
import ContactSection from "./ContactSection.jsx";

/*
 hdr,
  subt,
  imgHero,
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

  /*   
  <tr>
    <th>Engine Location</th>
    <td>Front</td>
  </tr>
  */

  return (
    <>
      <section className="bg-[var(--blue)] min-h-dvh">
        <h1>{carFromId.hdr}</h1>
        <h2>{carFromId.subt}</h2>
        <img src={carFromId.img} />
      </section>

      <section className="bg-[var(--blue)]">
        <p>{carFromId.desc}</p>
        <img src="/images/icons/chevrons.png"></img>
      </section>

      <section className="bg-[var(--beige)] min-h-dvh">
        <div>
          <article>
            <h3>parametres</h3>
            <table>
              {PARAMETRES.map((param, index) => (
                <tr className="flex">
                  <th>{param}</th>
                  <td>{carFromId.param[index]}</td>
                </tr>
              ))}
            </table>
          </article>

          <article>
            <h3>equipment</h3>
            <ul>
              {carFromId.equip.map((eq) => (
                <li>{eq}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="min-h-dvh">
        <h3>car rental</h3>
        <table>
          {PRICES.map((price, index) => (
            <tr className="flex">
              <th>{price}</th>
              <td>{carFromId.prices[index]}</td>
            </tr>
          ))}
        </table>
        <p>* km limit in case of monthly rental</p>
        <p>
          We offer discounts and bonuses to regular customers and for long term
          rentals. You can reduce the costs in almost half if you rent it for
          periods of 2 or 3 weeks, or other long term rental periods.
        </p>
      </section>

      <button onClick={() => navigate(-1)}>back</button>

      <Link to={`/form/${id}`}>
        <button>get a quote</button>
      </Link>

      <ContactSection />
    </>
  );
}
