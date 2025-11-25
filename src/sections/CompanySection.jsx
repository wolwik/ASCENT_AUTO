export default function CompanySection() {
  return (
    <>
      <section
        id="about_us"
        className="bg-[var(--beige)] lg:bg-black lg:text-white lg:w-full lg:h-screen h-auto flex flex-row items-center"
      >
        <div className="flex flex-col items-center w-full px-4 py-10 lg:w-[60%]">
          <div className="flex flex-col items-start lg:w-[50%] h-[80%]">
            <h3 className="font-alkalami text-3xl py-2 text-left">
              who are we?
            </h3>
            <p className="text-xl py-5">
              Ascent Auto is more than just a luxury car rental company – it’s
              an invitation to experience the art of driving. Founded with a
              passion for performance and elegance, we provide a carefully
              curated fleet of the world’s most prestigious luxury and sports
              cars.
            </p>

            <div className="hidden lg:block">
              <a
                href="#what_drives"
                className="inline-block py-6 hover:-translate-y-[-10px] transition-all duration-300 ease-in-out"
              >
                <img
                  className="w-10"
                  src="/images/icons/chevron-white.png"
                  alt="Read about company"
                ></img>
              </a>
            </div>
          </div>

          {/*
          !! obecne ulozenie divow jest dostosowane pod wysrodkowany button, pezy chevronie po lewej tyle kontenerow jest zbyteczne
          <button
            onClick={() =>
              document.getElementById("what_drives").scrollIntoView()
            }
            className="sm:btnSmGray lg:btnOutline m-10"
          >
            read more
          </button>
        */}
        </div>

        <div className="hidden lg:block lg:w-[40%] h-full">
          <img
            src="./images/companyCars/bugattiBckgr.jpg"
            className="w-full h-full object-cover"
            alt="Bugatti on the road"
          ></img>
        </div>
      </section>

      <section
        id="what_drives"
        className="bg-[var(--beige)] lg:w-full h-screen sm:h-auto overflow-hidden flex flex-col lg:flex-row items-center"
      >
        <div className="lg:w-[40%] h-[100vh]">
          <img
            src="./images/companyCars/top.png"
            className="w-full h-full object-contain"
            alt="Porsche"
          ></img>
        </div>

        <div className="flex flex-col items-center w-full px-4 py-10 lg:w-[60%]">
          <div className="flex flex-col items-start lg:w-[50%] h-[80%]">
            <h3 className="font-alkalami text-3xl py-2">what drives us?</h3>
            <p className="text-xl py-5">
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

      {/*

      <section className="bg-black text-white lg:w-full h-screen sm:h-auto overflow-hidden flex flex-col lg:flex-row items-center">
        <div className="lg:w-[40%] h-[100vh]">
          <img
            src="./images/companyCars/img_3117.png"
            className="w-full h-full object-contain"
          ></img>
        </div>

        <div className="flex flex-col items-center w-full px-4 py-10 lg:w-[60%]">
          <div className="flex flex-col items-start lg:w-[50%] h-[80%]">
            <h3 className="font-alkalami text-3xl py-2">who’s behind us?</h3>
            <p className="text-xl py-5">
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

      */}

      <section className="bg-[var(--blue)] lg:w-full lg:h-screen h-auto flex flex-col lg:flex-row items-center overflow-hidden">
        <div className="flex flex-col items-center w-full px-4 py-10 lg:w-[60%]">
          <div className="flex flex-col items-start lg:w-[50%] h-[80%]">
            <h3 className="font-alkalami text-3xl py-2">
              what do we stand for?
            </h3>
            <p className="text-xl py-5">
              Excellence, innovation, and luxury define us. From the flawless
              condition of our cars to our customer-first approach, we deliver
              unmatched quality and service. Integrity and transparency are at
              the heart of everything we do, ensuring trust and satisfaction
              every step of the way.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-around lg:w-[40%] h-[90vh]">
          <img
            src="./images/companyCars/carUno.png"
            className="w-[70%] object-contain"
            alt="Yellow car"
          ></img>
          <img
            src="./images/companyCars/carDos.png"
            className="w-[70%] object-contain"
            alt="Red car"
          ></img>
          <img
            src="./images/companyCars/carTres.png"
            className="w-[70%] object-contain"
            alt="Blue car"
          ></img>
        </div>
      </section>

      <section className="bg-[var(--beige)] lg:w-full lg:h-screen h-auto flex flex-row items-center overflow-hidden">
        <div className="hidden lg:block lg:w-[40%] h-full">
          <img
            src="./images/companyCars/interior.png"
            className="w-full h-full object-cover"
            alt="Car interior"
          ></img>
        </div>

        <div className="flex flex-col items-center w-full px-4 py-10 lg:w-[60%]">
          <div className="flex flex-col items-start lg:w-[50%] h-[80%]">
            <h3 className="font-alkalami text-3xl py-2 text-left">
              why choose us?
            </h3>
            <p className="text-xl py-5">
              With a world-class fleet and personalized service, Ascent Auto
              turns every journey into an extraordinary experience. From the
              thrill of a Lamborghini to the elegance of a Rolls-Royce, we offer
              more than a drive – we create memories.
            </p>

            <div className="w-full flex justify-center lg:justify-start">
              <button
                onClick={() =>
                  document.getElementById("cars_offer").scrollIntoView()
                }
                className="btnSmDefault my-10"
              >
                check our offer
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
