export default function FixedMenu() {
  return (
    <nav className="flex w-full">
      <img width="30px" role="button" src="./images/icons/menu.png"></img>
      <ul className="flex flex-row flex-start">
        <li>
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#cars_offer">our offer</a>
        </li>
        <li>
          <a href="instruction">how does it works?</a>
        </li>
        <li>
          <a href="about_us">about us</a>
        </li>
        <li>
          <a href="contact">contact</a>
        </li>
      </ul>
    </nav>
  );
}

{
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
}
