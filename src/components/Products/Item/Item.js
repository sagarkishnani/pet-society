import { Link } from "react-router-dom";

export const Item = ({ id, nombre, precio, img, desc }) => {
  return (
    <div className="rounded-xl shadow-md p-18 m-6 h-96 w-96 md:h-[28rem] md:w-[22rem] bg-white text-center">
      <div>
        <img
          className="h-72 w-72 md:h-72 md:w-96 m-auto"
          src={img}
          alt={nombre}
        ></img>
      </div>
      <Link to={`/detail/${id}`}>
        <h1 className="font-nunito text-lg font-bold text-center">{nombre}</h1>
      </Link>
      <div className="flex flex-row justify-around pt-12 items-center">
        <p className="font-nunito font-bold text-gray text-xl">S/.{precio}</p>
        <Link to={`/detail/${id}`}>
          <button className="font-nunito drop-shadow w-24 bg-lightred text-white rounded-3xl p-3 hover:scale-110 duration-1000">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};
