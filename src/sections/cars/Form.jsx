import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
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
  const onSubmit = (data) => console.log(data);

  const [choosenCar, setChoosenCar] = useState("");

  const handleChange = (event) => {
    setChoosenCar(event.target.value);
  };

  return (
    <section>
      <h2>contact details</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row">
        <div className="flex flex-col gap-3">
          <fieldset>
            <label htmlFor="first-name">name </label>
            <input
              id="first-name"
              type="text"
              {...register("firstName", {
                required: true,
                message: "enter your first name",
              })}
              className={`border ${
                errors.firstName ? "border-red-500" : "border-solid"
              }`}
            ></input>
          </fieldset>
          {errors.firstName && (
            <span className="text-red-500">enter your first name</span>
          )}

          <fieldset>
            <label htmlFor="last-name">last name </label>
            <input
              id="last-name"
              type="text"
              {...register("lastName", {
                required: true,
                message: "enter your last name",
              })}
              className={`border ${
                errors.lastName ? "border-red-500" : "border-solid"
              }`}
            ></input>
          </fieldset>
          {errors.lastName && (
            <span className="text-red-500">enter your last name</span>
          )}

          <fieldset>
            <label htmlFor="email">e-mail address </label>
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
              className={`border ${
                errors.email ? "border-red-500" : "border-solid"
              }`}
            ></input>
          </fieldset>
          {errors.email && (
            <span className="text-red-500">enter a valid email address</span>
          )}

          <fieldset>
            <label htmlFor="phone">phone number </label>
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
              className={`border ${
                errors.phone ? "border-red-400" : "border-solid"
              }`}
            ></input>
          </fieldset>
          {errors.phone && (
            <span className="text-red-500">phone number must be 9 digits</span>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <fieldset>
            <label htmlFor="pick-up">pick-up location </label>
            <input
              id="pick-up"
              type="text"
              {...register("pickUp", {
                required: true,
                message: "provide the pick-up location",
              })}
              className={`border ${
                errors.pickUp ? "border-red-400" : "border-solid"
              }`}
            ></input>
          </fieldset>
          {errors.pickUp && (
            <span className="text-red-500">provide the pick-up location</span>
          )}
          <fieldset>
            <label htmlFor="drop-off">drop-off location </label>
            <input
              id="drop-off"
              type="text"
              {...register("dropOff", {
                required: true,
                message: "provide the drop-off location",
              })}
              className={`border ${
                errors.dropOff ? "border-red-400" : "border-solid"
              }`}
            ></input>
          </fieldset>
          {errors.dropOff && (
            <span className="text-red-500">provide the drop-off location</span>
          )}
          {/*nie można izywac if...else, trzeba ternary operator*/}
          {/*sprawdzenie czy jest id, jak nie ma to lista, jak jest to konkretne auto*/}

          <fieldset>
            <label htmlFor="vehicle">requested vehicle </label>

            {carFromId ? (
              <>
                <input
                  id="vehicle"
                  type="text"
                  value={`${carFromId.hdr} ${carFromId.subt}`}
                  readonly
                  {...register("vehicle", {
                    required: true,
                    message: "choose a vehicle",
                  })}
                ></input>
              </>
            ) : (
              <>
                <select
                  id="vehicle"
                  {...register("vehicle", { required: true })}
                  className="border border-solid"
                >
                  {CARS.map(
                    (
                      car //BŁĄD JEST GDZIE INDZIEJ
                    ) => (
                      <option key={car.id} value={`${car.hdr} ${car.subt}`}>
                        {car.hdr} {car.subt}
                      </option>
                    )
                  )}
                </select>
                {errors.vehicle && (
                  <span className="text-red-500">choose a vehicle</span>
                  /*i tak zawsze jest wybrany, ale tak jest poprawnie i guess*/
                )}
              </>
            )}
          </fieldset>

          <fieldset>
            <label htmlFor="optional-message">optional message </label>
            <textarea
              id="optional-message"
              type="text"
              {...register("optionalMessage")}
              className="border border-solid"
            ></textarea>
          </fieldset>
        </div>

        <button onClick={() => navigate(-1)}>back</button>

        <input type="submit" />
      </form>
    </section>
  );
}
