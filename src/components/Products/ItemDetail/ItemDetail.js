import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({
  id,
  nombre,
  img,
  desc,
  precio,
  stock,
  categoria,
}) => {
  const [cantidad, setCantidad] = useState(0);

  const { agregarAlCarrito, isInCart } = useContext(CartContext);

  const handleAgregar = () => {
    if (cantidad === 0) return;

    if (!isInCart(id)) {
      const addItem = {
        id,
        nombre,
        precio,
        stock,
        cantidad,
        img,
      };

      agregarAlCarrito(addItem);
    }
  };

  return (
    <div className="flex flex-row justify-center">
      <div>
        <img src={img} alt={nombre} />
      </div>
      <div>
        <h1 className="font-passion pt-24 pb-8 text-6xl">{nombre}</h1>
        <h5 className="font-nunito text-gray pb-8 text-2xl font-bold">
          S/.{precio}
        </h5>
        <p className="font-nunito max-w-xl text-xl">{desc}</p>

        {isInCart(id) ? (
          <Link to="/cart">
            <button className="font-nunito bg-lightred mt-8 w-64 rounded-lg p-4 text-xl text-white drop-shadow duration-1000 hover:scale-110">
              Terminar mi compra
            </button>
          </Link>
        ) : (
          <>
            <ItemCount
              max={stock}
              counter={cantidad}
              setCounter={setCantidad}
            />

            <button
              onClick={handleAgregar}
              className="font-nunito bg-lightred mt-8 w-64 rounded-lg p-4 text-xl text-white drop-shadow duration-1000 hover:scale-110"
            >
              <p className="">Añadir al carrito</p>
            </button>
          </>
        )}
      </div>
    </div>
  );
};
