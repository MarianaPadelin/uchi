import { useParams } from "react-router-dom";
import { servicios } from "../../../routes/servicios";
import { ServicioIndividual } from "./ServicioIndividual";
import { useEffect, useState } from "react";


export const ServicioIndividualContainer = () => {

   const [seleccionado, setSeleccionado] = useState({});

    const { id } = useParams();

    useEffect(() => {
      const servicioEncontrado = servicios.find((servicio)=>servicio.id == id)
      const obtenerServicio = new Promise((resolve, reject) => {
        resolve(servicioEncontrado)
        reject("error")
      })

      obtenerServicio.then((res)=> setSeleccionado(res)).catch((err)=> console.log(err))

     }, [id])

 


  return <ServicioIndividual seleccionado={seleccionado} />;
};
