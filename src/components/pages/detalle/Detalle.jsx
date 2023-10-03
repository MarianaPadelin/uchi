import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Detalle.css"
import { productos } from "../../../routes/productos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const Detalle = () => {
const [seleccionado, setSeleccionado] = useState({});

const { id } = useParams();


// let productoFiltrado = productos.find(
//   () => {productos.id === useParams}
// ); 

// console.log(productoFiltrado)

//AGARRA EL PRIMER ELEMENTO DEL ARRAY SOLAMENTE, NO IDENTIFICA POR ID


useEffect(() => {
  setSeleccionado(...productos)},[id])



  return (
    <div className="detalle">
      <Card>
        <CardMedia
          component="img"
          alt={seleccionado.title}
          height="140"
          image={seleccionado.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {seleccionado.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {seleccionado.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Icono de tienda</Button>
        </CardActions>
      </Card>
      <Button href="/productos" variant="contained" className="botonera">
        Ver todos los productos
      </Button>
      <Button href="/" variant="contained" className="botonera">
        Volver al inicio
      </Button>
    </div>
  );
};
