import Dog from "../../images/dog.gif";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center h-96">
      <h1 className="font-passion text-6xl">Cargando...</h1>
      <img className="w-48 h-40" src={Dog} />
    </div>
  );
};
