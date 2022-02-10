import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-white h-[32rem] rounded-lg md:flex md:flex-row md:justify-center md:items-center">
      <div className="p-12 flex flex-row">
        <div className="bg-lightgreen rounded-lg md:p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
            />
          </svg>
        </div>
        <div>
          <h3 className="pl-2 font-passion text-2xl">Delivery</h3>
          <p className="pl-2 font-nunito text-lg max-w-lg">
            Contamos con delivery gratuito
          </p>
        </div>
      </div>
      <div className="p-12 flex flex-row">
        <div className="bg-beige rounded-lg md:p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <h3 className="pl-2 font-passion text-2xl">Calidad</h3>
          <p className="pl-2 font-nunito text-lg md:max-w-lg">
            Nuestros productos son de 100% algodón
          </p>
        </div>
      </div>
      <div className="p-12 flex flex-row">
        <div className="bg-lightpurple rounded-lg md:p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
            />
          </svg>
        </div>
        <div>
          <h3 className="pl-2 font-passion text-2xl">Variedad</h3>
          <p className="pl-2 font-nunito text-lg">
            Tenemos productos de todo tipo
          </p>
        </div>
      </div>
    </div>
  );
}
