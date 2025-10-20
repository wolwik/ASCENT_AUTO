export default function ContactSection() {
  return (
    <footer id="contact" className="flex min-h-dvh bg-black text-white">
      <div>
        <article className="border-2 border-solid rounded-xl">
          <h3>contact</h3>
          <div className="flex">
            <div>
              <p>Phone:</p>
              <p>Email:</p>
              <p>Address:</p>
            </div>
            <div>
              <p>+48 123 456 789</p>
              <p>support@ascentauto.com</p>
              <p>123 Mulholland Drive, Lipinki Łużyckie</p>
            </div>
          </div>
          <div className="flex">
            <img src="./images/icons/icons8-x-50.png"></img>
            <img src="./images/icons/icons8-ig-50.png"></img>
            <img src="./images/icons/icons8-fb-50.png"></img>
            <img src="./images/icons/icons8-yt-50.png"></img>
          </div>
        </article>
        <div className="flex">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>

      <div>
        <article className="border-2 border-solid rounded-xl">
          <h3>newsletter</h3>
          <p>Be the first to hear about our new cars and offers</p>
          <input placeholder="e-mail address"></input>
          <p>
            I consent to the processing of my personal data provided by me in
            order to receive the newsletter.
          </p>
        </article>

        <div>
          <p>© 2025 Ascent Auto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
