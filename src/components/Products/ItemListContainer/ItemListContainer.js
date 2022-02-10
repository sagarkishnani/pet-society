import { useEffect, useState } from "react";
import { pedirDatos } from "../../../helpers/pedirDatos";
import { ItemList } from "../ItemList/ItemList";
import { Loading } from "../../Loading/Loading";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  const { catId } = useParams();

  useEffect(() => {
    setLoading(true);

    pedirDatos()
      .then((res) => {
        if (catId) {
          setProductos(res.filter((el) => el.categoria === catId));
        } else {
          setProductos(res);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [catId]);

  return <>{loading ? <Loading /> : <ItemList productos={productos} />}</>;
};