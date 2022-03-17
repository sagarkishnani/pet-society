import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { generarOrden } from "../../firebase/generarOrden";
import { ThankYou } from "./ThankYou";
import { validar } from "./validar";
import thanks from "../../images/thanks.jpg";

export const Checkout = () => {
  const { cart, totalCart, vaciarCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const [values, setValues] = useState({
    nombre: "",
    email: "",
    tel: "",
  });

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validar(values) &&
      generarOrden(values, cart, totalCart, setOrderId, vaciarCart);
  };

  if (orderId) {
    return <ThankYou order={orderId} image={thanks} />;
  }

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <div className="flex flex-row justify-around">
        <div className="mb-28 basis-2/4">
          <h2 className="font-passion text-5xl md:ml-32 md:pb-8 md:pt-16">
            Checkout
          </h2>
          <form onSubmit={handleSubmit} className="md:ml-32">
            <label className="font-nunito text-xl">Nombre completo</label>
            <input
              className="font-nunito mt-4 mb-8 block w-[75%] rounded-md bg-white p-2 text-xl shadow-md"
              type="text"
              placeholder="Tu nombre"
              value={values.nombre}
              onChange={handleInputChange}
              name="nombre"
            />
            <label className="font-nunito text-xl">Email</label>
            <input
              className="font-nunito mt-4 mb-8 block w-[75%] rounded-md bg-white p-2 text-xl shadow-md"
              type="email"
              placeholder="Tu email"
              value={values.email}
              onChange={handleInputChange}
              name="email"
            />
            <label className="font-nunito text-xl">Celular</label>
            <input
              className="font-nunito mt-4 mb-5 block w-[75%] rounded-md bg-white p-2 text-xl shadow-md"
              type="tel"
              placeholder="Tu teléfono"
              value={values.tel}
              onChange={handleInputChange}
              name="tel"
            />
            <button
              className="font-nunito bg-lightred mt-8 w-48 rounded-lg p-2 text-xl text-white drop-shadow duration-1000 hover:scale-110"
              type="submit"
            >
              Comprar
            </button>
          </form>
        </div>
        <div className="bg-lightgray basis-2/4 shadow-md">
          {cart.map((item) => (
            <div className="m-20" key={item.id}>
              <div className="relative">
                <img className="inline h-20 w-20 rounded-xl" src={item.img} />
                <span className="bg-lightred absolute right-[37.5rem] top-[-0.5rem] rounded-full px-2 text-white">
                  {item.cantidad}
                </span>
                <p className="font-nunito inline max-w-xs px-4 text-lg">
                  {item.nombre}
                </p>
                <p className="font-nunito inline max-w-xs px-4 text-lg">
                  S/.{item.cantidad * item.precio}
                </p>
              </div>
            </div>
          ))}
          <div>
            <h2 className="pt-8 pb-24 pr-72 text-right text-xl font-bold">
              SUBTOTAL: S/.{totalCart()}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

//Ejemplo adddoc
// addDoc(orderRef, orden)
// .then((resp) => {
//   cart.forEach((item) => {
//     const docRef = doc(db, "productos", item.id);
//     getDoc(docRef).then((dbDoc) => {
//       updateDoc(docRef, { stock: dbDoc.data().stock - item.cantidad });
//     });
//   });

//   setOrderId(resp.id);
//   vaciarCart();
// })
// .catch((err) => {
//   console.log(err);
// });
