import { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { Cart } from "../Cart/Cart";

export const CartWidget = () => {
  const { cantidadCart, cart } = useContext(CartContext);

  return (
    <Link to="/cart">
      <div className="relative m-8 duration-1000 hover:scale-125">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
        </a>
        <span className="bg-lightred absolute right-[-0.5rem] top-[-0.5rem] rounded-full px-2">
          {cantidadCart()}
        </span>
      </div>
    </Link>
  );
};
