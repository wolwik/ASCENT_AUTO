import { useState, useEffect, useRef } from "react";

export default function FixedMenu() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  const menuRef = useRef(null); //ref do wysuwanego menu, do sprawdzania kliknęć poza nim
  const buttonRef = useRef(null);

  useEffect(() => {
    // funkcja sprawdzająca czy kliknięto poza menu
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    // dodanie listenera do całego dokumentu
    document.addEventListener("mousedown", handleClickOutside);

    // usuniecie listenera po odmontowaniu komponentu
    return () => {
      // specjalna konwensja useEffect()
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]); // nasluchujemy zmiany open, zmienianie dziala tylko gdy menun otwarte

  return (
    <nav
      className={`${
        open
          ? "bg-white shadow-[7px_7px_4px_0px_rgba(66,68,90,0.24)]"
          : "bg-none"
      } z-20 flex fixed top-0 right-0 left-0 transition-all duration-300 ease-in-out`}
    >
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="hidden sm:block p-5"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <img
          width="30px"
          src={` ${
            !open ? "../images/icons/menu.png" : "../images/icons/x.png"
          }`}
          alt="menu"
        ></img>
      </button>
      <div
        ref={menuRef}
        className={`w-full transition-all duration-300 ease-in-out ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-row justify-end gap-10 w-full p-5">
          <li>
            <a href="/#home">home</a>
          </li>

          <li>
            <a href="/#cars_offer">our offer</a>
          </li>

          <li>
            <a href="/#instruction">how does it works?</a>
          </li>
          <li>
            <a href="/#about_us">about us</a>
          </li>
          <li>
            <a href="#contact" className="mr-4">
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

/*

  HTML

     <nav>
      <img
        id="burger"
        src="burger.png"
        role="button"
        tabindex="1"
        aria-label="otwĂłrz nawigacjÄ™"
        alt="otwĂłrz nawigacjÄ™"
      />

      <ul>
        <li><a href="../../index.html#landpage">gĹ‚Ăłwna</a></li>
        <li><a href="../../index.html#articles">artykuĹ‚y</a></li>
        <li><a href="../../omnie/omnie.html">o mnie</a></li>
        <li><a href="../../gallery/gallery.html">zdjÄ™cia</a></li>
        <li><a id="drkm" role="button" tabindex="0">zmieĹ„ motyw</a></li>
      </ul>
    </nav>


    CSS

    nav {
  background-color: #4f90df00;
}

.navactive {
  background-image: linear-gradient(
    to right,
    rgb(255, 255, 255),
    #da91dc,
    #ffffff00
  );
}

nav ul li a {
  color: #000000;
}


JS

    ("nav").addClass("navactive");



*/
