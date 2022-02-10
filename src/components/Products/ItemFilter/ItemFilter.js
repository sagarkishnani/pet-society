import React from "react";
import { Link } from "react-router-dom";

export default function ItemFilter() {
  return (
    <div className="rounded-xl shadow-md  p-8 bg-white h-96 w-64">
      <h1 className="font-passion text-4xl">Categorías</h1>
      <ul className="pt-4">
        <Link to="/productos/casacas">
          <li className="font-nunito text-gray font-bold text-xl pb-2">
            Casacas
          </li>
        </Link>
        <Link to="/productos/camisas">
          <li className="font-nunito text-xl text-gray font-bold pb-2">
            Camisas
          </li>
        </Link>
      </ul>
    </div>
  );
}
