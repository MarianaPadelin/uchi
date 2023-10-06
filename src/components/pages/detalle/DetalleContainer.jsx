import { useEffect, useState } from "react";
import { Detalle } from "./Detalle"
import { useParams } from "react-router-dom";
import { productosCompletos } from "../../../routes/productosCompletos";
import Loader from "../../common/Loader";


export const DetalleContainer = () => {

   const [seleccionado, setSeleccionado] = useState({});

    const { id } = useParams();

    useEffect(() => {
      const productoEncontrado = productosCompletos.find((producto)=>producto.id == id)
      const obtenerProducto = new Promise((resolve, reject) => {
        resolve(productoEncontrado)
        reject("error")
      })

      obtenerProducto.then((res)=> setSeleccionado(res)).catch((err)=> console.log(err))

     }, [id])

  return (

  //  <Detalle seleccionado={ seleccionado } />
    <div> {seleccionado.id ? (<Detalle seleccionado={seleccionado} />) : (<Loader />) }</div>
  )
}



