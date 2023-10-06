import "./Detalle.css"
// import { productos } from "../../../routes/productos";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";


export const Detalle = ( { seleccionado } ) => {
// const [seleccionado, setSeleccionado] = useState({});

// const { id } = useParams();


// let productoFiltrado = productos.find(
//   () => {productos.id === useParams}
// ); 

// console.log(productoFiltrado)

//AGARRA EL PRIMER ELEMENTO DEL ARRAY SOLAMENTE, NO IDENTIFICA POR ID


// useEffect(() => {
//   setSeleccionado(...productos)},[id])



  return (
    <div className="detalle">
      <h1>{seleccionado.title}</h1>
    </div>
  );
};
