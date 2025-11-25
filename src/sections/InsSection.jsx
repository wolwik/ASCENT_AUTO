import { Link } from "react-router";

export default function InsSection() {
  return (
    <section
      id="instruction"
      className="lg:w-full px-4 py-10 relative flex flex-col items-center justify-center h-auto lg:h-screen bg-[var(--blue)]"
    >
      <img
        src="/images/icons/Line.png"
        className="hidden lg:block absolute object-cover max-h-[80%] top-[0%] right-[15%]"
        alt="Decoration line"
      ></img>
      <div className="flex flex-col justify-center lg:max-w-[90%] z-10">
        <h3 className="font-alkalami text-3xl py-5">how does it works?</h3>
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <article className="bg-white max-w-xs shadow-[7px_7px_4px_0px_rgba(66,68,90,0.24)] p-12 rounded-2xl">
            <img
              className="w-10 max-w-none my-5"
              src="/images/icons/form_icon.png"
              alt="Form icon"
            ></img>
            <h4 className="font-alkalami text-xl">Complete the online form</h4>
            <p>
              Reserve your car on the page, call, write an e-mail or contact us
              via social media – depending on which method is most convenient
              for you. Making a reservation will only take you a few minutes at
              most.
            </p>
          </article>
          <article className="bg-white max-w-xs shadow-[7px_7px_4px_0px_rgba(66,68,90,0.24)] p-12 rounded-2xl">
            <img
              className="w-10 max-w-none my-5"
              src="/images/icons/clock_icon.png"
              alt="Clock icon"
            ></img>
            <h4 className="font-alkalami text-xl">Wait for confirmation</h4>
            <p>
              Now we confirm your reservation and prepare your car. You should
              have received an email confirming your booking has been
              confirmed. You can pick up the ordered car directly at our
              headquarters or from the address indicated in the order.
            </p>
          </article>
          <article className="bg-white max-w-xs shadow-[7px_7px_4px_0px_rgba(66,68,90,0.24)] p-12 rounded-2xl">
            <img
              className="w-10 max-w-none my-5"
              src="/images/icons/car_icon.png"
              alt="Car icon"
            ></img>
            <h4 className="font-alkalami text-xl">
              Pick up your car and hit the road
            </h4>
            <p>
              Everything is ready. Get in and go wherever you want. Enjoy this
              experience – it is unique. Afterwards, you can return the car in
              any Polish city – just provide the address in advance and we will
              come to pick it up.
            </p>
          </article>
        </div>
      </div>

      <Link to={`form`}>
        <button type="button" className="btnSmDefault z-30 mt-10">
          rent a car
        </button>
      </Link>
    </section>
  );
}
