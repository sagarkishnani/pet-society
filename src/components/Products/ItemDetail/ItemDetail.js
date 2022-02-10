import { CartWidget } from "../../CartWidget/CartWidget";

export const ItemDetail = ({
  id,
  nombre,
  img,
  desc,
  precio,
  stock,
  categoria,
}) => {
  return (
    <div className="flex flex-row justify-center">
      <div>
        <img src={img} alt={nombre} />
      </div>
      <div>
        <h1 className="font-passion text-6xl pt-24 pb-8">{nombre}</h1>
        <h5 className="font-nunito font-bold text-gray text-2xl pb-8">
          S/.{precio}
        </h5>
        <p className="font-nunito text-xl max-w-xl">{desc}</p>
        <button className="w-64 mt-8 font-nunito text-xl drop-shadow bg-lightred text-white rounded-lg p-4 hover:scale-110 duration-1000">
          <p className="">Añadir al carrito</p>
        </button>
      </div>

      {/* CONTADOR */}
    </div>
  );
};
