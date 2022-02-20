import React from "react";
import { Link } from "react-router-dom";

export default function ItemFilter() {
  return (
    <div className="h-96 w-64 rounded-xl bg-white p-8 shadow-md">
      <h1 className="font-passion text-4xl">Categorías</h1>
      <ul className="pt-4">
        <Link to="/productos/casacas">
          <li className="font-nunito text-gray pb-2 text-xl font-bold">
            Casacas
          </li>
        </Link>
        <Link to="/productos/camisas">
          <li className="font-nunito text-gray pb-2 text-xl font-bold">
            Camisas
          </li>
        </Link>
        <Link to="/productos/polos">
          <li className="font-nunito text-gray pb-2 text-xl font-bold">
            Polos
          </li>
        </Link>
        <Link to="/productos/chalecos">
          <li className="font-nunito text-gray pb-2 text-xl font-bold">
            Chalecos
          </li>
        </Link>
      </ul>
    </div>
  );
}
