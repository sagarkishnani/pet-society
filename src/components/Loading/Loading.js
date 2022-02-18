import Dog from "../../images/dog.gif";

export const Loading = () => {
  return (
    <div className="flex h-96 items-center justify-center">
      <h1 className="font-passion text-6xl">Cargando...</h1>
      <img className="h-40 w-48" src={Dog} />
    </div>
  );
};
