import React from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

export const Navbar = () => {
  return (
    <div className="bg-yellow flex flex-row items-center justify-between pt-4 pb-4 md:justify-around">
      <div className="visible m-8 space-y-2 md:hidden">
        <span className="block h-1 w-8 bg-black"></span>
        <span className="block h-1 w-8 bg-black"></span>
        <span className="block h-1 w-8 bg-black"></span>
      </div>
      <div className="duration-1000 hover:scale-[1.1]">
        <Link to="/" className="font-passion text-4xl">
          PET SOCIETY
        </Link>
      </div>
      <div className="font-nunito hidden px-8 text-xl md:block">
        <Link
          to="/"
          className="px-12 underline-offset-8 hover:underline"
          href="#"
        >
          Inicio
        </Link>
        <a className="px-12 underline-offset-8 hover:underline" href="#">
          Nosotros
        </a>
        <Link
          to="/productos"
          className="px-12 underline-offset-8 hover:underline"
        >
          Productos
        </Link>
        <a className="px-12 underline-offset-8 hover:underline" href="#">
          Contacto
        </a>
      </div>
      <CartWidget />
    </div>
  );
};
