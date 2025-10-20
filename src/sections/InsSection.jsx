import { Link } from "react-router";

export default function InsSection() {
  return (
    <section id="instruction" className="min-h-dvh bg-[var(--blue)]">
      <h3>how does it works?</h3>
      <div className="flex flex-row">
        <article className="bg-white">
          <h4>Complete the online form</h4>
          <p>
            Reserve your car on the page, call, write an e-mail or contact us
            via social media – depending on which method is most convenient for
            you. Making a reservation will only take you a few minutes at most.
          </p>
        </article>
        <article className="bg-white">
          <h4>Wait for confirmation</h4>
          <p>
            Now we confirm your reservation and prepare your car. You should
            have received an email confirming your booking has been
            confirmed. You can pick up the ordered car directly at our
            headquarters or from the address indicated in the order.
          </p>
        </article>
        <article className="bg-white">
          <h4>Pick up your car and hit the road</h4>
          <p>
            Everything is ready. Get in and go wherever you want. Enjoy this
            experience – it is unique. Afterwards, you can return the car in any
            Polish city – just provide the address in advance and we will come
            to pick it up.
          </p>
        </article>
      </div>

      <Link to={`form`}>
        <button>get a quote</button>
      </Link>
    </section>
  );
}
