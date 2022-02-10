import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-black py-16">
      <div className="pb-20 flex flex-row justify-around">
        <div>
          <Link to="/" className="font-passion text-white text-4xl">
            PET SOCIETY
          </Link>
          <p className="pt-4 font-nunito text-lightgray text-lg max-w-xs">
            En Pet Society vendemos los mejores productos para tu mascota.
          </p>
        </div>
        <div>
          <Link to="/productos" className="font-passion text-white text-xl">
            PRODUCTOS
          </Link>
          <ul className="pt-4">
            <li className="font-nunito text-white">Polos</li>
            <li className="font-nunito text-white">Casacas</li>
            <li className="font-nunito text-white">Juguetes</li>
          </ul>
        </div>
        <div>
          <Link to="/contacto" className="font-passion text-white text-xl">
            CONTACTO
          </Link>
          <ul className="pt-4">
            <li className="font-nunito text-white">Polos</li>
            <li className="font-nunito text-white">Casacas</li>
            <li className="font-nunito text-white">Juguetes</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="pt-12">
        <p className="font-nunito text-center text-white">
          Hecho por Sagar Kishnani. © Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
