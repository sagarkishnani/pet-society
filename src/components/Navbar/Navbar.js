import React from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

export const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-yellow pt-4 pb-4 md:justify-around">
      <div className="visible m-8 space-y-2 md:hidden">
        <span className="block w-8 h-1 bg-black"></span>
        <span className="block w-8 h-1 bg-black"></span>
        <span className="block w-8 h-1 bg-black"></span>
      </div>
      <div className="hover:scale-[1.1] duration-1000">
        <Link to="/" className="font-passion text-4xl">
          PET SOCIETY
        </Link>
      </div>
      <div className="hidden md:block font-nunito px-8 text-xl">
        <Link
          to="/"
          className="px-12 hover:underline underline-offset-8"
          href="#"
        >
          Inicio
        </Link>
        <a className="px-12 hover:underline underline-offset-8" href="#">
          Nosotros
        </a>
        <Link
          to="/productos"
          className="px-12 hover:underline underline-offset-8"
        >
          Productos
        </Link>
        <a className="px-12 hover:underline underline-offset-8" href="#">
          Contacto
        </a>
      </div>
      <CartWidget />
    </div>
  );
};
