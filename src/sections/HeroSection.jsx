import FancyContainer from "./FancyContainer";
import FancyLine from "./FancyLine";

export default function HeroSection() {
  return (
    <>
      <section
        id="home"
        className="bg-[var(--blue)] relative w-full h-screen overflow-hidden"
      >
        <FancyContainer />
        <FancyLine />
        <div className="absolute top-[15%] md:top-[20%] left-[10%]">
          <h1 className="font-alkalami text-8xl leading-[70px] w-[80%] sm:w-auto">
            ascent auto
          </h1>
          <h2 className="text-2xl -my-5 py-5">elevate your drive. even now</h2>
        </div>
        <img
          className="absolute z-10 max-w-none sm:bottom-1 sm:left-[60%] lg:left-[30%] object-contain"
          src="./images/HeroCars/chiron.avif"
          alt="Bugatti Chiron"
        ></img>
      </section>

      {/*<img className="absolute z-10 sm:w-[120%] sm:bottom-1 bottom-[10%] sm:left-[60%] lg:left-[30%]"*/}

      <section className="bg-[var(--beige)] relative flex w-full h-screen items-center justify-end overflow-hidden">
        <FancyLine />
        <div className="w-full px-4 py-10 lg:max-w-3xl text-right lg:pr-[20%]">
          <h3 className="font-alkalami text-3xl py-2">
            it’s not just about driving.
          </h3>
          <h3 className="font-alkalami text-3xl py-2">
            it’s about experience.
          </h3>
          <p className="text-xl py-2">
            Step into a world where every journey becomes extraordinary. Whether
            it’s the roar of a V8 engine or the elegance of a handcrafted
            interior, our cars are designed to turn every drive into a memory.
            Reserve your dream car today and make every mile unforgettable.
          </p>

          <a
            href="#cars_offer"
            className="inline-block py-6 hover:-translate-y-[-10px] transition-all duration-300 ease-in-out"
          >
            <img
              className="w-10"
              src="/images/icons/chevron-black.png"
              alt="Go to the offer"
            ></img>
          </a>
        </div>
      </section>
    </>
  );
}
