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
    <div className="bg-white rounded-xl flex flex-col items-center justify-center">
      <img src={img}></img>
      <div className="h-px w-40 border-1 border-solid"></div>
      <p className="font-[alkalami]">{hdr}</p>
      <p className="font-[alata]">{subt}</p>
      <div className="flex">
        <Link to={`/article/${id}`}>
          <button type="button" className="bg-black text-white rounded-xl w-20">
            details
          </button>
        </Link>
        <Link to={`/form/${id}`}>
          <button type="button" className="bg-black text-white rounded-xl w-20">
            get a quote
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function CardsContainer({ list }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4">
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
