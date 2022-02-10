import React from "react";
import Dog from "../../../images/smile.png";
import { Link } from "react-router-dom";

export default function MainBanner() {
  return (
    <div className="banner flex flex-col items-center md:flex md:flex-row md:justify-center md:items-center">
      <div className="p-12 text-center md:text-left">
        <h1 className="font-passion text-5xl md:pb-8">
          Conoce nuestros productos
        </h1>
        <p className="font-nunito max-w-lg md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link to="/productos">
          <button className="mt-8 font-nunito text-xl drop-shadow bg-lightred text-white rounded-lg p-4 hover:scale-110 duration-1000">
            Ver productos
          </button>
        </Link>
      </div>
      <div>
        <img
          className="hidden h-96 w-80 md:visible md:block md:h-[44rem] md:w-[36rem]"
          src={Dog}
        ></img>
      </div>
    </div>
  );
}
