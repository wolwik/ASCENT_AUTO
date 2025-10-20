export default function HeroSection() {
  return (
    <>
      <section id="home" className="bg-[var(--blue)] min-h-dvh">
        <h1>ascent auto</h1>
        <h2>elevate your drive. even now</h2>
        <img src="./images/HeroCars/chiron.png"></img>
      </section>
      <section className="bg-[var(--beige)] min-h-dvh">
        <h3>it’s not just about driving.</h3>
        <h3>it’s about experience.</h3>
        <p>
          Step into a world where every journey becomes extraordinary. Whether
          it’s the roar of a V8 engine or the elegance of a handcrafted
          interior, our cars are designed to turn every drive into a memory.
          Reserve your dream car today and make every mile unforgettable.
        </p>
        <a href="#cars_offer">
          <img src="/images/icons/chevrons.png"></img>
        </a>
      </section>
    </>
  );
}
