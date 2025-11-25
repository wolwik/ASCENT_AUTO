import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router";
import CARS from "./CARS";

export default function Form() {
  const { id } = useParams();
  const carFromId = id ? CARS.find((c) => c.id === id) : null;

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmited, setIsSubmited] = useState(false);

  const onSubmit = (data) => {
    if (data) setIsSubmited(true);
    console.log(data); // w momencie kliknięcia submit w react-form wszystkie dane są zapisywane jako obiekt i poprzez handleSubmit (niżej, w <form>) są przekazywane tutaj. ta konkretna funkcja wyswietla je w konsoli (sprawdzalam, czy formularz dziala). Data to to, co zostało przekazane do onSubmit przez handleSubmit.
  };

  return (
    <section className="bg-white relative min-h-screen w-screen md:h-screen flex flex-col justify-center items-center text-base sm:text-sm">
      <div
        className={`absolute w-full h-full bg-black/60 flex justify-center items-center transition-all duration-300 ease-in-out  ${
          isSubmited
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-white flex flex-col border border-solid rounded-3xl shadow-[7px_7px_4px_0px_rgba(66,68,90,0.24)] p-7">
          <h3 className="font-alkalami text-2xl pt-2">Thank you!</h3>
          <p className="text-base py-2 pr-3">
            We received your request and will contact you very soon.
          </p>
          <Link to={"/#home"}>
            <button type="button" className="my-2 btnXsDetails">
              home
            </button>
          </Link>
        </div>
      </div>

      <div className="my-10">
        <h2 className="font-alkalami text-3xl mb-3">contact details</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/*tutaj mowie reactowi, ze w momencie submit, wszystkie dane ma za pomocą wbudowanej funkcji handleSubmit() przekazac do mojej funkcji onSubmit()*/}
          <div className="flex flex-col md:flex-row gap-3 md:gap-8">
            <div className="flex flex-col gap-3">
              <fieldset className="flex flex-col">
                <label htmlFor="first-name" className="py-2 pl-4">
                  name:{" "}
                </label>
                <input
                  id="first-name"
                  type="text"
                  {...register("firstName", {
                    // rejestracja pola i określenie reguł
                    required: true,
                    message: "enter your first name",
                  })}
                  className={`formInput border ${
                    errors.firstName ? "border-red-500" : "border-solid"
                  }`} // jezeli walidacja (w register) się nie uda, react tworzy obiekt errors.[nazwa_pola]...
                ></input>
              </fieldset>

              {errors.firstName && ( //... można go używać do stylowania, wyświetlania wiadomości itp.
                <span className="errorMsg">enter your first name</span>
              )}

              <fieldset className="flex flex-col">
                <label htmlFor="last-name" className="py-2 pl-4">
                  last name:
                </label>
                <input
                  id="last-name"
                  type="text"
                  {...register("lastName", {
                    required: true,
                    message: "enter your last name",
                  })}
                  className={`formInput border ${
                    errors.lastName ? "border-red-500" : "border-solid"
                  }`}
                ></input>
              </fieldset>
              {errors.lastName && (
                <span className="errorMsg">enter your last name</span>
              )}

              <fieldset className="flex flex-col">
                <label htmlFor="email" className="py-2 pl-4">
                  e-mail address{" "}
                </label>
                <input
                  id="email"
                  type="text"
                  {...register("email", {
                    required: "E-mail is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "enter a valid email address",
                    },
                  })}
                  className={`formInput border ${
                    errors.email ? "border-red-500" : "border-solid"
                  }`}
                ></input>
              </fieldset>
              {errors.email && (
                <span className="errorMsg">enter a valid email address</span>
              )}

              <fieldset className="flex flex-col">
                <label htmlFor="phone" className="py-2 pl-4">
                  phone number{" "}
                </label>
                <input
                  id="phone"
                  type="text"
                  {...register("phone", {
                    required: true,
                    pattern: {
                      value: /^[0-9]{9}$/,
                      message: "phone number must be 9 digits",
                    },
                  })}
                  className={`formInput border ${
                    errors.phone ? "border-red-400" : "border-solid"
                  }`}
                ></input>
              </fieldset>
              {errors.phone && (
                <span className="errorMsg">phone number must be 9 digits</span>
              )}

              <fieldset className="flex flex-col">
                <label htmlFor="license" className="py-2 pl-4">
                  license number
                </label>
                <input
                  id="license"
                  type="text"
                  {...register("license", {
                    required: true,
                    message: "license number is required",
                  })}
                  className={`formInput border ${
                    errors.license ? "border-red-400" : "border-solid"
                  }`}
                ></input>
              </fieldset>
              {errors.license && (
                <span className="errorMsg">license number is required</span>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <fieldset className="flex flex-col">
                <label htmlFor="vehicle" className="py-2 pl-4">
                  requested vehicle{" "}
                </label>

                {carFromId ? (
                  <>
                    <input
                      id="vehicle"
                      type="text"
                      value={`${carFromId.hdr} ${carFromId.subt}`}
                      readOnly
                      {...register("vehicle", {
                        required: true,
                        message: "choose a vehicle",
                      })}
                      className="bg-gray-300 text-gray-500 rounded-3xl py-2 px-4"
                    ></input>
                  </>
                ) : (
                  <>
                    <select
                      id="vehicle"
                      {...register("vehicle", { required: true })}
                      className="formInput"
                    >
                      {CARS.map((car) => (
                        <option key={car.id} value={`${car.hdr} ${car.subt}`}>
                          {car.hdr} {car.subt}
                        </option>
                      ))}
                    </select>
                    {errors.vehicle && (
                      <span className="errorMsg">choose a vehicle</span>
                      /*i tak zawsze jest wybrany, ale tak jest poprawnie i guess*/
                    )}
                  </>
                )}
              </fieldset>

              <fieldset className="flex flex-col">
                <label htmlFor="pick-up-loc" className="py-2 pl-4">
                  pick-up location
                </label>
                <input
                  id="pick-up-loc"
                  type="text"
                  {...register("pickUpLoc", {
                    required: true,
                    message: "provide the pick-up location",
                  })}
                  className={`formInput border ${
                    errors.pickUpLoc ? "border-red-400" : "border-solid"
                  }`}
                ></input>
              </fieldset>
              {errors.pickUpLoc && (
                <span className="errorMsg">provide the pick-up location</span>
              )}

              <fieldset className="flex flex-col">
                <label htmlFor="drop-off-loc" className="py-2 pl-4">
                  drop-off location
                </label>
                <input
                  id="drop-off-loc"
                  type="text"
                  {...register("dropOffLoc", {
                    required: true,
                    message: "provide the drop-off location",
                  })}
                  className={`formInput border ${
                    errors.dropOffLoc ? "border-red-400" : "border-solid"
                  }`}
                ></input>
              </fieldset>
              {errors.dropOffLoc && (
                <span className="errorMsg">provide the drop-off location</span>
              )}

              <fieldset className="flex flex-col">
                <label htmlFor="pick-up-date" className="py-2 pl-4">
                  pick-up date
                </label>
                <input
                  id="pick-up-date"
                  type="date"
                  min={
                    new Date(Date.now() + 86400000).toISOString().split("T")[0]
                  } // zeby nie tworzyc dodatkowych zmiennych na poczatku komponentu
                  max={"2035-11-16"}
                  {...register("pickUpDate", {
                    required: true,
                    message: "provide the pick-up date",
                  })}
                  className={`formInput border ${
                    errors.pickUpDate ? "border-red-400" : "border-solid"
                  }`}
                ></input>
              </fieldset>
              {errors.pickUpDate && (
                <span className="errorMsg">provide the pick-up date</span>
              )}

              <fieldset className="flex flex-col">
                <label htmlFor="drop-off-date" className="py-2 pl-4">
                  drop-off date
                </label>
                <input
                  id="drop-off-date"
                  type="date"
                  min={
                    new Date(Date.now() + 86400000).toISOString().split("T")[0]
                  } // zeby nie tworzyc dodatkowych zmiennych na poczatku komponentu
                  max={"2035-11-16"}
                  {...register("dropOffDate", {
                    required: true,
                    message: "provide the drop-off date",
                  })}
                  className={`formInput border ${
                    errors.dropOffDate ? "border-red-400" : "border-solid"
                  }`}
                ></input>
              </fieldset>
              {errors.dropOffDate && (
                <span className="errorMsg">provide the drop-off date</span>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center my-3">
            <fieldset className="flex flex-col w-full">
              <label htmlFor="optional-message" className="py-2 pl-4">
                optional message
              </label>
              <textarea
                id="optional-message"
                type="text"
                {...register("optionalMessage")}
                className="bg-gray-300 rounded-3xl py-2 px-3 w-full"
              ></textarea>
            </fieldset>

            <div className="flex w-full justify-center gap-7 mt-6">
              <button onClick={() => navigate(-1)} className="btnSmBack">
                back
              </button>
              <button type="submit" className="btnSmDefault">
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
