import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [subscribed, setSubscribed] = useState(false);

  /*

  useEffect(() => {
    if (subscribed) console.log("subscribed!");
    else console.log("not subscribed yet");
  }, [subscribed]);

  */

  const onSubmit = (mail) => {
    if (mail) setSubscribed(true);
  };

  return (
    <footer
      id="contact"
      className="bg-black text-white text-xs lg:h-auto min-h-[50vh] flex justify-center items-center"
    >
      <div className="max-w-[80%] flex flex-col">
        <div className="flex flex-col lg:flex-row lg:items-stretch  gap-5 lg:gap-12 my-10">
          <article className="flex-1 border-2 border-solid border-white rounded-3xl p-6 mx-3">
            {/*left article*/}
            <h3 className="font-alkalami text-3xl py-2">contact</h3>

            <div className="flex flex-row py-2">
              <div>
                <p className="py-1">Phone:</p>
                <p className="py-1">Email:</p>
                <p className="py-1">Address:</p>
              </div>
              <div className="pl-5">
                <p className="py-1">
                  <a href="tel:+48123456789">+48 123 456 789</a>
                </p>

                <p className="py-1 ">
                  <a href="mailto:support@ascentauto.com">
                    support@ascentauto.com
                  </a>
                </p>

                <p className="py-1">
                  <a
                    href="https://www.google.com/maps?q=51.6382661,15.0024632"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Otwórz mapę Google dla ul. Łączna 43, Lipinki Łużyckie" // dla lepszej dostepnosci
                  >
                    ul. Łączna 43, Lipinki Łużyckie
                  </a>
                </p>
              </div>
            </div>

            <div className="w-full flex flec-col justify-center">
              <div className="flex flex-row w-[70%] justify-around pt-2">
                <a href="#">
                  <img
                    src="../images/icons/icons8-x-50.png"
                    className="w-10 object-contain"
                    alt="X icon"
                  ></img>
                </a>
                <a href="#">
                  <img
                    src="../images/icons/icons8-ig-50.png"
                    className="w-10 object-contain"
                    alt="Instagram icon"
                  ></img>
                </a>
                <a href="#">
                  <img
                    src="../images/icons/icons8-fb-50.png"
                    className="w-10 object-contain"
                    alt="Facebook icon"
                  ></img>
                </a>
                <a href="#">
                  <img
                    src="../images/icons/icons8-yt-50.png"
                    className="w-10 object-contain"
                    alt="YouTube icon"
                  ></img>
                </a>
              </div>
            </div>
          </article>

          <article className="flex-1 border-2 relative border-solid border-white rounded-3xl p-6 mx-3">
            {/*right article*/}

            <div
              className={`absolute flex flex-col top-0 left-0 m-0 p-3 w-full h-full justify-center items-center bg-white text-black rounded-3xl transition-all duration-300 ease-in-out pointer-events-none  ${
                subscribed
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <h4 className="font-alkalami text-2xl py-2">
                Thank you for subscribing!
              </h4>
              <p className="text-base text-center">
                You will now receive our newsletter with the latest updates.
              </p>
            </div>

            <h3 className="font-alkalami text-3xl py-2">newsletter</h3>
            <p>Be the first to hear about our new cars and offers</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="flex flex-row">
                <label htmlFor="nwsltrMail" className="sr-only"></label>
                <input
                  id="nwsltrMail"
                  placeholder="e-mail address"
                  {...register("nwsltrMail", {
                    required: true,
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "enter a valid e-mail address",
                    },
                  })}
                  className={`bg-white text-black w-[80%] rounded-3xl text-sm py-2 px-4 my-3 ${
                    errors.nwsltrMail ? "border-red-500" : "border-solid"
                  }`}
                ></input>
                <button
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                  className="bg-green-900 hover:bg-green-800 rounded-3xl text-white text-xs font-normal w-[20%] m-3 ml-4 transition-all duration-300 ease-in-out"
                >
                  join
                </button>
              </fieldset>

              {errors.nwsltrMail && (
                <p className="errorMsgXs">{errors.nwsltrMail.message}</p>
              )}

              <fieldset className="flex flex-row items-center my-2">
                <input
                  id="nwsltrCheckbox"
                  type="checkbox"
                  {...register("consent", {
                    required: true,
                    message: "You must consent to receive the newsletter",
                  })}
                  className="form-checkbox h-5 w-4"
                ></input>

                <label htmlFor="nwsltrCheckbox" className="ml-2">
                  I consent to the processing of my personal data provided by me
                  in order to receive the newsletter.
                </label>
              </fieldset>
            </form>

            {errors.consent && (
              <span className="errorMsgXs">
                you must consent to receive the newsletter
              </span>
            )}
          </article>
        </div>

        <div>
          {/* bottom stuff */}
          <div className="flex flex-col items-center my-5">
            <div className="flex flex-row justify-between gap-7 lg:gap-10">
              <a href="#">
                <p>Terms & Conditions</p>
              </a>
              <a href="#">
                <p>Privacy Policy</p>
              </a>
              <a href="#">
                <p>Cookie Policy</p>
              </a>
            </div>
            <div className="my-5 text-xs">
              {/*<p>© 2025 Ascent Auto. All rights reserved.</p>*/}
              <p>© 2025 Portfolio project by Emilia Sabo</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

{
  /**/
}
