import React from "react";
import Dog from "../../../images/smile.png";
import { Link } from "react-router-dom";

export default function MainBanner() {
  return (
    <div className="banner flex flex-col items-center md:flex md:flex-row md:items-center md:justify-center">
      <div className="p-12 text-center md:text-left">
        <h1 className="font-passion text-5xl md:pb-8">
          Conoce nuestros productos
        </h1>
        <p className="font-nunito max-w-lg md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link to="/productos">
          <button className="font-nunito bg-lightred mt-8 rounded-lg p-4 text-xl text-white drop-shadow duration-1000 hover:scale-110">
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
