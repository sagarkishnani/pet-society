import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Loading } from "../../Loading/Loading";
import { db } from "../../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(null);

  const { itemId } = useParams();

  console.log(itemId);
  console.log(item);

  useEffect(() => {
    setLoading(true);

    // pedirDatos()
    //   .then((res) => {
    //     setItem(res.find((el) => el.id === Number(itemId)));
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });

    // 1.- referencia al document
    const docRef = doc(db, "productos", itemId);
    // 2.- peticion del doc
    getDoc(docRef)
      .then((doc) => {
        setItem({ id: doc.id, ...doc.data() });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container my-5">
      {loading ? <Loading /> : <ItemDetail {...item} />}
    </div>
  );
};
