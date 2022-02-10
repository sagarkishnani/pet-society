import { Item } from "../Item/Item";
import ItemFilter from "../ItemFilter/ItemFilter";

export const ItemList = ({ productos }) => {
  return (
    <div>
      <div className="bg-lightgray py-8">
        <div className="flex flex-col items-center md:flex-row md:flex-wrap">
          <ItemFilter />
          {productos.map((el) => (
            <Item key={el.id} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};
