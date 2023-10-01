import { useEffect, useState } from "react";
import { Detalle } from "./Detalle"
import { useParams } from "react-router-dom";
import { productos } from "../../../routes/productos"; 
import Loader from "../../common/Loader";
export const DetalleContainer = () => {

   const [seleccionado, setSeleccionado] = useState({});

    const { id } = useParams();

    useEffect(() => {

      let productoSeleccionado = productos
      setSeleccionado({...productoSeleccionado.title})}, [id])

  return (
    <div> {seleccionado.id ? (<Detalle seleccionado={seleccionado} />) : (<Loader />) }</div>
  )
}



