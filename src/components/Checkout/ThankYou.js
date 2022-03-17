import { Link } from "react-router-dom";

export const ThankYou = ({ order, image }) => {
  return (
    <>
      <h2 className="font-passion text-5xl md:ml-32 md:pb-8 md:pt-16">
        ¡Gracias por tu compra!
      </h2>
      <h3 className="font-nunito text-xl md:ml-32">
        Tu número de orden es: {order}
      </h3>
      <img className="w-[40rem] md:ml-32" src={image}></img>
      <Link to="/">
        <p className="font-nunito text-lightred py-16 text-2xl md:ml-32">
          Volver
        </p>
      </Link>
    </>
  );
};
