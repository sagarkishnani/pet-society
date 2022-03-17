import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, totalCart, cantidadCart, vaciarCart, eliminarItem } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="mx-28 pt-8 pb-20">
        <h1 className="font-passion pt-24 pb-8 text-6xl">
          Tu carrito está vacío
        </h1>
        <p className="font-nunito text-xl">
          Haz click en volver para llevarte los mejores productos para tu
          mascota.
        </p>
        <Link to="/productos">
          <button className="font-nunito bg-lightred text-md mt-8 block w-24 rounded-lg p-2 text-white drop-shadow duration-1000 hover:scale-110">
            Volver
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div className="mx-28">
      <h1 className="font-passion pt-24 pb-8 text-6xl">Tu compra</h1>

      <table className="font-nunito w-full table-fixed shadow-md">
        <thead className="bg-lightred h-16 text-left text-lg text-white">
          <tr>
            <th className="w-[30rem] px-8">PRODUCTO</th>
            <th>CANTIDAD</th>
            <th>PRECIO</th>
            <th className="w-24">TOTAL</th>
            <th className="w-10"></th>
          </tr>
        </thead>
        {cart.map((item) => (
          <tbody className="hover:shadow-sm" key={item.id}>
            <tr>
              <td className="py-8">
                <img className="inline h-20 w-20" src={item.img} />
                {item.nombre}
              </td>
              <td className="py-8">{item.cantidad}</td>
              <td className="py-8">S/.{item.precio}</td>
              <td className="py-8">S/.{item.cantidad * item.precio}</td>
              <td className="py-8">
                <button onClick={() => eliminarItem(item.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>

      <div className="flex flex-row justify-between px-4 py-12">
        <div className="">
          <button
            className="font-nunito bg-lightred text-md rounded-lg p-2 text-white drop-shadow duration-1000 hover:scale-110"
            onClick={vaciarCart}
          >
            <svg
              display="inline"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
        <div>
          <p className="pt-8 pb-4 text-right text-lg">
            Cantidad: {cantidadCart()}
          </p>
          <h2 className="inline pt-8 text-right text-xl font-bold">
            SUBTOTAL: S/.{totalCart()}
          </h2>
          <Link to={"/checkout"}>
            <button className="font-nunito bg-lightred text-md mt-8 block w-full rounded-lg p-2 text-white drop-shadow duration-1000 hover:scale-110">
              Comprar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
