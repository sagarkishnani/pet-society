import { Item } from "../Item/Item";

export const ItemList = ({ productos }) => {
  return (
    <div className="bg-lightgray">
      <div className="flex flex-col items-center md:flex-row">
        {productos.map((el) => (
          <Item key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};
