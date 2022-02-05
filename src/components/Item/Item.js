export const Item = ({ id, nombre, precio, img, desc }) => {
  return (
    <div className="rounded-xl shadow-md p-18 m-6 h-96 w-96 md:h-[25rem] md:w-[30rem] bg-white text-center">
      <img
        className="h-72 w-72 md:h-72 md:w-96 m-auto"
        src={img}
        alt={nombre}
      ></img>
      <h1 className="font-nunito font-bold text-center">{nombre}</h1>
      <p className="font-nunito font-bold  bg-yellow">S/.{precio}</p>
    </div>
  );
};
