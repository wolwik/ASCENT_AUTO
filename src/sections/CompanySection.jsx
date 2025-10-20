export default function CompanySection() {
  return (
    <>
      <section id="about_us" className="bg-black text-white min-h-dvh">
        <div className="flex">
          <div>
            <h3>who are we?</h3>
            <p>
              Ascent Auto is more than just a luxury car rental company – it’s
              an invitation to experience the art of driving. Founded with a
              passion for performance and elegance, we provide a carefully
              curated fleet of the world’s most prestigious luxury and sports
              cars.
            </p>
            <button
              onClick={() =>
                document.getElementById("what_drives").scrollIntoView()
              }
            >
              read more
            </button>
            {/*nwm czy dac tu button, czy a, na razie dam button, a beda w menu */}
            {/*
            <a href="#what_drives">read more</a>
            */}
          </div>
          <img src="./images/companyCars/bugattiBckgr.png"></img>
        </div>
      </section>
      <section id="what_drives" className="bg-[var(--beige)] min-h-dvh">
        <div className="flex">
          <img src="./images/companyCars/top.png"></img>
          <div>
            <h3>what drives us?</h3>
            <p>
              At Ascent Auto, we redefine the art of driving by offering luxury
              and sports car rentals that go beyond transportation. Guided by
              our unwavering commitment to excellence, innovation, and customer
              satisfaction, we deliver experiences tailored to your unique
              needs. Whether for business, leisure, or a special occasion, every
              journey with us is crafted to be extraordinary.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-black text-white min-h-dvh">
        <div className="flex">
          <img src="./images/companyCars/img_3117.png"></img>
          <div>
            <h3>who’s behind us?</h3>
            <p>
              Ascent Auto was founded by Amelia Sabovska, a visionary
              entrepreneur with a lifelong passion for luxury and performance
              cars. Driven by her love for design and engineering, Amelia
              created Ascent Auto to offer not just cars, but unforgettable
              driving experiences. Her dedication to excellence and innovation
              has shaped the company into a leader in the industry.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[var(--blue)] min-h-dvh">
        <div className="flex">
          <div>
            <h3>what do we stand for?</h3>
            <p>
              Excellence, innovation, and luxury define us. From the flawless
              condition of our cars to our customer-first approach, we deliver
              unmatched quality and service. Integrity and transparency are at
              the heart of everything we do, ensuring trust and satisfaction
              every step of the way.
            </p>
          </div>
          <div>
            <img src="./images/companyCars/carUno.png"></img>
            <img src="./images/companyCars/carDos.png"></img>
            <img src="./images/companyCars/carTres.png"></img>
          </div>
        </div>
      </section>
      <section className="bg-[var(--beige)] min-h-dvh">
        <div className="flex">
          <img src="./images/companyCars/interior.png"></img>
          <div>
            <h3>why choose us?</h3>
            <p>
              With a world-class fleet and personalized service, Ascent Auto
              turns every journey into an extraordinary experience. From the
              thrill of a Lamborghini to the elegance of a Rolls-Royce, we offer
              more than a drive – we create memories.
            </p>
            <button
              onClick={() =>
                document.getElementById("cars_offer").scrollIntoView()
              }
            >
              check our offer
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
