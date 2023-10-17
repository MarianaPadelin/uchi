import { useParams } from "react-router-dom";
import { Productos } from "./Productos";
import { useEffect, useState } from "react";
import { productosCompletos } from "../../../routes/productosCompletos";

export const ProductosContainer = () => {
  const { nombreCategoria } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    let busqueda;
    if (nombreCategoria) {
      busqueda = productosCompletos.filter(
        (producto) => producto.categoria === nombreCategoria
      );
    } else {
      busqueda = productosCompletos;
    }


    const obtenerProducto = new Promise((resolve, reject) => {
      resolve(busqueda);
      reject("error");
    });

    obtenerProducto
      .then((res) => setItems(res))
      .catch((err) => console.log(err));
  }, [nombreCategoria]);

  

  return (
    <div>
      <Productos items={items} />
    </div>
  );
};
