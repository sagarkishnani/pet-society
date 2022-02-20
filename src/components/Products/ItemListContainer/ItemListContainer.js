import { useEffect, useState } from "react";
import { pedirDatos } from "../../../helpers/pedirDatos";
import { ItemList } from "../ItemList/ItemList";
import { Loading } from "../../Loading/Loading";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  const { catId } = useParams();

  useEffect(() => {
    setLoading(true);

    //Pedir datos de manera local
    //   pedirDatos()
    //     .then((res) => {
    //       if (catId) {
    //         setProductos(res.filter((el) => el.categoria === catId));
    //       } else {
    //         setProductos(res);
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     })
    //     .finally(() => {
    //       setLoading(false);
    //     });
    // }, [catId]);

    const productosRef = collection(db, "productos");
    const q = catId
      ? query(productosRef, where("categoria", "==", catId))
      : productosRef;
    // 2.- pedir esa ref
    getDocs(q)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [catId]);

  return <>{loading ? <Loading /> : <ItemList productos={productos} />}</>;
};
