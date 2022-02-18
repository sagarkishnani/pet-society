import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-black py-16">
      <div className="flex flex-row justify-around pb-20">
        <div>
          <Link to="/" className="font-passion text-4xl text-white">
            PET SOCIETY
          </Link>
          <p className="font-nunito text-lightgray max-w-xs pt-4 text-lg">
            En Pet Society vendemos los mejores productos para tu mascota.
          </p>
        </div>
        <div>
          <Link to="/productos" className="font-passion text-xl text-white">
            PRODUCTOS
          </Link>
          <ul className="pt-4">
            <li className="font-nunito text-white">Polos</li>
            <li className="font-nunito text-white">Casacas</li>
            <li className="font-nunito text-white">Juguetes</li>
          </ul>
        </div>
        <div>
          <Link to="/contacto" className="font-passion text-xl text-white">
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
