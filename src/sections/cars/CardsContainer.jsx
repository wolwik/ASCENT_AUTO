import { Link } from "react-router";

/*
function Button({ text }) {
  return (
    <button type="button" className="bg-black text-white rounded-xl w-20">
      {text}
    </button>
  );
}
  */

function Card({ img, id, hdr, subt }) {
  return (
    <div className="z-10 bg-[#EFEFEF] hover:bg-white rounded-xl shadow-[7px_7px_4px_0px_rgba(66,68,90,0.24)] flex flex-col items-center justify-center p-2 aspect-square transition-all duration-300 ease-in-out">
      <img className="max-w-[90%]" src={img} alt={`${hdr} ${subt}`}></img>
      <div className="h-px m-0 w-40 border-t border-solid border-black"></div>
      <p className="font-alkalami text-lg -mb-1 mt-2">{hdr}</p>
      <p>{subt}</p>
      <div className="flex gap-5 pt-4">
        <Link to={`/article/${id}`}>
          <button type="button" className="btnXsDetails">
            details
          </button>
        </Link>
        <Link to={`/form/${id}`}>
          <button type="button" className="btnXsReserve">
            rent this car
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function CardsContainer({ list }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(260px,_1fr))] gap-7">
      {list.map((car) => (
        <Card
          key={car.id}
          id={car.id}
          img={car.img}
          hdr={car.hdr}
          subt={car.subt}
        />
      ))}
    </div>
  );
}
